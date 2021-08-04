var runner, runnerImg;
var leftBoundary,rightBoundary;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2; 

  runner = createSprite(200,200,50,50);
  runner.addAnimation("run",runnerImg);
  runner.scale = 0.08;

  leftBoundary = createSprite(400,200);
  leftBoundary.visible = false;
  rightBoundary = createSprite(0,200);
  rightBoundary.visible = false;
  
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

 

}

function draw() {
  background("blue");

  if (path.y > 400) {
    path.y = height/2
  }

  runner.x = World.mouseX;


drawSprites();
}
