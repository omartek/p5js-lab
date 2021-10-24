function setup() {
  createCanvas(400, 400);
  fill(255);
}

function draw() {
  background(255);

  // testa quadrata
  fill(255);
  rect(10, 10, 380, 380);

  // con click del mouse gli occhi diventano neri
  if (mouseIsPressed) fill(0);
  else fill(255);

  // occhi bianchi o neri
  circle(100, 200, 100);
  circle(300, 200, 100);
}
