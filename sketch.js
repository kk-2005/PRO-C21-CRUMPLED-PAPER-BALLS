
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world
var ball;
var left_side,right_side;
var ground;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.99,
		friction:0,
		density:0.07,
	}
	ball=Matter.Bodies.circle(200,300,30,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,670,width,20);
	left_side=new Ground(700,600,20,100);
	right_side=new Ground(900,600,20,100);
	



	Engine.run(engine);
	
}


function draw() {
  
  background(0);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);
  ground.show();
  left_side.show();
  right_side.show();
  drawSprites();
  Engine.update(engine);
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0,y:-3});
	}
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:3,y:0});
	}
	
}
