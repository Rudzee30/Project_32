class Poly {
    constructor(x,y) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){
      var angle=this.body.angle;
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      translate(pos.x, pos.y);
      rotate(angle);
      fill("brown");
      image(this.image,0,0, this.width, this.height);
      pop();
    }
    
  };