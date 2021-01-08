var bullet,wall;
var bulletspeed,bulletweight;
var thicknessofwall;
var Damage;

function setup() {
  //creating canvas
  createCanvas(1600,400);

  //assigning random speed and weight
  bulletspeed=random(223,321);
  bulletweight=random(30,52);
  thicknessofwall=random(22,83);

  //creating car sprite with velocity
  bullet=createSprite(50, 200, 30, 10);
  bullet.shapeColor="white";
  bullet.velocityX=bulletspeed;

  //creating wall sprite
  wall=createSprite(1200,200,thicknessofwall,height/2);
  wall.shapeColor="white";
 
}

function draw() {
  //adding background color
  background("grey"); 

  if(hasCollided(bullet ,wall))
  {
  bullet.velocityX=0;
  console.log(Damage=0.5*bulletweight*bulletspeed*bulletspeed/(thicknessofwall*thicknessofwall*thicknessofwall));

  if(Damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(Damage<10){
    wall.shapeColor=color(0,255,0);
  }

  }
  
  drawSprites();
}

