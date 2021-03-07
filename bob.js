class Bob{
    constructor(x, y){
         var options={
             "isStatic":false,
             "restitution":0.3,
             "friction":0.5,
             "density":1.2
         }
         this.body = Bodies.circle(x, y,1, options)
         this.body.radius=1;
         World.add(world, this.body)
    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipse(0,0,this.radius)
        pop();
    }

    }
