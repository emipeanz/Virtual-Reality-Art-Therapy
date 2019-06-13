AFRAME.registerComponent('wedge-generator', {

    schema: {  },

    init: function(){
        var self = this;

        //Set up initial state and variables
        var el = this.el; //get reference to the entity.

        //Bounding box coordinates (m) (These would be set by therapist input)
        this.maxXReach = 0.3; // Reaching to the left and right
        this.maxYReach = 0.3; // Reaching up
        this.maxZReach = 0.3; // Reaching forwards

        //Resting position of controller, used as the origin of the bounding box
        this.originControllerPosition = new THREE.Vector3();
        this.originSet = false;

        //If this is set to true, wedges are generated where the user clicks, otherwise location is random
        this.userControlledWedgeLocation = false;

        //Position of the headset and controller are tracked
        this.camera = document.querySelector('#acamera');
        this.controllerPosition = new THREE.Vector3();

        //Update position of controller stored when it changes
        el.sceneEl.addEventListener('position-changed', function (evt) {
            self.controllerPosition = evt.detail.position;
        });

        el.sceneEl.addEventListener('generateWedge', function(){
            // Set origin of bounded box to location of controller on first click
            if (!self.originSet) {
                self.originControllerPosition = self.controllerPosition.clone();
                self.originSet = true;
            }
            // generate a wedge
            else{
                // remove old wedge to make room for new one
                self.removeCurrentWedge()
                self.generateNewWedge()
            }
        })
    },

    //Generate a wireframe visualisation of the bounding box wedges can be generated in.
    generateBoundingBoxVisualisation: function() {

        var box = document.createElement('a-box')

        box.setAttribute('height', this.maxYReach);
        box.setAttribute('depth', this.maxZReach);
        box.setAttribute('width', this.maxXReach);
        box.setAttribute('material',  "wireframe:true");

        var y = (this.maxYReach / 2) + this.originControllerPosition.y;
        var z = this.originControllerPosition.z - (this.maxZReach / 2);

        var boxPosition =  this.originControllerPosition.x + " " + y + " " + z;

        box.setAttribute('position', boxPosition);

        this.el.sceneEl.appendChild(box)
    },

    //Generate coordinates within a bounded box
    generateRandomBoundedCoordinates: function() {
        var x = Math.random() * this.maxXReach + this.originControllerPosition.x - this.maxXReach/2;
        var y = Math.random() * this.maxYReach + this.originControllerPosition.y;
        var z = this.originControllerPosition.z - Math.random() * this.maxZReach;

        return x + " " + y + " " + z;
    },

    //Remove the wedge currently onscreen to make room for a new one
    removeCurrentWedge: function() {
        var oldWedge = document.querySelector('a-cone');
        if(oldWedge !== null){
            oldWedge.parentElement.removeChild(oldWedge);
        }
    },

    generateNewWedge: function(){
        var wedge = document.createElement('a-cone')

        // Depending on the boolean variable, let the users place the wedge where they want, or randomly
        if(this.userControlledWedgeLocation){
            // Position wedge relative to position of controller
            var position = this.controllerPosition;
        }
        //Generate the x, y and z coordinates somewhere within the bounded box
        else{
            var position = this.generateRandomBoundedCoordinates();
        }

        // Height is between 0.1 and 0.5
        height = Math.random() * 0.4 + 0.1;

        //Flowers should have between 4 and 10 petals
        var numPetals = Math.round(Math.random() * 6) + 4;
        //Radius is calculated based on number of petals
        var radiusBottom = height *  Math.tan(Math.PI / numPetals);

        var rotation = this.camera.getAttribute('rotation');
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

        this.el.sceneEl.appendChild(wedge)
    },

    tick: function() {
        // Track the position of the headset
        this.camera = document.querySelector('#acamera');
    }
})
