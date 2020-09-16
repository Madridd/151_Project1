let circ = []; // array of bubble objects
let r,g,b;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //r = random(255);
  //g = random(255);
  //b= random(255);
  // Create objects
  for (let i = 0; i < 10; i++) {
    circ.push(new Bubble());
  }
}

function draw() {
  background(50, 89, 200);

  for (let i = 0; i < circ.length; i++) {
    //for(let j = 0; j< 50; j++){
      circ[i].move();
      circ[i].display();
    //}

  }

  // beginShape();
  // let spacing = map(mouseX,mouseY,width,5,100);
  // for(let a =0; a<360;a+=spacing){
  //   let x = 100*sin(a)+200;
  //   let y = 100*cos(a)+200;
  //   vertex (x,y);
  // }
  // endShape(CLOSE);


  if(mouseIsPressed){
    //r = random(255);
    //g = random(255);
    //b = random(255);
    circ.push(new Bubble());
  }
}

// bubble class
class Bubble {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 200);
    this.xspeed = 1;
    this.yspeed = 2;
    this.history = [];
    this.r2 = random(100,200);
    this.b2 = random(200,255);
    this.g2 = random(1,100);
  }

  move() {
    if(this.x > width || this.x <0){this.xspeed = -this.xspeed}
    if(this.y > height|| this.y <0){this.yspeed = -this.yspeed}
    this.x = this.x + this.xspeed;
    this.y = this.y+ this.yspeed;

    //direction
    var v = createVector(this.x, this.y);
    this.history.push(v);

    if(this.history.length > 100){
     this.history.splice(0,1);
    }

  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(this.r2,this.g2,this.b2);

    for(var i = 0; i < this.history.length; i++){
      var pos = this.history[i];
      ellipse(pos.x, pos.y, this.diameter, this.diameter);
      rect(pos.x*2, pos.y*2, this.diameter, this.diameter);
      rotate(PI/90);

      fill(this.r2,this.g2,this.b2);
    }
  }
}
