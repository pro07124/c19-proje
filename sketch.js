var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var orangeLeaf

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  orangeLeafImg = loadImage("orangeLeaf.png")
}

function setup(){

  createCanvas(400,400);
  text("Score", 200,50);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);

  edges= createEdgeSprites();
  rabbit.collide(edges);


  rabbit.x = World.mouseX
var select_Apple = Math.round(random(1,2))
if(frameCount % 80 == 0){
  console.log(select_Apple)
if(select_Apple == 1){createApple()}
var select_orangeLeaf = Math.round(random(1,2))
if(frameCount % 80 == 0){
  console.log(select_orangeLeaf)
if(select_Apple == 1){createorangeLeaf()}



}
}




drawSprites();
}
function createApple(){
Apple = createSprite(random(50,350),40,50,50);
Apple.addImage(appleImg)
Apple.scale = 0.1  
Apple.velocityY = 2;
Apple.lifetime = 80
}
function createorangeLeaf(){
  orangeLeaf = createSprite(random(50,350),40,50,50);
  orangeLeaf.addImage(orangeLeafImg)
  orangeLeaf.scale = 0.1  
  orangeLeaf.velocityY = 2;
  orangeLeaf.lifetime = 80
  }