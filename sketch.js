var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage("jardenho",gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  var coisinhos = Math.round(random(1,3));

  if (frameCount % 80 == 0) {
    if (coisinhos == 1) {
      createApples();
    } else if (coisinhos == 2) {
      createLeafO();
    } else {
      createRedLeaf();
    }

  }

  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

  drawSprites();
  
}

function createApples() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage("maam",appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}

function createLeafO() {
  orangeL = createSprite(random(50,350),40,10,10);
  orangeL.addImage("fôia", orangeImg);
  orangeL.scale = 0.06;
  orangeL.velocityY = 3;
  orangeL.lifetime = 150;
}

function createRedLeaf() {
  redL = createSprite(random(50,350),40,10,10);
  redL.addImage("fôia2", redImg);
  redL.scale = 0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
