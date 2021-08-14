
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var wall;

function preload(){
bg = loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym21.png", "images/gym22.png");
eat = loadAnimation("images/eat1.png", "images/eat2.png");
drink = loadAnimation("images/drink1.png", "images/drink2.png");
move = loadAnimation("images/move.png", "images/move1.png");


}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95, 
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

   var rock_options = {
     
    restitution: 0.85
   }

   var wall_options = {
     isStatic: true
   };
  
  function pteload() {
 bg = loadImage("images/iss.png");
 sleep = loadAnimation("images/sleep.png");
 brush = loadAnimation("images/brush.png");
 gym = loadAnimation("images/gym21.png", "images/gym22.png");
 eat = loadAnimation("images/eat1","images/eat2");
 drink = loadAnimation("images/drink1.png","images/drink2.png");
 move = loadAnimation("images/move.png", "images/move1.png");
 bath = loadAnimation("images/bath1.png", "images/bath2/png");

  }
function setup() {

astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronout.scale = 0.1;

}
  wall = Bodies.rectangle(300,200,200,20,wall_options);
  World.add(world,wall);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(300,20,10,rock_options);
  World.add(world,rock);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
   
}


function draw() 
{
  background("black");
  Engine.update(engine);
  
if(keyDown("UP_ARROW")){
 astronaut.addAnimation("Brushing", brush);
 astronaut.changeAnimation("Brushing");
 astronaut.y = 250;
 astronaut.velocityX = 0;
 astronaut.velocityY = 0;
}

 if(KeyDown("DOWN_ARROW")){
   astronaut.addAnimation("Gymming", gym);
   astronaut.changeAnimation("Gymming");
  astronaut.y = 250;
 astronaut.velocityX = 0;
 astronaut.velocityY = 0;
}

if(KeyDown("LEFT_ARROW")){
  astronaut.addAnimation("Eating", eat);
  astronaut.changeAnimation("Eating");
  astronaut.y = 250;
  astronaut.velocityX = 0;
  astronout.velocityY = 0;
}

if(KeyDown("RIGHT_ARROW")){
  astronaut.addAnimation("Bathing", bath);
  astronaut.changeAnimation("Bathing");
  astronaut.y = 250;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("m_Key")){
  astronaut.addAnimation("Moving", move);
  astronaut.changeAnimation("Moving");
  astronaut.y = 250;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

}
}
