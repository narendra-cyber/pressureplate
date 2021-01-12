var fixedrect, movingrect;
function setup() {
  createCanvas(windowWidth,windowHeight);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";
  movingrect=createSprite(600, 200, 50, 100);
  movingrect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingrect.y=World.mouseY;
  movingrect.x=World.mouseX;
  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2&&
     movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";

  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }

  console.log(fixedrect.x-movingrect.x);
  
}