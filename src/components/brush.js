/* globals AFRAME THREE */
AFRAME.registerComponent('brush', {
  schema: {
    color: {type: 'color', default: '#ef2d5e'},
    size: {default: 0.01, min: 0.001, max: 0.3},
    brush: {default: 'smooth'},
    enabled: { default: true }
  },
  init: function () {
    var data = this.data;
    this.color = new THREE.Color(data.color);

    this.el.emit('brushcolor-changed', {color: this.color});
    this.el.emit('brushsize-changed', {brushSize: data.size});

    this.active = false;
    this.obj = this.el.object3D;

    this.currentStroke = null;
    this.strokeEntities = [];

    this.sizeModifier = 0.0;
    this.textures = {};
    this.currentMap = 0;

    this.model = this.el.getObject3D('mesh');
    this.drawing = false;

    var self = this;

    this.previousAxis = 0;
/*
    this.el.addEventListener('axismove', function (evt) {
      if (evt.detail.axis[0] === 0 && evt.detail.axis[1] === 0 || this.previousAxis === evt.detail.axis[1]) {
        return;
      }

      this.previousAxis = evt.detail.axis[1];
      var size = (evt.detail.axis[1] + 1) / 2 * self.schema.size.max;

      self.el.setAttribute('brush', 'size', size);
    });
*/
    this.el.addEventListener('undo', function(evt) {
      if (!self.data.enabled) { return; }
      self.system.undo();
      document.getElementById('ui_undo').play();
    });

    this.el.addEventListener('paint', function (evt) {
      var el = self.el;
      if (!self.data.enabled) { return; }
      // Trigger
      var value = evt.detail.value;
      self.sizeModifier = value;
      if (value > 0.1) { //if trigger pressure is above
        if (!self.active) { // if you havent started painting
          self.startNewStroke();
          self.active = true;
          this.el.emit('stroke-paint-start');
        }
      } else {  // trigger pressed, but too lightly
        if (self.active) {  // if you were just painting
          self.previousEntity = self.currentEntity;
          self.currentStroke = null;
        }
        this.el.emit("stroke-paint-end" , new Date())
        self.active = false;
      }
    });
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

    //this.el.addEventListener('axismove', function(evt) {
    //  console.log(evt)
    //})

    var position = new THREE.Vector3();
    var rotation = new THREE.Quaternion();
    var scale = new THREE.Vector3();

    return function tick (time, delta) {
      if (this.currentStroke && this.active) {
        this.obj.matrixWorld.decompose(position, rotation, scale);
        var pointerPosition = this.system.getPointerPosition(position, rotation);
        this.currentStroke.addPoint(position, rotation, pointerPosition, this.sizeModifier, time);
      }
    };
  })(),
  startNewStroke: function () {
    document.getElementById('ui_paint').play();
    this.currentStroke = this.system.addNewStroke(this.data.brush, this.color, this.data.size);
    this.el.emit('stroke-started', {entity: this.el, stroke: this.currentStroke});
  }
});
