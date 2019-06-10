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

            var  position = x + " " + y + " " + z
            height = 0.1;

            var numPetals = Math.round(Math.random() * 2) + 4;
            var radiusBottom = height *  Math.tan(Math.PI / numPetals);

            wedge.setAttribute("scale", "0.5 1 1")
            wedge.setAttribute("position", position)
            wedge.setAttribute("height", height)
            wedge.setAttribute("color", "#ffffff")
            wedge.setAttribute("opacity", "0.2")
            wedge.setAttribute("geometry" , "radiusBottom:" + radiusBottom);

            self.el.sceneEl.appendChild(wedge)
        })

    },

})
