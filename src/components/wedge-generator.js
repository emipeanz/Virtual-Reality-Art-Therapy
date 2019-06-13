AFRAME.registerComponent('wedge-generator', {

    schema: {  },

    init: function(){
        var self = this;

        //Set up initial state and variables
        var data = this.data; //get all the data from the schema.
        var el = this.el; //get reference to the entity.

        //Bounding box coordinates (m) (These would be set by therapist input)
        var maxUpwardsReach = 0.5; // Reaching up
        var maxLateralReach = 0.5; // Reaching to the left and right
        var maxForwardReach = 0.5; // Reaching forwards

        //Resting position of controller, used as the origin of the bounding box
        var startXPos = 0;
        var startYPos = 0;
        var startZPos = 0;

        this.controllerPosition = new THREE.Vector3();

        this.userControlledWedgeLocation = true;

        this.camera = document.querySelector('#acamera');

        el.sceneEl.addEventListener('position-changed', function (evt) {
            if (evt.detail.position.x !== 0 && evt.detail.position.y !== 0 && evt.detail.position.z !== 0) {
                self.controllerPosition = evt.detail.position;
            }
        })

        el.sceneEl.addEventListener('generateWedge', function(){
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
            else{
                //Generate the x, y and z coordinates randomly in the centre of the screen
                var x = (Math.random())* (Math.floor(Math.random()*2) === 1 ? 1 : -1);
                // elevate so not on ground
                var y = Math.random() + 0.5
                var z = (Math.random())* (Math.floor(Math.random()*2) === 1 ? 1 : -1);
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
    })
    },
    tick: function() {
        // Track the position of the headset
        self.controllerEntity = document.querySelector('#right-hand');
        this.camera = document.querySelector('#acamera');

        // If the resting position of the controller is not set, set when controller position defined
        if (this.startXPos === undefined) {
            // Track the position of the controller
            this.gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
            this.controllerEntity = document.querySelector('#right-hand');
            var position = self.controllerEntity.getAttribute('position');

            // Set the origin position to the current position of the controller
            if (position.x !== 0) {
                this.startXPos = position.x;
                this.startYPos = position.y + 0.75;
                this.startZPos = position.z;
            }
        }
    }
})
