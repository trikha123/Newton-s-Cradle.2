
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);
	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(100, 600, 50)
  bob2 = new Bob(150, 600, 50)
	bob3 = new Bob(200, 600, 50)
	bob4 = new Bob(250, 600, 50)
	bob5 = new Bob(300, 600, 50)
  ground1 = new Ground (200, 50, 300, 40)
  rope1 = new Rope(bob1.body, ground1.body, 50, 0)
  rope2 = new Rope(bob2.body, ground1.body, 60,0)
	rope3 = new Rope(bob3.body,ground1.body, 20,0)
  rope4 = new Rope(bob4.body,ground1.body, 30,0)
  rope5 = new Rope(bob5.body,ground1.body, 20,0)



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();





  

 
  drawSprites();
  Engine.run(engine);
 
}



