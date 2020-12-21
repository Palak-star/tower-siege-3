class Polygon {

    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.circle(x, y, radius, options); 
        this.image = loadImage("polygon.png")
        World.add(world, this.body);

      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill("pink");
        image(this.image, 0, 0,50,50);
        pop();                                                                                                                                                                                                                                                                                                                  
      }

  }
    