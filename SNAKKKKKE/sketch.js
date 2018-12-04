//  Global variables
var scl = 20;
var snake;
var food;
var score = 0;
var dead
function setup() {
  createCanvas(800, 800);
  snake = new Snake();
  food  = new Food();
  frameRate(10);
}

function draw() {
  background(0,0,0);
  snake.eat(food);
  snake.move();
  snake.draw();
  food.draw();

  textSize(25);
  fill(random(0,155),random(0,255),random(0,255));
  text(score, 50, 50);
if(score > 10){
  fill(0, 255, random(0,255));
  text("Congrats you don't suck")
}
}

function keyPressed() {
  if (keyCode === 87) {
    snake.dir(0, -1);
  } else if (keyCode === 83) {
    snake.dir(0, 1);
  } else if (keyCode === 68) {
    snake.dir(1, 0);
  } else if (keyCode === 65) {
    snake.dir(-1, 0);
  } else if (keyCode === 32) {
    snake.vel === 0;
    text("Paused", 80, 80)
  }

}

function cols() {
  return floor(width / scl);
}

function rows() {
  return floor(height / scl);
}

function randomVector() {
  return createVector(floor(random(cols())), floor(random(rows())));
}

function dead() {
  if(this.dead = true){
   this.xspeed = 0;
   this.yspeed = 0
    rect(200,200,200);
    fill(0,255, random(0,255));
    text("Oh No You Ded AF");

}
}
