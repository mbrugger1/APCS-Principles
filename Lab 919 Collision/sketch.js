//  Global variables
//Markus Brugger
var Boids = [];
var chaser;
var dist;

//setup canvas
function setup(){
  frameRate(100);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  //# of boids loaded
  numBoids = 50;
  loadBoids(numBoids);
  //creating the lerping ball
  var loc = createVector(random(width), random(height));
  var vel = createVector(random(-3 ,3), random(-3,3));
  var rad = 20;
  var col = color(random(0, 255), random(200, 255), random(255, 255))
  chaser = new Ball(loc, vel, rad, col);
}
//load boids
function loadBoids(numbBoids){
  for(var i = 0; i < numbBoids; i++){
        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-5,5), random(-5,5));
        var col = color(random(0,255), random(0,255), random(255,255));
        var b = new Boid(loc, vel, col);
        Boids.push(b);
  }
}

//draw boids + mouse controlled ball
function draw(){
  background(20, 20, 20, 22);
  for(var i = 0; i < Boids.length; i++){
    Boids[i].run();
    chaser.run();
  }
  for(var j = Boids.length - 1; j >= 0; j--){
    if(Boids[j].loc.dist(chaser.loc) < 40){
      Boids.splice(j, 1);
    }
  }
}
