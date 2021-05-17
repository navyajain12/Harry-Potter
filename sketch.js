var bg,bgImage;
var wizard,wiz_image;
var bludger1,bludger2,bludger_img;
var quaffle,quaffle_img;
var snitch,snitch_img;
var teamLogo, logo_img;
var confetti, confetti2,confetti_img;
var collisionSound;
var victorySound;


function preload(){

  wiz_image=loadImage("Harry_img.png")
  bgImage=loadImage("background.jpg")
  bludger_img=loadImage("bludger.png")
  quaffle_img=loadImage("quaffle.png")
  snitch_img=loadImage("snitch.png")
  logo_img=loadImage("gryffindor.png")
  confetti_img=loadImage("confetti.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  teamLogo=createSprite(100,100,50,50)
  teamLogo.addImage(logo_img)
  teamLogo.scale=0.4

  confetti=createSprite(1300,270,50,50)
  confetti.addImage(confetti_img)
  confetti_img.scale=0.5

  confetti2=createSprite(1320,270,50,50)
  confetti2.addImage(confetti_img)
  confetti2.scale=0.5

  wizard=createSprite(100, 280, 50, 50);
  wizard.addImage(wiz_image)
  wizard.scale=0.7

  bludger1=createSprite(400,windowHeight/3,40,40);
  bludger1.addImage(bludger_img)
  bludger1.scale=0.1
  bludger1.velocityY=10

  bludger2=createSprite(700,windowHeight/4,40,40);
  bludger2.addImage(bludger_img)
  bludger2.scale=0.1
  bludger2.velocityY=12

  quaffle=createSprite(1000,windowHeight/2,40,40);
  quaffle.addImage(quaffle_img)
  quaffle.scale=0.14
  quaffle.velocityY=16
  quaffle.debug = true;

  snitch=createSprite(1300,300,40,40);
  snitch.addImage(snitch_img)
  snitch.scale=0.3
  snitch.debug = true;

  invinci1=createSprite(400,40,20,20);
  invinci1.visible=false;
  invinci2=createSprite(400,windowHeight-50,20,20);
  invinci2.visible=false;

  invinci3=createSprite(700,40,20,20);
  invinci3.visible=false;
  invinci4=createSprite(700,windowHeight-50,20,20);
  invinci4.visible=false;

  invinci5=createSprite(1000,20,20,20);
  invinci5.visible=false;
  invinci6=createSprite(1000,windowHeight-50,20,20);
  invinci6.visible=false;
}

function draw() {
  background(bgImage);  

  stroke("gold")
  fill("maroon")
  textSize(60)
  text("QUIDDITCH", 510,50)

  stroke("black")
  fill("black")
  textSize(20)
  text("**PRESS RIGHT ARROW TO MOVE**", 1030,30)

  bludger1.bounceOff(invinci2)
  bludger1.bounceOff(invinci1)
  bludger2.bounceOff(invinci3)
  bludger2.bounceOff(invinci4)
  quaffle.bounceOff(invinci5)
  quaffle.bounceOff(invinci6)
  
  if(keyDown(37)){
    wizard.x=wizard.x-12
  }

  if(keyDown(39)){
    wizard.x=wizard.x+12
  }

  if(wizard.isTouching(bludger1)|| wizard.isTouching(bludger2) || wizard.isTouching(quaffle)){
    wizard.x=100
    wizard.y=280
  }

  if(wizard.isTouching(snitch)){
    stroke("white")
    fill("blue")
    textSize(60)
    text("YOU WIN!!!!!", 500,170)
  }

  if(wizard.isTouching(snitch)){
    snitch.x=windowWidth/2;
    confetti.x=windowWidth/2;
    confetti2.x=windowWidth/2;
    wizard.x=550;
    bludger1.velocityY = 0;
    bludger2.velocityY = 0;
    quaffle.velocityY = 0;
    bludger1.visible = false;
    bludger2.visible = false;
    quaffle.visible = false;
  }
  drawSprites();
}