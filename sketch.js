
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var box1;
var backgroundImg,platform;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(150, 305, 300, 170);

	//Create the Bodies Here.
    var box1 = new Box(700,320,70,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  platform1.display();
  box1.display();

}



