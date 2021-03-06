const Engine=Matter.Engine;     // Namespacing   
const World=Matter.World;
const Bodies=Matter.Bodies;       //objects


var engine,world;
var object;
var ball;

function setup() {
  
  var canvas=createCanvas(400,400);
  
engine=Engine.create();
world=engine.world;

var object_options={
  isStatic:true         //now it will be stationary
}


object=Bodies.rectangle(200,390,400,20,object_options)
World.add(world,object);


var ball_options={
  restitution:0.5     //bounce
}


ball=Bodies.circle(200,200,20,ball_options)
World.add(world,ball);




console.log(object);
console.log(object.position.x);
console.log(object.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,400,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);


}