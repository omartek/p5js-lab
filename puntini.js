function setup() {
  createCanvas(400, 400);
  background(0);
  fill(255);
}

// disegna come se fosse paint

function draw() {
  circle(mouseX, mouseY, 4);
  //circle(400-mouseX, 400-mouseY, 4);
}
