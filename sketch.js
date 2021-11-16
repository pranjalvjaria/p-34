
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgI,bg;
var fruit;
var man;
var trajactory,trajactoryI;
var stone;

function preload(){
  bgI=loadImage("jungle6.jpg")
  trajactoryI=loadImage("trajactory.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  engine = Engine.create();
  world = engine.world;
  
  fruit=createImg("mango1.png")
  fruit.position(80,50)
  fruit.size(40,40)

  fruit=createImg("mango2.png")
  fruit.position(200,380)
  fruit.size(40,40)

  fruit=createImg("mango1.png")
  fruit.position(350,200)
  fruit.size(40,40)

  fruit=createImg("mango2.png")
  fruit.position(200,80)
  fruit.size(40,40)

  fruit=createImg("mango1.png")
  fruit.position(80,200)
  fruit.size(40,40)

  fruit=createImg("mango2.png")
  fruit.position(500,200)
  fruit.size(40,40)

  fruit=createImg("mango1.png")
  fruit.position(480,50)
  fruit.size(40,40)

  fruit=createImg("mango2.png")
  fruit.position(350,50)
  fruit.size(40,40)

  fruit=createImg("mango1.png")
  fruit.position(380,380)
  fruit.size(40,40)

  fruit=createImg("mango2.png")
  fruit.position(550,300)
  fruit.size(40,40)

  fruit=createImg("mango1.png")
  fruit.position(200,200)
  fruit.size(40,40)

  man=createImg("man throwing stone.png")
  man.position(1200,500)
  man.size(300,300)

  trajactory=createSprite(1100,573)
  trajactory.addImage(trajactoryI)
  
  stone=createImg("rock.png")
  stone.position(1420,583)
  stone.size(25,25)

}



function draw() 
{
  background(51);
  image(bgI,0,0,displayWidth,displayHeight)
  Engine.update(engine);
  
  if(keyDown(UP_ARROW)) {
    trajactory.y=473
    rotate(45)
    translate (trajactory.x,trajactory.y)
  }
   
  drawSprites();
}

