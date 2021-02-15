
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var treasure;

function preload(){
	boy=loadImage("boy.png");
	treasure=loadImage("treasure.png");
	bg=loadImage("bg.jpeg");
  }

function setup() {
	createCanvas(1200,800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj = new Stone(355,405,20);
	stoneObj2 = new Stone(800,200,70);

	ground1 = new Ground(width/2,770,width,200);

	snake=new Snake(800,650,70);

	spider=new Spider(500,670,30);

	launcherObject=new launcher(stoneObj.body,{x:150,y:480});

	launcherObject2=new launcher(stoneObj2.body,{x:800,y:200});

	

	Engine.run(engine);

}

function draw(){
	background(bg);

	stoneObj.display();

	stoneObj2.display();

	ground1.display();

	image(boy ,100,470,200,300);

	image(treasure ,1000,560,150,150);

	snake.display();

	spider.display();


   drawSprites();
   
detectollision(stoneObj,stoneObj2)


}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();

}

function keyPressed() {
	if (keyCode === 32 && stoneObj.body.speed<1) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lstone2){

  stoneObj2Position=lstone2.body.position
  stoneObjPosition=lstone.body.position
  
  var distance=dist(stoneObjPosition.x, stoneObjPosition.y, stoneObj2Position.x, stoneObj2Position.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lstone2.r+lstone.r)
    {
		launcherObject2.fly();
    }

  }

  
  


