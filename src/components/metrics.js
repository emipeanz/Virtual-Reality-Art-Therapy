AFRAME.registerComponent('metrics', {
    dependencies: ['brush'],

    schema: {  },

    // Metrics class for
        // number of strokes painted inside and outside wedge
        // number of gestures ie. strokes
        // active, passive and total time used
        // wedge mode
        // user reach
    init: function(){
        var self = this;

        this.userControlledWedgeLocation = true;
        
        //Set up initial state and variables
        var data = this.data; //get all the data from the schema.
        var el = this.el; //get reference to the entity.

        // Set up all metrics variables initally
        //  paint stroke counts
        this.paintStrokesOutside = 0;
        this.paintStrokesInside = 0;

        //  gesture count related
        this.gestureCount = 0;
        this.strokeActive = false;  // This will be true when a stroke is currently active
        this.firstPoint = true;
        
        // The following variables are used to record the amount of "active time" for a session
        this.startTime = new Date().getTime();
        this.startTimeOfPause = new Date().getTime();
        
        // "Active time" is the time spent painting
        this.totalActiveTime = this.startTime - this.startTime;
        // "Idle time" is the time spent not painting
        this.totalIdleTime = this.startTime - this.startTime;

        // Total reach (m)
        this.reaches = [];
        // Time each reach metric is recorded (ms) ie reach[0] occurred at reachTimes[0]
        this.reachTimes = [];

        // Length of strokes (cm)
        this.strokeLengths = [];
        // Time each stroke length is recorded (ms)
        this.strokeLengthTimes = [];

        el.sceneEl.addEventListener('toggle-mode', function(evt){
            self.userControlledWedgeLocation = !self.userControlledWedgeLocation;
        });

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

        el.sceneEl.addEventListener('brushcolor-changed', function (evt) {
            if (self.strokeLengths[self.strokeLengths.length-1] !== 0) {
                self.strokeLengths.push(0);
                self.strokeLengthTimes.push(self.msToTime(self.getTotalTimeElapsed()));
            }
        });

        el.sceneEl.addEventListener('point-added', function (evt) {
            self.strokeLengths[self.strokeLengths.length-1] = self.strokeLengths[self.strokeLengths.length-1] + evt.detail.pointDistance;
        });

        document.getElementById('export-button').addEventListener('click', function() {
            self.toCSV();
        });

        el.sceneEl.addEventListener('wedge-generated', function (evt) {
            //Calculate the distance between the origin and the wedge
            var distance = evt.detail.data.currentWedgePosition.distanceTo(evt.detail.data.originControllerPosition);
            self.reaches.push(distance);
            self.reachTimes.push(self.msToTime(self.getTotalTimeElapsed()));

        });

        document.getElementById('clear-button').addEventListener('click', function() {
            self.clearMetrics();
        });

        document.getElementById('print-button').addEventListener('click', function() {
            self.printMetrics();
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
        console.log("Gesture count:", this.gestureCount);
        console.log("Strokes Painted Inside Wedge:", this.paintStrokesInside);
        console.log("Strokes Painted Outside Wedge:", this.paintStrokesOutside);
        console.log("Wedge is user controlled:", this.userControlledWedgeLocation);
        console.log("Reaches:", this.reaches)
        console.log("Reach Times:", this.reachTimes)
        console.log("Stroke lengths:", this.strokeLengths)
        console.log("Stroke length Times:", this.strokeLengthTimes)
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

        // add reach metrics and record the time each new metric is taken
        csvContent += "totalReach," + this.reaches.join(',') + "\r\n";
        csvContent += "totalReachTimes," + this.reachTimes.join(',') + "\r\n";

        csvContent += "strokeLengths," + this.strokeLengths.join(',') + "\r\n";
        csvContent += "strokeLengthTimes," + this.strokeLengthTimes.join(',') + "\r\n";

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "metrics_data.csv");
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the data file named "my_data.csv".
    },

    clearMetrics: function() {
        this.paintStrokesOutside = 0;
        this.paintStrokesInside = 0;
        this.gestureCount = 0;
        this.strokeActive = false;  // This will be true when a stroke is currently active
        this.firstPoint = true;
        this.startTime = new Date().getTime();
        this.startTimeOfPause = new Date().getTime();
        this.totalActiveTime = this.startTime - this.startTime;
        this.totalIdleTime = this.startTime - this.startTime;
        this.strokeLengths = [];
    }

})