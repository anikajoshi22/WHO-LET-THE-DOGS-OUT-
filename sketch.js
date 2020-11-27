var dog1, dog1Img;
var dog2,dog2Img;
var dog3,dog3Img;
var trophy, trophyImg;
var restart, rB;
var PLAY=1;
var END=0;
var gameOver, goImg;
var b, bImg;
var Bsound;


gamestate=PLAY;
function preload(){
  dog1Img=loadImage("hound-dog-transparent-background.png");
  dog2Img=loadImage("585bb5b2cb11b227491c32a2.png");
  dog3Img=loadImage("232c19ca0e7235277fc0fac1ced9eb68.png");
  
  trophyImg=loadImage("Trophy-Bronze-Cup-PNG.png");

  rB=loadImage("5a0c6dcf9642de34b6b65cc5.png");
  
  goImg=loadImage("unnamed (1).png");
  
  bImg=loadImage("creative-vector-illustration-finish-line-260nw-1119506264.webp");
  
  Bsound=loadSound("baha-men-who-let-the-dogs-out.mp3");
}

function setup() {
  createCanvas(600,400);

  b=createSprite(600,200,20,20);
  b.addImage("b",bImg);
  b.scale=1.5;
  
  dog1=createSprite(100,60,20,20);
  dog1.addImage("dog1",dog1Img);
  dog1.scale=0.1;
 
    dog2=createSprite(100,200,20,20);
  dog2.addImage("dog2",dog2Img);
  dog2.scale=0.3;
  
   dog3=createSprite(100,350,20,20);
  dog3.addImage("dog3",dog3Img);
  dog3.scale=0.2;
  
  trophy=createSprite(490,200,20,600);
trophy.shapeColor="yellow";
  
  restart=createSprite(250,300,20,20);
  restart.addImage("restart",rB);
  
  gameOver=createSprite(250,150,20,20);
  gameOver.addImage("gameOver",goImg);
  
}

function draw() {
  background("green");
  if(gamestate===PLAY){
  dog1.velocityX=random(1,10);
  dog2.velocityX=random(1,10);
  dog3.velocityX=random(1,10);
  dog1.debug=true;
  dog2.debug=true;
  dog2.setCollider("rectangle",5,50,230,300);
    dog3.debug=true;
    restart.visible=false;
    gameOver.visible=false;
  if(dog1&&dog2&&dog3.isTouching(trophy)){
    gamestate=END;
     }
  }
  
  else if(gamestate===END){
  dog1.velocityX=0;
    dog2.velocityX=0;
    dog3.velocityX=0;
    restart.visible=true;
    gameOver.visible=true;
}
  if(mousePressedOver(restart)){
    reset();
    
  }
  
  drawSprites();
 
}
function reset(){
  gamestate=PLAY;
  
  dog1.x=100;
  dog1.y=60;
  
   dog2.x=100;
  dog2.y=200;
  
   dog3.x=100;
  dog3.y=350;
  
  restart.visible=false;
  gameOver.visible=false;
}








