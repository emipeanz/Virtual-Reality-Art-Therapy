AFRAME.registerComponent('wedge-generator', {

    schema: {  },

    init: function(){
        var self = this

        //Set up initial state and variables
        var data = this.data; //get all the data from the schema.
        var el = this.el; //get reference to the entity.

        el.sceneEl.addEventListener('generateWedge', function(){
            var wedge = document.createElement('a-cone')

            var x = (Math.random())* (Math.floor(Math.random()*2) == 1 ? 1 : -1);
            var y = Math.random() + 0.5
            var z = (Math.random())* (Math.floor(Math.random()*2) == 1 ? 1 : -1);

            // var position = Math.random() + " " + Math.random()  + " " + Math.random()
            var  position = x + " " + y + " " + z
            var height = Math.random() * 0.3 + 0.1

            wedge.setAttribute("scale", "0.04 1 0.05")
            wedge.setAttribute("position", position)
            wedge.setAttribute("height", height)
            wedge.setAttribute("color", "#8fabcd")
            wedge.setAttribute("opacity", "0.2")

            self.el.sceneEl.appendChild(wedge)
        })

    },

})