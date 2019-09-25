var fixedrect, movingrect;
var gameob1, gameob2, gameob3, gameob4;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600, 400, 50, 80);
  movingrect = createSprite(400, 200, 80, 30);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

  gameob1 = createSprite(100,100,50,50);
  gameob1.shapeColor = "green";
  gameob2 = createSprite(200,100,50,50);
  gameob2.shapeColor = "green";
  gameob3 = createSprite(300,100,50,50);
  gameob3.shapeColor = "green";
  gameob4 = createSprite(400,100,50,50);
  gameob4.shapeColor = "green";

}

function draw() {
  background(0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

 if(isTouching(movingrect,gameob1,gameob2)){
  fixedrect.shapeColor = "blue";
      movingrect.shapeColor = "blue";
    }
    else{
      fixedrect.shapeColor = "green";
      movingrect.shapeColor = "green"; 
 }
 bounceOff(movingrect,fixedrect);
  drawSprites();
}
