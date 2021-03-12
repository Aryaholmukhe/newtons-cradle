
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roofObject

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObject = new Roof(400, 100, 700, 30)
	bobObject1= new Bob(240, 500)
	bobObject2= new Bob(320, 500)
	bobObject3= new Bob(400, 500)
	bobObject4= new Bob(480, 500)
	bobObject5= new Bob(560, 500)
	rope1=new Rope(bobObject1.body, roofObject.body, -160, 0)
	rope2=new Rope(bobObject2.body, roofObject.body, -80, 0)
	rope3=new Rope(bobObject3.body, roofObject.body, 0, 0)
	rope4=new Rope(bobObject4.body, roofObject.body, 80, 0)
	rope5=new Rope(bobObject5.body, roofObject.body, 160, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#e2d5d5");
  roofObject.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-2.5, y:0})
	}
}

