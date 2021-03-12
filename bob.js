class Bob{
    constructor(x, y){
         var options={
             "isStatic":false,
             "restitution":1.1,
             "density":0.01
         }
         this.body = Bodies.circle(x, y, 40, options)
         this.body.radius=79;
         World.add(world, this.body)
    }

    display(){
        var pos =this.body.position;
        fill("#865858")
        push();
        translate(pos.x, pos.y);
        ellipse(0,0,this.body.radius)
        pop();
    }

    }
