var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(50,650,10);
	dust1 = new Dustbin(650,675,200,20,"white");
	dust2 = new Dustbin(760,635,20,100,"white");
	dust3 = new Dustbin(540,635,20,100,"white");
	dust4 = new Dustbin(400,690,800,10,"brown");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  dust1.display();
  dust2.display();
  dust3.display();
  dust4.display();
  
  drawSprites();
 


}
function keyPressed(){
    if(keyDown("space")){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15})
    }
}

