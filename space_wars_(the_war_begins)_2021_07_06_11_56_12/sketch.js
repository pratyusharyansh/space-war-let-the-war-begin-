 var backgroundimg1,heroimg,herofireimg;
 var hero, minialien1,minialien2,assitant1,assitant2,assitant3,assitant4,boss;
var minialein1img,minialein2img;
var herofirecharge;
var Score = 0;
function preload (){
    backgroundimg1=loadImage("background.jpg")
    heroimg=loadImage("hero1.png")
    herofireimg=loadImage("fire.png")
     minialein2img=loadImage("mini2.png")
    minialein1img=loadImage("mini1.png")
}

function setup(){
    createCanvas(400,400)
   herofirecharge=createSprite(200,200,10,10)
   herofirecharge.addImage("hero",herofireimg)
   herofirecharge.scale=0.05;
 // herofirecharge.visible=false;
  
   hero=createSprite(200,340,100,100);
   hero.addImage("boy",heroimg)
   hero.scale=0.5
  
  
// herofirecharge.x=hero.x;
  //herofirecharge.y=hero.y;
  // herofirecharge.x=mouseX;
}
function draw(){
    background(backgroundimg1);
    hero.x=mouseX;
  // herofirecharge.x=hero.x;
 // herofirecharge.y=hero.y;
  // herofirecharge.x=mouseX;
  
  if(mousePressed()){
    //herofirecharge.x=hero.x;
    //herofirecharge.y=hero.y;
  }
  spwanAlein();
    drawSprites();
}
function mousePressed(){
      herofirecharge.velocity.y=-2;
      herofirecharge.x=hero.x;
      herofirecharge.y=hero.y;
}
function spwanAlein(){
  if(frameCount%90===0){
    minialein=createSprite(200,-10,10,10)
    minialein.scale=0.4
    minialein.velocity.y=2;
    minialein.x=Math.round(random(1,400));
    var rand = Math.round(random(1,2))
    switch(rand){
      case 1 : minialein.addImage("army",minialein1img) ;break;       
      case 2 : minialein.addImage("army2",minialein2img) ;break;
      default : break;
    }
  }
}