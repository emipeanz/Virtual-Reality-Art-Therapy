AFRAME.registerComponent('metrics', {
    dependencies: ['brush'],

    schema: {  },

    // Metrics class for
        // number of strokes painted inside and outside wedge
        // number of gestures ie. strokes
        // active, passive and total time used
        // wedge mode
    init: function(){
        var self = this;

        this.userControlledWedgeLocation = true;
        
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

        el.sceneEl.addEventListener('toggle-mode', function(evt){
            self.userControlledWedgeLocation = !self.userControlledWedgeLocation;
        });
        // Total reach
        this.totalReach = 0;

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

        document.getElementById('export-button').addEventListener('click', function() {
            self.toCSV();
        });

        el.sceneEl.addEventListener('wedge-generated', function (evt) {
            //Calculate the distance between the origin and the wedge
            var distance = evt.detail.data.currentWedgePosition.distanceTo(evt.detail.data.originControllerPosition);
            self.totalReach = self.totalReach + distance;
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
        console.log("");
        console.log("Active time:", this.msToTime(this.totalActiveTime));
        console.log("Passive Time:", this.msToTime(this.totalIdleTime));
        console.log("Total Time:", this.msToTime(this.totalIdleTime + this.totalActiveTime));
        console.log("Gesture count:", this.gestureCount)
        console.log("Strokes Painted Inside Wedge:", this.paintStrokesInside);
        console.log("Strokes Painted Outside Wedge:", this.paintStrokesOutside);
        console.log("Wedge is user controlled:", this.userControlledWedgeLocation);
        console.log("Total reach:", this.totalReach)
    },

    msToTime: function(s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;

        return hrs + ':' + mins + ':' + secs + '.' + ms;
    },

    toCSV: function() {
        let csvContent =  "data:text/csv;charset=utf-8,";

        // add wedge mode
        csvContent += "userPlacedWedge," + this.userControlledWedgeLocation + "\r\n";

        // add number of strokes inside and outside
        csvContent += "strokesInside," + this.paintStrokesInside + "\r\n";
        csvContent += "strokesOutside," + this.paintStrokesOutside + "\r\n";

        // add number of gestures
        csvContent += "numberGestures," + this.gestureCount + "\r\n";

        // add total, active and passive time
        csvContent += "totalTime," + this.msToTime(this.totalActiveTime + this.totalIdleTime) + "\r\n";
        csvContent += "activeTime," + this.msToTime(this.totalActiveTime) + "\r\n";
        csvContent += "idleTime," + this.msToTime(this.totalIdleTime) + "\r\n";

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "metrics_data.csv");
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the data file named "my_data.csv".
    }

})