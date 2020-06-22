const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,790,800,40,ground_options);
   World.add(world,ground);
    //console.log(ground);
    var ball_option= {
        restitution: 5.0
    }
    ball = Bodies.circle(200,100,20,ball_option);
    World.add(world,ball);
    console.log(ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,40);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}