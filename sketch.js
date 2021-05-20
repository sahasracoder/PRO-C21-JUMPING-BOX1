var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here

    music = loadSound("music.mp3");


}




function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "lightblue";

    block2 = createSprite(260,580,260,30);
    block2.shapeColor = "yellow";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(500,580,220,30);
    block3.shapeColor = "brown";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "grey";


    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    
    ball.velocityX = Math.round(random(-8,6));

    ball.velocityY = Math.round(random(2,8));
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "lightblue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "yellow";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        //write code to stop music
        music.stop();
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "brown";
        music.play();
    }


    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "grey"
    }
    drawSprites();
}
