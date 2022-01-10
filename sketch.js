var imagemGatoDeitado, imagemGatoAndando ,imagemGatoSentado;
var tom;
var paisagem;
var imagemRatoDebochado;
var imagemRatoAndando;

function preload() {
    //load the images here
    imagemGatoDeitado = loadAnimation("images/cat1.png");
    imagemGatoAndando = loadAnimation("images/cat2.png","images/cat3.png");
    imagemGatoSentado = loadAnimation("images/cat4.png");
    paisagem = loadImage("images/garden.png");
    imagemRatoDebochado = loadAnimation("images/mouse2.png","images/mouse3.png");
    imagemRatoAndando = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(870,600);
tom.addAnimation("cat",imagemGatoDeitado);
tom.addAnimation("andando",imagemGatoAndando);
tom.scale = 0.15;

jerry = createSprite(70,600);
jerry.addAnimation("mouse",imagemRatoAndando);
jerry.addAnimation("deboche",imagemRatoDebochado);
jerry.scale = 0.1;

}

function draw() {

    background(paisagem);
    //Write condition here to evalute if tom and jerry collide
    if (jerry.isTouching(tom)){
        jerry.changeAnimation("deboche",imagemRatoDebochado);
        tom.changeAnimation("andando",imagemGatoAndando);
        tom.velocityX = -4;
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyDown("left")){
      jerry.x+= -4;
  }

  if (keyDown("right")){
      jerry.x+= 4;
  }

  if (keyDown("up")){
    jerry.y+= -4;
}

if (keyDown("down")){
    jerry.y+= 4;
}


}
