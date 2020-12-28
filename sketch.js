let car,wall;
let speed,weight

function setup() {
  createCanvas(800,400);

  speed=random(55,90);
  weight=random(400,1500);

  wall=createSprite(750, 200, 50,height/2);
  wall.shapeColor= color(204, 51, 0);
  car=createSprite(200,200,40,20);
  //car.shapeColor=color(0, 0, 204);
  car.velocityX = speed;
}

function draw() {
  background(204, 255, 51);  
  car.collide(wall);
  if(wall.x - car.x == (car.width+wall.width)/2) 
  {
    var deformation=0.5*weight*speed*speed/22509;

    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if (deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0)
    }

  }

  drawSprites();
}



