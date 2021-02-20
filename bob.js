class Bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          isStatic: false,
          'friction':0.5,
          'density':1.2
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = radius;
      this.height = radius;
      this.radius = radius
      
      
     

      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        ellipse(0,0, this.radius,this.radius);
        rotate(angle);
        pop();
      }
    };
    