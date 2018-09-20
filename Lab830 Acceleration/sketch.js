//  Global variables
var balls = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(random(20,250),random(20,250),random(20,250), 25);
  loadBalls(2000);
}
function draw() {
    background(random(20,50),random(20,250),random(20,250), 22);
    for(var i = 0; i < balls.length; i = i + 1){
      balls[i].run();
}
}
function loadBalls(numBalls){

          for(var i = 0; i < numBalls; i++){
          var loc = createVector(random(width), random(height));
          var vel = createVector(random(-3,3), random(-3,3));
          var radius = random(2,5);
          var col = color(random(255), random(255), random(255));
          var b = new Ball(loc, vel, radius, col);
          balls.push(b);
  }
  }
