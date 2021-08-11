const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world; 

var bgImg;

var mouse;
var mouseImg;

var snowfall = [];

function preload(){
  bgImg = loadImage("snow1.jpg");
  mouseImg = loadImage("mouse3.png")
}

function setup() {
  createCanvas(1400, 700);

  engine = Engine.create();
  world = engine.world;

  mouse = createSprite(700, 350, 50, 50);
  mouse.addImage(mouseImg);
  mouse.scale = 0.2;

  Engine.run(engine);
}

function draw() {
  background(bgImg); 
  drawSprites();

  if(frameCount%10 === 0){
    snowfall.push(new Snowfall(random(10, 1390), -50));
  }

  for(var i = 0; i < snowfall.length; i++){
    snowfall[i].display();
  }

  if(keyCode === RIGHT_ARROW){
    mouse.x = mouse.x + 3;
  }
  if(keyCode === LEFT_ARROW){
    mouse.x = mouse.x - 3;
  }

  Engine.update(engine);
}