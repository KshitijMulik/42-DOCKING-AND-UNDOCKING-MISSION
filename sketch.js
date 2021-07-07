var bg,iss,spacecraft;
var issImage,sc1_Image,sc2_Image,sc3_Image,sc4_Image;
var hasDocked=false;

function preload(){
  bg=loadImage("Images/spacebg.jpg");
  issImage=loadImage("Images/iss.png");
  sc1_Image=loadImage("Images/spacecraft1.png");
  sc2_Image=loadImage("Images/spacecraft2.png");
  sc3_Image=loadImage("Images/spacecraft3.png");
  sc4_Image=loadImage("Images/spacecraft4.png");
}

function setup() {
  createCanvas(1200,600);
  
  iss=createSprite(450,180);
  iss.addImage(issImage);
  iss.scale=0.6;

  spacecraft=createSprite(400,280);
  spacecraft.addImage(sc1_Image);
  spacecraft.scale=0.2;
}

function draw() {
  background(bg);

  spacecraft.addImage(sc1_Image);
if(!hasDocked){
  spacecraft.x=spacecraft.x+random(-1,1);

  if(keyDown("UP_ARROW")){
    spacecraft.y=spacecraft.y-2;

  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(sc4_Image);
    spacecraft.x=spacecraft.x-1;
    
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(sc3_Image);
    spacecraft.x=spacecraft.x+1;
    
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(sc2_Image);

  }
}

if(spacecraft.y<= (iss.y+60) && spacecraft.x<=(iss.x-10)){
  hasDocked=true;
  textSize(25);
  fill ("white");
  text("Docking successful",200,300);
} 
  drawSprites();
}