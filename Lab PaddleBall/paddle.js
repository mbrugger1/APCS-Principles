
function Paddle(loc, vel, col){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.col = col;
  //this function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  //This function changes the location of the ball
  //by adding speed to x and y
  this.update = function(){
    var mouseLoc = createVector(mouseX, mouseY)
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .5)
    this.loc.add(this.vel);
  }
  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  //render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, rad, rad);
  }
}
