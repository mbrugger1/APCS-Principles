//  Global variables
var b1 = [];
var balls = [];
// noStroke(balls)
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0,0,0,25);
  loadBalls(100);
  b1 = new Ball(createVector(width/2, height/2), createVector(2,5,50))
  color(255,0,0);
  loadBalls(100);
}
function draw() {
    background(20,20,20);
    b1.run();
    for(var i = 0; i < balls.length; i = i + 1){
      balls[i].run();

}
}

function loadBalls(numBalls){

      for(var i = 0; i < numBalls; i++){
          var loc = createVector(random(width), random(height));
          var vel = createVector(random(-5,5), random(-5,5));
          var radius = random(20,40);
          var col = (255, 255, 255);
          balls.push(new Ball(loc, vel, radius, col))
  }
  }
