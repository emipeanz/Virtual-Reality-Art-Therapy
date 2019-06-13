AFRAME.registerComponent('wedge-generator', {

    schema: {  },

    init: function(){
        var self = this;

        //Set up initial state and variables
        var data = this.data; //get all the data from the schema.
        var el = this.el; //get reference to the entity.

        //Bounding box coordinates (m) (These would be set by therapist input)
        this.maxXReach = 0.3; // Reaching to the left and right
        this.maxYReach = 0.3; // Reaching up
        this.maxZReach = 0.3; // Reaching forwards

        //Resting position of controller, used as the origin of the bounding box
        this.originControllerPosition = new THREE.Vector3();
        this.originSet = false;

        this.controllerPosition = new THREE.Vector3();

        this.userControlledWedgeLocation = false;

        this.camera = document.querySelector('#acamera');

        el.sceneEl.addEventListener('position-changed', function (evt) {
            self.controllerPosition = evt.detail.position;
        });

        el.sceneEl.addEventListener('generateWedge', function(){
            // Set origin of bounded box to location of controller on first click
            if (!self.originSet) {
                self.originControllerPosition = self.controllerPosition.clone();
                self.originSet = true;

                var box = document.createElement('a-box')

                box.setAttribute('height', self.maxYReach);
                box.setAttribute('depth', self.maxZReach);
                box.setAttribute('width', self.maxXReach);
                box.setAttribute('material',  "wireframe:true");

                var y = (self.maxYReach / 2) + self.originControllerPosition.y;
                var z = self.originControllerPosition.z - (self.maxZReach / 2);

                var boxPosition =  self.originControllerPosition.x + " " + y + " " + z;

                box.setAttribute('position', boxPosition);

                self.el.sceneEl.appendChild(box)
            }
            // generate a wedge
            else{
                // remove old wedge to make room for new one
                var oldWedge = document.querySelector('a-cone');
                if(oldWedge !== null){
                    oldWedge.parentElement.removeChild(oldWedge);
                }

                var wedge = document.createElement('a-cone')

                global.navigator = global.window.navigator;
                self.gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
                self.VRDisplays = navigator.getVRDisplays() ?  navigator.getVRDisplays() : [];

                // Depending on the boolean variable, let the users place the wedge where they want, or randomly
                if(self.userControlledWedgeLocation){
                    // Position wedge relative to position of controller
                    var position = self.controllerPosition;
                }
                //Generate the x, y and z coordinates randomly in the centre of the screen
                else{
                    var x = Math.random() * self.maxXReach + self.originControllerPosition.x - self.maxXReach/2;
                    var y = Math.random() * self.maxYReach + self.originControllerPosition.y;
                    var z = self.originControllerPosition.z - Math.random() * self.maxZReach;

                    var position = x + " " + y + " " + z;
                }

                // Height is between 0.1 and 0.5
                height = Math.random() * 0.4 + 0.1;

                //Flowers should have between 4 and 8 petals
                var numPetals = Math.round(Math.random() * 4) + 4;
                //Radius is calculated based on number of petals
                var radiusBottom = height *  Math.tan(Math.PI / numPetals);

                var rotation = self.camera.getAttribute('rotation');
                rotation.x = 0;
                rotation.z = 0;

                wedge.setAttribute("scale", "0.1 1 1")
                wedge.setAttribute("position", position)
                wedge.setAttribute("height", height)
                wedge.setAttribute("color", "#ffffff")
                wedge.setAttribute("opacity", "0.2")
                wedge.setAttribute("geometry" , "radiusBottom:" + radiusBottom);
                wedge.setAttribute('material',  "wireframe:true");
                wedge.setAttribute('rotation', rotation);

                self.el.sceneEl.appendChild(wedge)
            }


    })
    },
    tick: function() {
        // Track the position of the headset
        self.controllerEntity = document.querySelector('#right-hand');
        this.camera = document.querySelector('#acamera');
    }
})
