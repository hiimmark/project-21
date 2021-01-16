var canvas;
var music;
var surface1,surface2,surface3,surface4,box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    surface1 = createSprite(80,590,200,20)
    surface2 = createSprite(300,590,200,20)
    surface3 = createSprite(520,590,200,20)
    surface4 = createSprite(740,590,200,20)
    
    surface1.shapeColor = "red"
    surface2.shapeColor = "blue"
    surface3.shapeColor = "yellow"
    surface4.shapeColor = "green"
    
    
    
    box = createSprite(random(20,750),100,30,30)
    box.shapeColor = "white"
    box.velocityX = 5
    box.velocityY = 5
    createEdgeSprites();
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    
    if(isTouching(surface1,box)){
        bounceOff(box,surface1)
        box.shapeColor = "red"
    }
    if(isTouching(surface2,box)){
        bounceOff(box,surface2)
        box.shapeColor = "blue"
    }
    if(isTouching(surface3,box)){
        music.play()
        bounceOff(box,surface3)
        box.shapeColor = "yellow"
    
    }
    if(isTouching(surface4,box)){
        bounceOff(box,surface4)
        box.shapeColor = "green"
        music.stop()
        box.velocityX = 0
        box.velocityY = 0
    }
    if(box.x >= canvas.width){
        box.velocityX = box.velocityX * -1
    }
    if(box.x <= 0){
        box.velocityX = box.velocityX * -1
    }
    if(box.y >= canvas.height){
        box.velocityY = box.velocityY * -1
    }
    if(box.y <= 0){
        box.velocityY = box.velocityY * -1
    }
    drawSprites();
    //add condition to check if box touching surface and make it box
}
