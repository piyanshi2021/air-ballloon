var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database;
var hieght;
function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

var balloonHieght=database.ref('balloon/hieght');
balloonHieght.on("value",readHieght,showError);
  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    updateHieght(-10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHieght(-10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    updateHieght(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
balloon.scale=balloon.scale -0.005;
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    updateHieght(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale +0.005;
    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function updateHieght(x,y){
database.ref('balloon/hieght').set({
'x' : hieght.x+x,
'y' : hieght.y+y,




})



}

function readHieght(data){
hieght = data.val();
console.log(hieght.x);
balloon.x = hieght.x;
balloon.y = hieght.y;
}

function showError(){
console.log("error is writting to the database");
}














