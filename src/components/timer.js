AFRAME.registerComponent('timer', {
    dependencies: ['brush'],

    schema: {
        TimeOutTime : {type:'int', default:10 },
        DigitsColor: {type: 'color', default: '#000"'},
        hand: {default: 'right'}
    },

    init: function(){
        var self = this
        
        //Set up initial state and variables
        var data = this.data; //get all the data from the schema.
        var el = this.el; //get reference to the entity.

        this.strokeActive = false;  // This will be true when a stroke is currently active
        
        // The following variables are used to record the amount of "active time" for a session
        this.startTime = new Date().getTime();
        this.startTimeOfPause = new Date().getTime();
        
        // "Active time" is the time spent painting
        this.totalActiveTime = this.startTime - this.startTime;
        // "Idle time" is the time spent not painting
        this.totalIdleTime = this.startTime - this.startTime;

        mainParent = new THREE.Object3D();

        seconds = new THREE.Object3D(); //the parent object
        minutes = new THREE.Object3D();
        mainParent.add(seconds);
        mainParent.add(minutes);
        seconds.name="seconds";
        minutes.name = "minutes"
        //to Initialize and Place all the 7 parts of a Digit , twice to get something like this.

        for(var j=3;j<5;j++)
        {
            distance = -j*0.25;
            parent1 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1 );
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
            parent1.add(mesh1);
            parent1.position.x-=distance;
            parent1.position.y+=0.07;
            seconds.add(parent1);

            parent2 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1 );
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
            parent2.add(mesh1);
            parent2.rotateZ(Math.PI/2);
            parent2.position.x-=(distance - 0.08);
            parent2.position.y+=0.14;
            seconds.add(parent2);
            parent3 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1 );
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
            parent3.add(mesh1);
            parent3.position.x-=(distance - 0.16);
            parent3.position.y+=0.07;
            seconds.add(parent3);
            parent4 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1);
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
            parent4.add(mesh1);
            parent4.rotateZ(Math.PI/2);
            parent4.position.x-=(distance - 0.08);
            seconds.add(parent4);
            parent5 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1 );
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
            parent5.add(mesh1);
            parent5.rotateZ(Math.PI/2);
            parent5.position.x-=(distance - 0.08);
            parent5.position.y-=0.14;
            seconds.add(parent5);
            parent6 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1 );
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
            parent6.add(mesh1);
            parent6.position.x-=(distance - 0.16);
            parent6.position.y-=0.07;

            seconds.add(parent6);
            parent7 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1 );
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
            parent7.add(mesh1);
            parent7.position.x-=distance;
            parent7.position.y-=0.07;
            seconds.add(parent7);
        }

        for(var j=0;j<2;j++)
        {
            distance = -j*0.25;
            minparent1 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1 );
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
            minparent1.add(mesh1);
            minparent1.position.x-=distance;
            minparent1.position.y+=0.07;
            minutes.add(minparent1);

            minparent2 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1 );
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
            minparent2.add(mesh1);
            minparent2.rotateZ(Math.PI/2);
            minparent2.position.x-=(distance - 0.08);
            minparent2.position.y+=0.14;
            minutes.add(minparent2);

            minparent3 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1 );
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
            minparent3.add(mesh1);
            minparent3.position.x-=(distance - 0.16);
            minparent3.position.y+=0.07;
            minutes.add(minparent3);

            minparent4 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1);
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
            minparent4.add(mesh1);
            minparent4.rotateZ(Math.PI/2);
            minparent4.position.x-=(distance - 0.08);
            minutes.add(minparent4);

            minparent5 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1 );
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
            minparent5.add(mesh1);
            minparent5.rotateZ(Math.PI/2);
            minparent5.position.x-=(distance - 0.08);
            minparent5.position.y-=0.14;
            minutes.add(minparent5);

            minparent6 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1 );
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
            minparent6.add(mesh1);
            minparent6.position.x-=(distance - 0.16);
            minparent6.position.y-=0.07;
            minutes.add(minparent6);

            minparent7 = new THREE.Object3D();
            var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.1 );
            var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
            var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
            minparent7.add(mesh1);
            minparent7.position.x-=distance;
            minparent7.position.y-=0.07;
            minutes.add(minparent7);
        }

        // add dividers
        var dividers = new THREE.Object3D();
        distance = -(2)*0.25;
        divparent1 = new THREE.Object3D();
        var SecGeo = new THREE.BoxGeometry( 0.025, 0.025, 0.1 );
        var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
        var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
        divparent1.add(mesh1);
        divparent1.position.x-=distance;
        divparent1.position.y+=0.07;
        minutes.add(divparent1);

        // lower |
        divparent7 = new THREE.Object3D();
        var SecGeo = new THREE.BoxGeometry( 0.025, 0.025, 0.1 );
        var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
        var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
        divparent7.add(mesh1);
        divparent7.position.x-=distance;
        divparent7.position.y-=0.07;
        minutes.add(divparent7);

        dividers.add(divparent1);
        dividers.add(divparent7);
        mainParent.add(dividers);

        el.setObject3D('TimerMesh', mainParent); //setting the initialized object(seconds) to the our entity

        el.sceneEl.addEventListener('stroke-paint-changed', function (evt) {
            self.strokeActive = evt.detail;

            if (self.strokeActive) {
                var lengthOfPause = new Date().getTime() - self.startTimeOfPause;
                self.totalIdleTime = self.totalIdleTime + lengthOfPause;
            }
            else {
                self.startTimeOfPause = new Date().getTime();
            }
        });
    },

    getTotalTimeElapsed: function() {
        return new Date().getTime() - this.startTime
    },

    tick: function () {
        this.totalActiveTime = this.getTotalTimeElapsed() - this.totalIdleTime;
        console.log("total time:", this.getTotalTimeElapsed())
        console.log("active time: ", this.totalActiveTime)
        console.log("idle time: ", this.totalIdleTime)
        console.log("")

        this.Setdigit();
    },


