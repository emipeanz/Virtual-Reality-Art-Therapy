AFRAME.registerComponent('wedge-generator', {

    schema: {  },

    init: function(){
        var self = this

        //Set up initial state and variables
        var data = this.data; //get all the data from the schema.
        var el = this.el; //get reference to the entity.

        //Bounding box coordinates (m) (These would be set by therapist input)
        var maxUpwardsReach = 0.5; // Reaching up
        var maxLateralReach = 0.5; // Reaching to the left and right
        var maxForwardReach = 0.5; // Reaching forwards

        this.userControlledWedgeLocation = true;

        this.camera = document.querySelector('#acamera');

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



            var  position
            if(self.userControlledWedgeLocation){

                self.controllerEntity = document.querySelector('#right-hand');

                var  position = self.controllerEntity.getAttribute('position');
                position.y = position.y + 0.75;
            }
            else{
                //Generate the x, y and z coordinates randomly in the centre of the screen
                var x = (Math.random())* (Math.floor(Math.random()*2) === 1 ? 1 : -1);
                // elevate so not on ground
                var y = Math.random() + 0.5
                var z = (Math.random())* (Math.floor(Math.random()*2) === 1 ? 1 : -1);
                position = x + " " + y + " " + z;
            }

            height = 0.1;

            //Flowers should have between 4 and 6 petals
            var numPetals = Math.round(Math.random() * 2) + 4;
            //Radius is calculated based on number of petals
            var radiusBottom = height *  Math.tan(Math.PI / numPetals);

            var rotation = self.camera.getAttribute('rotation');
            rotation.y = rotation.y + 90;
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
        self.controllerEntity = document.querySelector('#right-hand');

        this.camera = document.querySelector('#acamera');

    }
})
