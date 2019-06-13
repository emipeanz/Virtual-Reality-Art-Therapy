/* globals AFRAME THREE */

AFRAME.registerComponent('brush', {
  schema: {
    color: {type: 'color', default: '#91f9ff'},
    size: {default: 0.01, min: 0.001, max: 0.3},
    brush: {default: 'smooth'},
    enabled: { default: true },
    active: { default: false },
    position: { default: "1 1 1"}
  },
  init: function () {

    this.RGBEnum = {
      RED: 1,
      GREEN: 2,
      BLUE: 3
    };

    var data = this.data;
    this.color = new THREE.Color(data.color);
    this.position = new THREE.Vector3();
    this.active = false;

    this.el.emit('brushcolor-changed', {color: this.color});
    this.el.emit('brushsize-changed', {brushSize: data.size});
    this.el.emit('position-changed', {position: data.position});

    this.obj = this.el.object3D;

    this.currentStroke = null;
    this.strokeEntities = [];

    this.sizeModifier = 0.0;
    this.textures = {};
    this.currentMap = 0;

    this.model = this.el.getObject3D('mesh');
    this.drawing = false;

    var self = this;
    this.colorHue;
    this.getRandomColor();

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
        }
        self.active = false;
        console.log('     BEFORE CHECK = ', self.red, ' ', self.green, ' ', self.blue);
        if(self.red !== undefined && self.blue !== undefined && self.green !== undefined){
          console.log('in if statement');
          self.changeHue();
        }
      }
    })

    this.el.addEventListener('generateWedge', function (){
      self.color.set(self.getRandomColor());
      self.el.emit('brushcolor-changed', {color: self.color});

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

    //this.el.addEventListener('axismove', function(evt) {
    //  console.log(evt)
    //})
    var rotation = new THREE.Quaternion();
    var scale = new THREE.Vector3();

    return function tick (time, delta) {
      this.obj.matrixWorld.decompose(this.position, rotation, scale);
      if ((this.position.x !== 0 && this.position.y !== 0 && this.position.z !== 0) &&
          (this.position.x !== 1 && this.position.y !== 1 && this.position.z !== 1) &&
          (this.position.x !== undefined && this.position.y !== undefined && this.position.z !== undefined)){
        this.el.emit('position-changed', {position: this.position});
      }


      if (this.currentStroke && this.active) {
        var pointerPosition = this.system.getPointerPosition(this.position, rotation);
        this.currentStroke.addPoint(this.position, rotation, pointerPosition, this.sizeModifier, time);
      }
    };
  })(),

  startNewStroke: function () {
    document.getElementById('ui_paint').play();
    this.currentStroke = this.system.addNewStroke(this.data.brush, this.color, this.data.size);
    this.el.emit('stroke-started', {entity: this.el, stroke: this.currentStroke});
  },

  getRandomColor: function() {
    this.red = Math.floor(Math.random() * 155 + 100);
    this.green = Math.floor(Math.random() * 155 + 100);
    this.blue = Math.floor(Math.random() * 155 + 100);

    console.log(' RGB = ', this.red, ' ', this.green, ' ', this.blue);

    if((this.red < this.blue) && (this.red > this.green) ||
        (this.red > this.blue) && (this.red < this.green)){
      this.colorHue = this.RGBEnum.RED;
    }
    else if((this.blue < this.green) && (this.blue > this.red) ||
        (this.blue > this.green) && (this.blue < this.red)){
      this.colorHue = this.RGBEnum.BLUE;
    }
    else{
      this.colorHue = this.RGBEnum.GREEN;
    }
    this.updateColor(this.red, this.green, this.blue);
  },

  changeHue: function() {
    console.log('changing hue');
    if(this.colorHue === this.RGBEnum.RED){
      this.red = Math.floor(Math.random() * 255);
    }
    else if(this.colorHue === this.RGBEnum.GREEN){
      this.green = Math.floor(Math.random() * 255);
    }
    else{
      this.blue = Math.floor(Math.random() * 255);
    }
    console.log('     NEW RGB = ', this.red, ' ', this.green, ' ', this.blue);
    this.updateColor(this.red, this.green, this.blue);
  },

  // componentToHex: function(c) {
  //   var hex = c.toString(16);
  //   return hex.length === 1 ? "0" + hex : hex;
  // },
  //
  // rgbToHex: function(r, g, b) {
  // return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  // },

  updateColor: function(red, green, blue){
    var color = new THREE.Color('rgb(' + red + ', ' + green + ', ' + blue + ')');
    console.log('color color = ', color);
    this.color.set(color);
    this.el.emit('brushcolor-changed', {color: color});
  }
});
