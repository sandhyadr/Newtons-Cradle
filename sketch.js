

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof1,sling1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;


   bob1 = new Bob(500, 500, 10);   
   bob2 = new Bob(550, 500, 10);  
   bob3 = new Bob(600, 500, 10);  
   bob4 = new Bob(650, 500, 10);  
   bob5 = new Bob(700, 500, 10);  

   roof1 = new Roof(600, 300, 600, 15); 

   sling1 = new SlingShot(bob1.body,roof1.body,-100,0);
   sling2 = new SlingShot(bob2.body,roof1.body,-50,0);
   sling3 = new SlingShot(bob3.body,roof1.body,0,0);
   sling4 = new SlingShot(bob4.body,roof1.body,50,0);
   sling5 = new SlingShot(bob5.body,roof1.body,100,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);



  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof1.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();
}

function keyPressed(){
 if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body, bob1.body.position, 
      {x:-50, y:-45});
 }
}