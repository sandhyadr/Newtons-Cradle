class Bob {
    constructor(x, y, radius) {
      var options = {
        //isStatic :true,
           restitution:0.6,
           friction:0.5,
           density:0.8,
      }
  
      this.body = Bodies.circle(x, y, radius, options);
      
      World.add(world, this.body);
    }

  display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      strokeWeight(1);
      stroke("black");
      fill("pink");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };