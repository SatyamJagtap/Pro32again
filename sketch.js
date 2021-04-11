

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var time = "yellow"
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;
	ground1 = new Ground(400,400,200,10);
	ground2 = new Ground(600,250,200,10);
	ground3 = new Ground(600,550,200,10);
	//Layer 1
	block1 = new Block(340,375,30,40);
	block2 = new Block(370,375,30,40);
	block3 = new Block(400,375,30,40);
	block4 = new Block(430,375,30,40);
	block5 = new Block(460,375,30,40);
	block6 = new Block(370,325,30,40);
	block7 = new Block(400,325,30,40);
	block8 = new Block(430,325,30,40);
    block9 = new Block(400,275,30,40);
	//Layer 2 
	block10 = new Block(540,225,30,40);
	block11 = new Block(570,225,30,40);
	block12 = new Block(600,225,30,40);
	block13 = new Block(630,225,30,40);
	block14 = new Block(660,225,30,40);
	block15 = new Block(570,175,30,40);
	block16 = new Block(600,175,30,40);
	block17 = new Block(630,175,30,40);
	block18 = new Block(600,125,30,40);
	//Layer 3 
	block19 = new Block(540,525,30,40);
	block20 = new Block(570,525,30,40);
	block21 = new Block(600,525,30,40);
	block22 = new Block(630,525,30,40);
	block23 = new Block(660,525,30,40);
	block24 = new Block(570,475,30,40);
	block25 = new Block(600,475,30,40);
	block26 = new Block(630,475,30,40);
	block27 = new Block(600,425,30,40);
	groundmain = new Ground(100,400,200,100);
	polygon1 = new Polygon(50,200,20);
	slingshot = new SlingShot(polygon1.body,{x:150,y:300})
	World.add(world,polygon1);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  getTime();
  background(time);
  ground1.display();
  ground2.display();
  ground3.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  polygon1.display();
  slingshot.display();
  groundmain.display();
  
  
 
}
async function getTime() {
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var response2=await response.json();
//console.log(response2);
var dt=response2.datetime;
//console.log(dt);
var hour=dt.slice(11,13);
//console.log(hour);
if(hour >= 7 && hour <=18){
//background("white")
time = "white"
}else{
//background("blue")
time = "black"
}
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.release();
}
function keyPressed(){
  if(keyCode === 32 ){
	  slingshot.attach(polygon1.body)
  }
}
