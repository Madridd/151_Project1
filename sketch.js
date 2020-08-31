let x = 450;
let y = 450;
let xspeed = 4;
let yspeed = 4;
let r;
let g;
let b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225,100,180);
  r = random(255);
  g = random(255);
  b= random(255);

}//end ofsetup

function draw() {
  ellipse(x,y,100,100);
  fill(r,g,b);
  stroke(22);

  if(x > width || x < 50){
  xspeed = -xspeed
  }
  if(y > height || y < 50){
  yspeed = -yspeed
  }

  x = x + xspeed;
  y = y + yspeed;

  if(mouseIsPressed){
    //fill(255,100,180,20);
    //^will use a gradient to change between colors^
    //if taken out will allow mutiple color design

    //ellipse(mouseX,mouseY,100,100);
    //^will allow to drag the circle^

    r = random(255);
    g = random(255);
    b = random(255);
  }

}


function keyPressed() {
  if (key === 's') {
    saveCanvas('image1s', 'png');
  }
}
