let circ = []; // array of bubble objects
let r,g,b;
function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(255);
  g = random(255);
  b= random(255);
  // Create objects
  for (let i = 0; i < 10; i++) {
    circ.push(new Bubble());
  }
}

function draw() {
  background(50, 89, 100);

  for (let i = 0; i < circ.length; i++) {
    //for(let j = 0; j< 50; j++){
      circ[i].move();
      circ[i].display();
    //}

  }

  if(mouseIsPressed){
    r = random(255);
    g = random(255);
    b = random(255);
    circ.push(new Bubble());


  }
}

// bubble class
class Bubble {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(50, 80);
    this.xspeed = 1;
    this.yspeed = 2;
    this.history = [];
  }

  move() {
    if(this.x > width || this.x <0){this.xspeed = -this.xspeed}
    if(this.y > height|| this.y <0){this.yspeed = -this.yspeed}
    this.x = this.x + this.xspeed;
    this.y = this.y+ this.yspeed;

    //
    var v = createVector(this.x, this.y);
    this.history.push(v);

    if(this.history.length > 50){
      this.history.splice(0,2);
    }

  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(r,g,b);

    for(var i = 0; i < this.history.length; i++){
      var pos = this.history[i];
      ellipse(pos.x, pos.y, this.diameter, this.diameter);
      fill(r,g,b);
    }
  }
}
