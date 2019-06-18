/* globals AFRAME THREE */

AFRAME.registerComponent('brush', {
  schema: {
    color: {type: 'color', default: ''},
    size: {default: 0.01, min: 0.001, max: 0.3},
    brush: {default: 'smooth'},
    enabled: { default: true },
    active: { default: false },
    position: { default: "1 1 1"}
  },
  init: function () {

    var data = this.data;
    this.color = new THREE.Color(data.color);
    this.position = new THREE.Vector3();
    this.active = false;

    this.el.emit('brushcolor-changed', {color: this.color});
    this.el.emit('brushsize-changed', {brushSize: data.size});
    this.el.emit('position-changed', {position: data.position});

    this.obj = this.el.object3D;

    this.currentStrokes = [];
    this.strokeEntities = [];

    this.sizeModifier = 0.0;
    this.textures = {};
    this.currentMap = 0;

    this.model = this.el.getObject3D('mesh');
    this.drawing = false;

    var self = this;
    this.setRandomColor();

    this.currentMaxBrushSize = 0.07;
    this.maxBrushSize = 0.07;
    this.minBrushSize = 0.004;

    this.currentPetalNum = 4;

    this.brushSizeScaleFactor;
    this.brushSizeScalingOffset;

    this.previousAxis = 0;

    this.el.addEventListener('undo', function(evt) {
      if (!self.data.enabled) { return; }
      self.system.undo();
      document.getElementById('ui_undo').play();
    });

    this.el.addEventListener('paint', function (evt) {
      if (!self.data.enabled) { return; }
      // Trigger
      var value = evt.detail.value;
      self.sizeModifier = value;
      if (value > 0.1) { //if trigger pressure is above
        if (!self.active) { // if you havent started painting
          self.startNewStroke();
          self.active = true;
          self.el.emit('stroke-paint-changed', true);
        }
      } else {  // trigger pressed, but too lightly
        if (self.active) {  // if you were just painting
            self.previousEntity = self.currentEntity;
            self.currentStroke = null;
            self.el.emit('stroke-paint-changed', false);
            if(self.hue !== undefined && self.sat !== undefined && self.light !== undefined){
                self.updateColor();
                self.updateBrushSize();
            }
        }
        self.active = false;
        self.currentStrokes = [];
      }
    })

    this.el.sceneEl.addEventListener('wedge-generated', function(evt){
      self.currentPetalNum = evt.detail.data.currentPetalNum;
      self.setRandomColor();
      self.setMaxBrushSize(evt.detail.data);
    })
  },

  update: function (oldData) {
    var data = this.data;
    if (oldData.color !== data.color) {
      this.color.set(data.color);
      this.el.emit('brushcolor-changed', {color: this.color});
    }
    if (oldData.size !== data.size) {
      this.el.emit('brushsize-changed', {size: data.size});
    }
  },

  tick: (function () {

    var rotation = new THREE.Quaternion();
    var scale = new THREE.Vector3();

    return function tick (time, delta) {
      this.obj.matrixWorld.decompose(this.position, rotation, scale);
      if ((this.position.x !== 0 && this.position.y !== 0 && this.position.z !== 0) &&
          (this.position.x !== 1 && this.position.y !== 1 && this.position.z !== 1) &&
          (this.position.x !== undefined && this.position.y !== undefined && this.position.z !== undefined)){
        this.el.emit('position-changed', {position: this.position});
      }

      if (this.currentStrokes[0] && this.active) {
        var pointerPosition = this.system.getPointerPosition(this.position, rotation);

        for (i = 0; i < this.currentStrokes.length; i++) {
          var tempPointer = new THREE.Vector3().copy(pointerPosition);
          tempPointer.y = tempPointer.y + 0.1 * i;

          this.currentStrokes[i].addPoint(this.position, rotation, tempPointer, this.sizeModifier, time, this.currentStrokes[i].data.petalId);
        }
      }
    };
  })(),

  startNewStroke: function () {
    document.getElementById('ui_paint').play();
    console.log("current num", this.currentPetalNum);
    for (i = 0; i < this.currentPetalNum; i++) {
      this.currentStrokes.push(this.system.addNewStroke(this.data.brush, this.color, this.data.size, i));
    }
    this.el.emit('stroke-started', {entity: this.el, stroke: this.currentStrokes[0]});
  },

  // Function finds a random color, and sets the hue variable which is the color 'theme' for the petal
  setRandomColor: function() {
    this.currentHue = Math.floor(360 * Math.random())
    this.hue = this.currentHue;
    this.sat = Math.floor(25 + 70 * Math.random());
    this.light = Math.floor(40 + 45 * Math.random());
    this.setColor(this.hue, this.sat, this.light);
  },

  // Changes the stroke color based on what the hue is
  updateColor: function() {
    var nextHue = Math.floor(Math.random() * 60 + this.currentHue - 30);
    this.hue = Math.min(Math.max(nextHue, 0), 360);
    this.setColor(this.hue, this.sat, this.light);
  },

  // Updates the brush color
  setColor: function(hue, sat, light){
    var color = new THREE.Color('hsl(' + hue + ', ' + sat + '%, ' + light + '%)');
    this.color.set(color);
    this.el.emit('brushcolor-changed', {color: color});
  },

  // method to update the max brush size every time a new wedge is placed - it is proportional to the wedge size
  setMaxBrushSize: function(data){
    if (this.brushSizeScaleFactor === undefined) {
      // Constants must be defined in order to scale the max and min areas with the max and min brush sizes
      const maxArea = Math.pow(data.maxHeight, 2 )* Math.tan( Math.PI / data.minPetalNum);
      const minArea = Math.pow(data.minHeight, 2) * Math.tan(Math.PI / data.maxPetalNum);

      this.brushSizeScaleFactor = (this.minBrushSize - this.maxBrushSize) / (minArea - maxArea);
      this.brushSizeScalingOffset = this.minBrushSize - minArea * this.brushSizeScaleFactor;
    }

    const area = data.currentHeight * data.currentRadius;
    // The maximum possible brush size for the current wedge is proportional to the size of the wedge
    this.currentMaxBrushSize = this.brushSizeScaleFactor * area + this.brushSizeScalingOffset;

    this.updateBrushSize();
  },

  // method for updating a specific brush size every stroke, related to max and min brush size and is a random size
  // between the two
  updateBrushSize: function(){
    // Brush size can be anywhere between the minimum possible and current maximum brush size.
    var size = Math.random() * (this.currentMaxBrushSize - this.minBrushSize) + this.minBrushSize;
    this.el.emit('brushsize-changed', {size: size});
    this.el.setAttribute('brush', 'size', size);
  }
});
