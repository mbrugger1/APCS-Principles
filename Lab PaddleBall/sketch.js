//  Global variables
var balls = [];
var Paddle = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(random(20,250),random(20,250),random(20,250), 25);
  loadBalls(50);
}
function draw() {
    background(random(20,50),random(20,250),random(20,250), 22);
    for(var i = 0; i < balls.length; i = i + 1){
      balls[i].run();
      Paddle.run();

}
var loc = createVector(random(width), random(height));
  var vel = createVector(random(-3 ,3), random(-3,3));
  var col = color(random(0, 255), random(200, 255), random(255, 255))
  Paddle = new ellipse(loc, vel, col);
}
function loadBalls(numBalls){

          for(var i = 0; i < numBalls; i++){
          var loc = createVector(random(width), random(200));
          var vel = createVector(random(-2,2), random(-1,1));
          var radius = random(10,15);
          var col = color(random(255), random(255), random(255));
          var b = new Ball(loc, vel, radius, col);
          balls.push(b);
  }
  }
  function draw() {
      background(random(20,50),random(20,250),random(20,250), 22);
      for(var i = 0; i < balls.length; i = i + 1){
        balls[i].run();
        Paddle.run();
      }
}
