AFRAME.registerComponent('metrics', {
    dependencies: ['brush'],

    schema: {  },

    init: function(){
        var self = this
        
        //Set up initial state and variables
        var data = this.data; //get all the data from the schema.
        var el = this.el; //get reference to the entity.

        this.paintStrokesOutside = 0;
        this.paintStrokesInside = 0;

        this.gestureCount = 0;
        this.strokeActive = false;  // This will be true when a stroke is currently active

        this.firstPoint = true;
        
        // The following variables are used to record the amount of "active time" for a session
        this.startTime = new Date().getTime();
        this.startTimeOfPause = new Date().getTime();
        
        // "Active time" is the time spent painting
        this.totalActiveTime;
        // "Idle time" is the time spent not painting
        this.totalIdleTime = this.startTime - this.startTime;


        el.sceneEl.addEventListener('stroke-paint-changed', function (evt) {
            self.strokeActive = evt.detail;

            if (self.strokeActive) {
                self.firstPoint = true;
                self.gestureCount++;
                var lengthOfPause = new Date().getTime() - self.startTimeOfPause;
                self.totalIdleTime = self.totalIdleTime + lengthOfPause;
            }
            else {
                self.startTimeOfPause = new Date().getTime();
            }
        });

        el.sceneEl.addEventListener('paint-outside', function (evt) {
            self.paintStrokesOutside++;
        });

        el.sceneEl.addEventListener('paint-inside', function (evt) {
            if(self.strokeActive && self.firstPoint){
                self.paintStrokesInside++;
                self.firstPoint = false;
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
    },

    // Useful for debugging purposes
    printMetrics: function() {
        console.log("")
        console.log("Active time:", this.msToTime(this.totalActiveTime))
        console.log("Gesture count:", this.gestureCount)
    },

    msToTime: function(s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;

        return hrs + ':' + mins + ':' + secs + '.' + ms;
    }

})