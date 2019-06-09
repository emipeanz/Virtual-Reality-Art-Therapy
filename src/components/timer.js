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
        if (this.strokeActive) {
            this.totalActiveTime = this.getTotalTimeElapsed() - this.totalIdleTime;
        }
        console.log("total time:", this.getTotalTimeElapsed())
        console.log("active time: ", this.totalActiveTime)
        console.log(typeof(this.totalActiveTime))
        console.log("idle time: ", this.totalIdleTime)
        console.log("")
    },


//set the digits to the updated time left.

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