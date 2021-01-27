var PLAY = 1;
var END = 0;
var gamestate = PLAY;

var monkey , monkey_running;
var ground;
var bananaImage, obstacleImage;
var FoodGroup, obstacleGroup;
var SurvivelTime = 0 ;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  createCanvas(600,400);
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,1000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
   

}


function draw() {

  background(1000);
  
  stroke("white")
  textSize=20;
  fill("white");
  
  stroke("black");
  textSize=20;
  fill("black");
   SurvivelTime=Math.ceil(frameCount/frameRate());
  text("SurvivelTime:"+ SurvivelTime,100,50);
  
  
  if(gamestate=PLAY){
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    
    if(keyDown("space")&& monkey.y >= 314.3) {
        monkey.velocityY = -20;
        
    }
 
  spawnObstacles();
    spwan_banana();
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground);
  }
  
    
 
  
  
  
  
  
  drawSprites();
  
}


function spawnObstacles(){
  
  if (frameCount % 300 === 0){
  var  obstacle = createSprite(600,317,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.15;
  obstacle.velocityX = -6 ;
 
  }

 
  //obstacle.lifetime = 300;
 // obstacleGroup.add(obstacle);
  

  
  
}

function spwan_banana(){
   if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
   }
     
   // banana.lifetime = 200;
    
    //FoodGroup.add(cloud);
  
  
}

