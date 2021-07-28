var ship,sea

function preload(){
seaImg=loadImage("sea.png")
shipImg= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(1200,1200);
  sea= createSprite(200,200,400,400)
  sea.addImage(seaImg);
  sea.velocityX=-3
  ship=createSprite(200,200,50,50)
  ship.addAnimation("seaImg",shipImg)
  ship.scale=0.5

 
}


function draw() {
  background("lightBlue");
  console.log(sea.x)
  

 if (sea.x < 0) {
   sea.x=sea.width/2;
 }
 drawSprites();
}