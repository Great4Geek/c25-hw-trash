class trash{
  constructor(x,y,height,width,angle){
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    Matter.Body.setAngle(this.body,angle)
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.image = loadImage("sprites/trash.png");
    World.add(world, this.body); 
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);
    image(this.image,600,570,300,200);
  }
};

