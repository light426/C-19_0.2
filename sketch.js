var bananaImage, obstacleImage, obstacleGroup, background, backroundImg, score


function setup() {
  createCanvas(400, 400);
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}

function draw() {
  background("jungle.png");
  
  drawSprites();
}