var bg,cat,cat1,cat2,tom,mouse,mouse1,mouse2,jerry;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    cat=loadAnimation("images/cat1.png");
    cat1=loadAnimation("images/cat2.png","images/cat3.png");
    cat2=loadAnimation("images/cat4.png");
    mouse=loadAnimation("images/mouse1.png");
    mouse1=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse2=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,570);
    tom=createSprite(750,450);
    tom.addAnimation("cat",cat);
    tom.scale=0.1;
    jerry=createSprite(150,425);
    jerry.addAnimation("mouseStanding",mouse);
    jerry.scale=0.1;
    //create tom and jerry sprites here
    console.log(tom.x,jerry.x,tom.width,jerry.width);
    console.log(tom.x-jerry.x);
    console.log(tom.width-jerry.width);
    console.log(tom.x-jerry.x<(tom.width-jerry.width)/2);
}

function draw() {

    background(bg);
    
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
       // if(tom.isTouching(jerry)){
        tom.velocityX=0;
        tom.x=240;
        tom.addAnimation("tomlastImage",cat2);
        tom.changeAnimation("tomlastImage");

        jerry.addAnimation("jerrylastImage",mouse2);
        jerry.changeAnimation("jerrylastImage");
    }

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
       jerry.addAnimation("jerryTs",mouse1);
       jerry.changeAnimation("jerryTs");

        tom.velocityX=-5;
        tom.addAnimation("tomRunning",cat1);
        tom.changeAnimation("tomRunning");


    }

  //For moving and changing animation write code here


}
