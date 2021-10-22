function setup() {
  createCanvas(400, 400);
  fill(255);
}

function draw() {
  background(255);

  // testa quadrata
  fill(255);
  rect(10, 10, 380, 380);

  if (mouseIsPressed) {
    // occhi quadrati neri
    fill(255);
    rect(50, 150, 100, 100);
    rect(250, 150, 100, 100);
  } else {
    // occhi tondi bianchi
    fill(0);
    circle(100, 200, 100);
    circle(300, 200, 100);
  }
}

/*
  if (mouseIsPressed) fill(0);
  else fill(255);
  
  // occhi
  circle(100, 200, 100);
  circle(300, 200, 100);
*/
