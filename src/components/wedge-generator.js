AFRAME.registerComponent('wedge-generator', {

    schema: {
        minHeight: { default: 0.1 },
        maxHeight: { default: 0.3 },
        minPetalNum: { default: 4 },
        maxPetalNum: { default: 10 },
        currentPetalNum: { default: 4},
        currentHeight: { default: 0.1 },
        currentRadius: { default: 0.1 },
        originControllerPosition: { default: 0.1 },
        currentWedgePosition: { default: 0 },
        drawingId: { default: 0 }
    },

    init: function(){
        var self = this;
        var data = this.data;

        //Set up initial state and variables
        var el = this.el; //get reference to the entity.

        el.sceneEl.emit('update-brush', {data: this.data});

        //Bounding box coordinates (m) (These would be set by therapist input)
        this.maxXReach = 0.55; // Reaching to the left and right
        this.maxYReach = 0.55; // Reaching up
        this.maxZReach = 0.55; // Reaching forwards

        //Resting position of controller, used as the origin of the bounding box
        this.data.originControllerPosition = new THREE.Vector3();
        this.originHeadsetPosition = new THREE.Vector3();
        this.originSet = false;

        //If this is set to true, wedges are generated where the user clicks, otherwise location is random
        this.userControlledWedgeLocation = true;
        this.controllerPosition = new THREE.Vector3();

        //Update position of controller stored when it changes
        el.sceneEl.addEventListener('position-changed', function (evt) {
            self.controllerPosition = evt.detail.position;
        });

        el.sceneEl.addEventListener('generateWedge', function(){
            // Set origin of bounded box to location of controller on first click
            if (!self.originSet) {
                self.data.originControllerPosition = self.controllerPosition.clone();
                self.originHeadsetPosition = self.controllerPosition.clone();
                self.originSet = true;
                // self.generateBoundingBoxVisualisation();
            }
            // generate a wedge
            else{
                // remove old wedge to make room for new one
                self.addNewCanvas();
                self.removeCurrentWedge()
                self.generateNewWedge()
            }
        })

        document.getElementById('mode-button').addEventListener('click', function(){
            self.userControlledWedgeLocation = !self.userControlledWedgeLocation;
            if(self.userControlledWedgeLocation){
                document.getElementById('mode-button').innerHTML = 'Change Wedge Generation to Computer Controlled';
            } else{
                document.getElementById('mode-button').innerHTML = 'Change Wedge Generation to User Controlled';
            }
            self.el.emit('toggle-mode');
        });
        this.data.drawingId = 0;
    },

    //Generate a wireframe visualisation of the bounding box wedges can be generated in.
    generateBoundingBoxVisualisation: function() {

        var box = document.createElement('a-box')

        box.setAttribute('height', this.maxYReach);
        box.setAttribute('depth', this.maxZReach);
        box.setAttribute('width', this.maxXReach);+
        box.setAttribute('material',  "wireframe:true");

        var y = this.data.originControllerPosition.y - this.maxYReach/2;
        var z = this.data.originControllerPosition.z - (this.maxZReach / 2);

        var boxPosition =  this.data.originControllerPosition.x + " " + y + " " + z;

        box.setAttribute('position', boxPosition);

        this.el.sceneEl.appendChild(box)
    },

    //Generate coordinates within a bounded box
    generateRandomBoundedCoordinates: function() {
        var x = Math.random() * this.maxXReach + this.data.originControllerPosition.x - this.maxXReach/2;
        var y = Math.random() * this.maxYReach + this.data.originControllerPosition.y - this.maxYReach/2;
        var z = this.data.originControllerPosition.z - Math.random() * this.maxZReach;

        return new THREE.Vector3(x, y, z);
    },

    //Remove the wedge currently onscreen to make room for a new one
    removeCurrentWedge: function() {
        var oldWedge = document.querySelector('a-cone');
        if(oldWedge !== null){
            oldWedge.parentElement.removeChild(oldWedge);
        }
    },

    generateNewWedge: function() {
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

        this.data.currentWedgePosition = position;

        // Height is between 0.1 and 0.3
        this.data.currentHeight = Math.random() * (this.data.maxHeight - this.data.minHeight) + this.data.minHeight;

        //Flowers should have between 4 and 10 petals
        this.data.currentPetalNum = Math.round(Math.random() * (this.data.maxPetalNum - this.data.minPetalNum)) + this.data.minPetalNum;
        //Radius is calculated based on number of petals
        this.data.currentRadius = this.data.currentHeight *  Math.tan(Math.PI / this.data.currentPetalNum);

        var rotation = new THREE.Vector3(0, 0, 0);
        rotation.y = 90 -
            (Math.atan((position.z - this.originHeadsetPosition.z)/(position.x - this.originHeadsetPosition.x)))*(180/Math.PI);

        wedge.setAttribute("scale", "1 1 0.2");
        wedge.setAttribute("position", position);
        wedge.setAttribute("height", this.data.currentHeight);
        wedge.setAttribute("color", "#ffffff");
        wedge.setAttribute("opacity", "0.2");
        wedge.setAttribute("geometry" , "radiusBottom:" + this.data.currentRadius);
        wedge.setAttribute("geometry" , "radiusTop:" + 0.001);
        wedge.setAttribute('material',  "wireframe:true");
        wedge.setAttribute('rotation', rotation);

        this.addPulseAnimation(wedge);

        this.el.sceneEl.appendChild(wedge);
        this.el.sceneEl.emit('wedge-generated', {data: this.data});
    },

    addNewCanvas: function() {
        var oldWedge = document.querySelector('a-cone');
        if (oldWedge !== null) {
            drawing = document.createElement('a-entity');
            drawing.className = "a-drawing";
            drawing.id = this.data.drawingId;
            document.querySelector('a-scene').appendChild(drawing);
            this.data.drawingId++;
            this.removeAndAnimateOldCanvasDrawing();
        }
    },

    removeAndAnimateOldCanvasDrawing: function() {

        //Find the relative position of the current wedge with the origin and extend it then reapply original offset.
        var originToWedge = new THREE.Vector3();
        originToWedge.addVectors(this.data.currentWedgePosition.clone(), this.data.originControllerPosition.clone().negate()).normalize();
        //Distance to diverge by is between 1 and 2 metres
        originToWedge.multiplyScalar(Math.random() + 1);
        originToWedge.add(this.data.originControllerPosition.clone());


        //Randomly vary the vertical offset of the flower
        var yOffset = Math.random() * 1.5 - 0.5;

        //Final position of the drawing
        var formattedPos =  originToWedge.x + " " + yOffset + " " + originToWedge.z;



        var moveUpAnimation = document.createElement('a-animation');
        moveUpAnimation.setAttribute('attribute', 'position');
        moveUpAnimation.setAttribute('to', formattedPos);
        moveUpAnimation.setAttribute('fill', 'forwards');
        moveUpAnimation.setAttribute("autoplay", "false");
        moveUpAnimation.setAttribute("dur", "1000");

        var oldCanvases = document.querySelectorAll('.a-drawing');
        if (oldCanvases.length > 5) {
            var animatingCanvas = oldCanvases[oldCanvases.length - 6];
            if (animatingCanvas !== null) {
                animatingCanvas.appendChild(moveUpAnimation);
            }
        }
    },

    addPulseAnimation: function(wedge) {
        var opacityPulse = document.createElement('a-animation');
        opacityPulse.setAttribute("attribute", "opacity");
        opacityPulse.setAttribute("dur", "300");
        opacityPulse.setAttribute("to", "1.0");
        opacityPulse.setAttribute("from", "0.2");
        opacityPulse.setAttribute("repeat", "1");
        opacityPulse.setAttribute("direction", "alternate");
        opacityPulse.setAttribute("begin", "pulse");
        opacityPulse.setAttribute("autoplay", "false");

        wedge.appendChild(opacityPulse);

        var sizePulse = document.createElement('a-animation');
        sizePulse.setAttribute("attribute", "scale");
        sizePulse.setAttribute("dur", "300");
        sizePulse.setAttribute("to", "1.15 1.15 0.23"); //Increase scale by 15%
        sizePulse.setAttribute("from", "1 1 0.2");
        sizePulse.setAttribute("repeat", "1");
        sizePulse.setAttribute("direction", "alternate");
        sizePulse.setAttribute("begin", "pulse");
        sizePulse.setAttribute("autoplay", "false");

        wedge.appendChild(sizePulse);
    }
});
