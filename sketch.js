var helper, helperImg, helperPos;
var cat, catImg;
var frst, frstImg;
var fire, fireImg, fireG;
var flor;
var Gstats = 1;

function preload(){
    frstImg = loadImage("images/forest.jpg");
    helperImg = loadImage("images/person.png");
    catImg = loadImage("images/cat.png");
    fireImg = loadImage("images/fire.png");
}

function setup() {
    createCanvas(800,800);

    //Forest Sprites
    frst = createSprite(400, 400);
    frst.addImage("forest", frstImg);
    frst.velocityX = -7;

    //Flor Sprites
    flor = createSprite(400,550+180,800,200);
    flor.visible = false;

    //Fire Sprites
    fireG = new Group()

    //Runner Sprites
    helper = createSprite(100,550,50,50)
    helper.scale = 0.15;
    helper.addImage("person", helperImg);
}

function draw() {
 background(0);

 //console.log(helper.y);//
 //console.log(Gstats);//

 //Game Running
 if (Gstats === 1) {

    helper.collide(flor);

    if (helper.y>550) {
        if (keyDown("space")) {
            helper.velocityY = -14;
        }
    }

    if(frst.x < 0) {
        frst.x = 400;
    }

    helper.velocityY = helper.velocityY + 0.6;

    showFires();

    //colision
    if (fireG.isTouching(helper)) {
        helper.velocityX = 0
        helper.destroy();
        flor.destroy();
        Gstats += 1;
    }

    drawSprites();

 }

 //Endgame
 if (Gstats === 2) {
    background("black");

    fill("red");
    textSize(80);
    text("Game Over",180,400);
 }

//Debugs
////helper.debug = true;
////flor.debug = true;
}

function showFires() {
    if (frameCount % 80 === 0) {
        var fire = createSprite(750,620)
        fire.addImage(fireImg);
        fire.scale = 0.15;

        fire.x = Math.round(random(650,900));
        fire.velocityX = -7;

        fire.lifetime = 150;
        fireG.add(fire);
    }
}