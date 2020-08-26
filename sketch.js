let x = 0;
let speed = 3;

function setup() {
  // put setup code here
  createCanvas(500,500);

}

function draw() {
  // put drawing code here
  background(100,100,100);

  fill(20,30,100);
  rect(x,100,100,100);

  if(x + 100 > width){
    speed = (-1*speed);
  }

  x = x + speed;


  //fill(0,0,255);
  //ellipse(300,300,100,100);

}