//set the digits to the updated time left.
    Setdigit: function(){
        var digitval= [ [1,1,1,0,1,1,1], //0
                        [0,0,1,0,0,1,0], //1
                        [0,1,1,1,1,0,1], //2
                        [0,1,1,1,1,1,0], //3
                        [1,0,1,1,0,1,0], //4
                        [1,1,0,1,1,1,0], //5
                        [1,1,0,1,1,1,1], //6
                        [0,1,1,0,0,1,0], //7
                        [1,1,1,1,1,1,1], //8
                        [1,1,1,1,0,1,0]]; //9
        //The index values with 1 indicate the children which will be visible for a digit value.

        var tensPlace = parseInt((this.totalActiveTime/1000)/10);
        if(tensPlace){
            for(var a=0;a<7;a++)
            {
                if(digitval[tensPlace][a]===1)
                    seconds.children[a].visible=true;
                else
                    seconds.children[a].visible=false;
            }
        }

        var onesPlace = parseInt((this.totalActiveTime/1000)%10);
        if(onesPlace){
            for(var i=7;i<14;i++)
            {
                if(digitval[onesPlace][i-7]===1)
                    seconds.children[i].visible=true;
                else
                    seconds.children[i].visible=false;
            }
        }


        minutesNum = Math.round(((this.totalActiveTime % 86400000) % 3600000) / 60000)
        var minTensPlace = parseInt(minutesNum/10);
        if(minTensPlace){
            for(var a=0;a<7;a++)
            {
                if(digitval[minTensPlace][a]===1) {
                    minutes.children[a].visible = true;
                }
                else
                    minutes.children[a].visible=false;
            }
        }

        var minOnesPlace = parseInt(minutesNum%10);
        if(minOnesPlace){
            for(var i=7;i<14;i++)
            {
                if(digitval[minOnesPlace][i -7]===1)
                    minutes.children[i].visible=true;
                else
                    minutes.children[i].visible=false;
            }
        }
    },
//Define the events after the time is over.
    TimeUp: function(){
        alert("TIME UP");
    },
    update: function (oldData) {
        var data = this.data;
        var el = this.el;

        // If `oldData` is empty, then this means we're in the initialization process.
        // No need to update.
        if (Object.keys(oldData).length === 0) { return; }

        // Material-related properties changed. Update the material.
        if (data.DigitsColor !== oldData.DigitsColor) {

            //we are slicing color as the returned color is of the form "#000000" and we require only the digits.
            var col= "0x"+data.DigitsColor.toString(16).slice(-6);
            for(var i=0;i<14;i++) //updating the color of all the children of entity
            {
                el.object3D.children[0].children[i].children[0].material.color.setHex(col);
            }
        }
    }
})