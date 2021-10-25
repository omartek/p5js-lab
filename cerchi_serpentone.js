function setup() {
 createCanvas(400, 400);
}

// serpentone di cerchi

function draw() {

// con mouse premuto il cerchio è nero
 if (mouseIsPressed) {
 fill(0);
 } else {
 fill(255);
 }
 ellipse(mouseX, mouseY, 80, 80);
}
