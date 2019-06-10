AFRAME.registerComponent('wedge-generator', {

    schema: {  },

    init: function(){
        var self = this

        //Set up initial state and variables
        var data = this.data; //get all the data from the schema.
        var el = this.el; //get reference to the entity.

        el.sceneEl.addEventListener('generateWedge', function(){
            console.log("handling wedge generation event")
            var wedge = document.createElement('a-cone')
            wedge.setAttribute("scale", "0.04 1 0.05")
            wedge.setAttribute("position", "0 1.5 0")
            wedge.setAttribute("height", "0.1")

            self.el.sceneEl.appendChild(wedge)
        })

    },

})