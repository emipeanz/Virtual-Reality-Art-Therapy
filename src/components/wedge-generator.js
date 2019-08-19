AFRAME.registerComponent('wedge-generator', {

    schema: {
        minHeight: { default: 0.1 },
        maxHeight: { default: 0.25 },
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

        this.currWedgeCounter = 0;

        this.fakeAIWedgePlacements = [
            [ 0.05348431989292379 , -0.4131719172000885 , -0.538044586075948 ],
            [ 0.32498336687540785 , -0.5112121403217316 , -0.4676827893650142 ],
            [ -0.07274518277619535 , -0.553181380033493 , -0.5010201796322491 ],
            [ 0.03607777135260193 , -0.09973296523094177 , -0.4724584817405457 ],
            [ 0.13380843117749208 , -0.6683461368083954 , -0.516479488398744 ],
            [ 0.4827552376075346 , -0.6360281407833099 , -0.3323220590220579 ],
            [ 0.43988777206834584 , -0.05467560887336731 , -0.2948004883828581 ],
            [ -0.20645070149831923 , -0.22993096709251404 , -0.4264081029491038 ],
            [ -0.330156132829849 , -0.6527745425701141 , -0.4865264568512231 ],
            [ 0.14088412634043834 , 0.08536666631698608 , -0.37404695067977656 ],
            [ 0.2425864823325341 , -0.3437679708003998 , -0.7715624297028967 ],
            [ 0.7429947968652613 , -0.42101386189460754 , -0.488067189496423 ],
            [ 0.5589605507057342 , -0.9384061992168427 , -0.6506814379654422 ],
            [ -0.4509625518548077 , 0.11819693446159363 , -0.5059715695131928 ],
            [ -0.5673278744491412 , -0.7322055995464325 , -0.7043183057705491 ],
            [ 0.43458393756598923 , 0.20580482482910156 , -0.3929147855825086 ],
            [ -0.08730109163308697 , -0.3858136236667633 , -1.0010672662445472 ],
            [ 0.5767283135565648 , -0.25609657168388367 , -0.7867872337702408 ],
            [ 0.4124517648466437 , -0.7365728318691254 , -1.1153207136809087 ],
            [ -0.5817379368287376 , -0.12595108151435852 , -0.7174643939406948 ],
            [ -0.15913706051180299 , 0.21553416550159454 , -0.6524583903183014 ],
            [ -0.5506291410266257 , -0.7151034772396088 , -0.6298975414221673 ],
            [ 0.6303147258180815 , -0.302717000246048 , -0.8038884565302631 ],
            [ 0.4483537322595694 , -0.9327634274959564 , -0.9874669630961677 ],
            [ -0.5806155107551447 , -0.106099933385849 , -0.5312523587353013 ],
            [ -0.08640250572197061 , 0.22696304321289062 , -0.5977342731022333 ],
            [ 0.9074585255971712 , -0.5217377245426178 , -0.5036685435166888 ],
            [ -0.6040713353334652 , -0.4176560938358307 , -0.9128992723685627 ],
            [ -0.016137111000666948 , 0.0044071972370147705 , -0.9397789890056174 ],
            [ 0.4734615327139906 , 0.0026686489582061768 , -0.7491903183079671 ],
            [ -0.5272906091718141 , 0.1273108720779419 , -0.5769634975813602 ],
            [ 0.5884211155712578 , -0.6048735082149506 , -1.0496028934012216 ],
            [ 0.266699014657668 , 0.19540062546730042 , -0.1928807435174349 ],
            [ -0.6615045686091392 , -0.48035958409309387 , -0.6926585403210339 ],
            [ 0.6603709365459309 , -0.7849930226802826 , -0.6903936343197792 ],
            [ -0.0978584193253269 , 0.14238932728767395 , -0.6953343873463567 ],
            [ 0.536032671760843 , 0.11985734105110168 , -0.5701513525797637 ],
            [ 0.4937649835708058 , -0.2907334268093109 , -0.9776079178090669 ],
            [ -0.8362136156327082 , -0.7958332002162933 , -0.4448188318441737 ],
            [ -0.6716154659384443 , -0.03357240557670593 , -0.6057488803858746 ],
        ];

        //Set up initial state and variables
        var el = this.el; //get reference to the entity.

        el.sceneEl.emit('update-brush', {data: this.data});

        //Bounding box coordinates (m) (These would be set by therapist input)
        this.maxXReach = 0.55; // Reaching to the left and right
        this.maxYReach = 0.55; // Reaching up
        this.maxZReach = 0.55; // Reaching forwards

        this.numCanvases = 5;

        //Resting position of controller, used as the origin of the bounding box
        this.data.originControllerPosition = new THREE.Vector3();
        this.data.currentWedgePosition = new THREE.Vector3();
        this.originHeadsetPosition = new THREE.Vector3();
        this.originSet = false;

        //If this is set to true, wedges are generated where the user clicks, otherwise location is random
        this.userControlledWedgeLocation = true;
        this.controllerPosition = new THREE.Vector3();

        this.pastCanvasPositions = [];

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

            var vect = new THREE.Vector3();
            vect.addVectors(position, this.data.originControllerPosition.clone().negate());
            console.log("[", vect.x, ",", vect.y, ",", vect.z, "]");
        }
        //Generate the x, y and z coordinates somewhere within the bounded box
        else{

            var position = new THREE.Vector3(this.data.originControllerPosition.x + this.fakeAIWedgePlacements[this.currWedgeCounter][0],
                this.data.originControllerPosition.y + this.fakeAIWedgePlacements[this.currWedgeCounter][1],
                this.data.originControllerPosition.z + this.fakeAIWedgePlacements[this.currWedgeCounter][2]);

            console.log(position);
            this.currWedgeCounter++;
            if(this.currWedgeCounter > this.fakeAIWedgePlacements.length - 1) {
                this.currWedgeCounter = 0;
            }
        }

        this.pastCanvasPositions.push(position.clone());

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

            var oldCanvases = document.querySelectorAll('.a-drawing');
            if (oldCanvases.length > this.numCanvases) {
                this.removeAndAnimateOldCanvasDrawing();
            }
        }
    },

    removeAndAnimateOldCanvasDrawing: function() {

        //Find the relative position of the current wedge with the origin and extend it then reapply original offset.
        var originToWedge = new THREE.Vector3();

        var wedgePosition =  this.pastCanvasPositions.shift();

        originToWedge.addVectors(wedgePosition.clone(), this.data.originControllerPosition.clone().negate()).normalize();
        //Distance to diverge by is between 1 and 1.5 metres
        originToWedge.multiplyScalar(Math.random()*0.5 + 1);

        //Randomly vary the vertical offset of the flower
        var yOffset = Math.random() * 1.5 - 0.5;

        //Final position of the drawing
        var formattedPos = originToWedge.x + " " + yOffset + " " + originToWedge.z;

        var moveUpAnimation = document.createElement('a-animation');
        moveUpAnimation.setAttribute('attribute', 'position');
        moveUpAnimation.setAttribute('to', formattedPos);
        moveUpAnimation.setAttribute('fill', 'forwards');
        moveUpAnimation.setAttribute("autoplay", "false");
        moveUpAnimation.setAttribute("dur", "1000");

        var oldCanvases = document.querySelectorAll('.a-drawing');
        var oldCanvas = oldCanvases[oldCanvases.length - 2];
        if (oldCanvases.length > this.numCanvases) {
            if (oldCanvas !== null) {
                var animatingCanvas = oldCanvases[oldCanvases.length - (this.numCanvases + 1)];
                oldCanvas.appendChild(moveUpAnimation);
                if (animatingCanvas !== null) {
                    animatingCanvas.appendChild(moveUpAnimation);
                }
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
