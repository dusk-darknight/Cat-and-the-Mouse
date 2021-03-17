var cat, mouse
var cat_running,cat_sitting,cat_laying
var mouse_teasing,mouse_teasing2,mouse_looking
var backgroundImg
function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    cat_sitting = loadAnimation("images/cat4.png");
    cat_running=loadAnimation("images/cat2.png","images/cat3.png");
    cat_laying=loadAnimation("images/cat1.png")
    mouse_teasing = loadAnimation("images/mouse1.png");
    mouse_teasing2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse_looking= loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(850,600)
mouse=createSprite(150,600)
cat.addAnimation( "cat_laying",cat_laying)
cat.scale=0.2

//cat.addImage(cat_sitting)
//cat.scale=0.1
mouse.addAnimation("mouse_teasing", mouse_teasing)
mouse.scale=0.2

}


function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width - mouse.width)/2){
    cat.velocityX=0
   cat.addAnimation("cat_sitting", cat_sitting)
   cat.changeAnimation(cat_sitting)
   mouse.addAnimation("mouse_looking", mouse_looking)
}  mouse.changeAnimation("mouse_looking")
            


        drawSprites();
}


function keyPressed(){
if (keyCode=== LEFT_ARROW){
cat.velocityX=-5
cat.addAnimation("cat_running", cat_running);
cat.changeAnimation("cat_running")
mouse.addAnimation("mouse_teasing2", mouse_teasing2)
mouse.changeAnimation("mouse_teasing2")
}
  //For moving and changing animation write code here
}
    