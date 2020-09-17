
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground1, ground2, ground3;
var trashImg;

function preload()
{
	trashImg = loadImage("imgs/dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 50, 52.5);
	
	
	//dustbin2 = new Dustbin(525, 600, 150, 1);
	
	

	ground1 = new Ground(400, 700, 800, 20);
	
	ground2 = new Ground(450, 600, 20, 150);
	ground3 = new Ground(580, 600, 20, 150);




	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  paper.display();
  image(trashImg, 525, 450, 150, 250);
 

 
  //dustbin2.display();
  

  ground1.display();
  
  

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:400, y:-400})
	}
}



