/*
**  Ball Constructor Function
**  markus
**  Aug 20, 2018
*/

function Ball(location, velocity, radius, col){
  // Instance variables
   this.loc = location;
   this.vel = velocity;    //?
   this.rad = radius;
   this.col = col;
 this.run = function(){
     this.checkEdges();
     this.update();
     this.render();
 }

   this.update = function(){
      this.loc.add(this.vel)
    }
   this.checkEdges = function(){
      if(this.loc.x < 0) this.vel.x = -this.vel.x;
      if(this.loc.x > width) this.vel.x = -this.vel.x;
      if(this.loc.y < 0) this.vel.y = -this.vel.y;
      if(this.loc.y > height) this.vel.y = -this.vel.y;
   }
this.render = function(){
  fill(this.col);
  ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
}
 }
