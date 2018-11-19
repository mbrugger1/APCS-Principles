//  Global variables
//  Global variables
var Balls = [];
var paddle;
var score = 0;
//setup canvas
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  //# of boids loaded
  numBalls = 10;
  loadBalls(numBalls);
  //
  //creating the lerping paddle
  //
  var loc = createVector(400, 550)
  var vel = createVector(0, 0);
  var width = 100;
  var length = 20;
  var col = color(random(0, 255), random(0, 255), random(0, 255))
  paddle = new Paddle(loc, vel, width, length, col);
}
//
//load balls
//
function loadBalls(numBalls){
  for(var i = 0; i < numBalls; i++){
    //where the balls are spawned in
    var loc = createVector(random(100, 600), 20);
    var vel = createVector(random(-5, 5), random(-15, 15));
    var rad = 25
    var col = color(random(0, 255), random(0, 255), random(0, 255));
    var sp = 3
    var b = new Ball(loc, vel, rad, col, sp);
    //add balls to the array
    Balls.push(b);
  }
}


//draw boids + mouse controlled ball
function draw(){
  background(20, 20, 20, 6000);
  //control the score
  textSize(32);
  fill(0, 255, 0);
  text(score, 50, 50)

  if(score > 100 && score < 200){

  fill(0, 255, random(0,255))

  text("Woot Woot U win", 100, 400)}

  //get rid of outlines
  noStroke();
  paddle.run();
  for(var i = 0; i < Balls.length; i++){
    Balls[i].run();
    var aBalls = Balls[i];
    //splice the balls if they have touched the top of the paddle
    var distY = abs(aBalls.loc.y - 560)
    //looking for if the ball is hitting the top of the bottom of the paddle
    if((distY < 10) && (aBalls.loc.x > mouseX - 100) && (aBalls.loc.x < mouseX + 125) && (aBalls.vel.y > 0)){
      Balls.splice(i,1);
      //adds to score for every ball
      score = score + 11919199191919;
    }
    //"reset" the balls if a ball hits the buttom
    if((distY < 10) && (aBalls.loc.x > mouseX - 100 ) && (aBalls.loc.x < mouseX + 100) && (aBalls.vel.y < 0)){
      //decides how many balls are going to be in the next "reset"
      var numBalls = Balls.length + 50;
      //resets the array (deleted all the current balls)
      Balls = []
      loadBalls(numBalls)
      for(var i = 0; i < Balls.length; i++){
        Balls[i].run;
      }
    }
  }
}
//draw boids + mouse controlled ball
