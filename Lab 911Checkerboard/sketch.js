var squares = [];
var numberOfSquares = 8;
var squareSize;

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  squareSize = width/numberOfSquares
  loadSquares(8);

for(var i = 0; i < squares.length; i++){
squares[i].render();

  }
}

function loadSquares(){
  //  create a square object and push it into the squares array
var rowNum = 0;
var colNum = 0;

for(var row = 0; row < numberOfSquares; row++) {
  var x = 100*row
  for(var col = 0; col < numberOfSquares; col++) {
    var y = 100*col
    var loc = createVector(x, y);
    var c;
    if((row + col) %2){
      c = color(random(0,2), random(100,110), random(100, 255));
    }
    else{
      c = color(random(0,25), random(0,0), random(0, 0));
    }
    var s = new Sqr(loc, 100, c);
    squares.push(s);

    }
  }
  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable

}
