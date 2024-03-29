const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var ground
var box1, ball, rope

var engine,world;

function setup() {
	createCanvas(1300, 800);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground=new Ground(600, 600, 1200, 20);
	box1=new Box(900, 100, 70, 70);
	box2=new Box(900, 100, 70, 70);
	box3=new Box(900, 100, 70, 70);
	box4=new Box(900, 100, 70, 70);
	box5=new Box(900, 100, 70, 70);
	box6=new Box(900, 100, 70, 70);
	box7=new Box(900, 100, 70, 70);
	ball=new Ball(100, 100, 70, 70);
	rope=new Rope(ball.body, {x:550, y:50});
}

function draw() {
Engine.update(engine)
  background("lightblue");
	ground.display();
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	ball.display();
	rope.display();
}




function mouseDragged(){
Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}







			
