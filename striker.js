class Striker {
    constructor(x , y ,width, height) 
    {
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
      }
      this.body = Bodies.rectangle(x, y, width , height, options);
      this.width = width;
      this.height = height;
      
      
    }
    display(){
     
      rectMode(CENTER);
      fill("red");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      
      
    }
  };