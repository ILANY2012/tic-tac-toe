var box1,box2,box3,box4,box5,box6,box7,box8,box9
var xImg
var oImg
var boxImg
var turn
var box11,box12,box13,box21,box22,box23,box31,box32,box33;






function preload(){
  xImg=loadAnimation("xxxtentacion.png");
  boxImg=loadAnimation("download.png");
  oImg=loadAnimation("OMGosh.png");
}


function setup(){
  createCanvas(600,600);
  box5=createSprite(300,300,190,190)
  box6=createSprite(500,300,190,190)
  box4=createSprite(100,300,190,190)
  box2=createSprite(300,100,190,190)
  box1=createSprite(100,100,190,190)
  box3=createSprite(500,100,190,190)
  box7=createSprite(100,500,190,190)
  box8=createSprite(300,500,190,190)
  box9=createSprite(500,500,190,190)

  box1.addAnimation("box",boxImg)
  box1.addAnimation("x",xImg)
  box1.addAnimation("o",oImg)
  box1.scale=0.8;
  
  box2.addAnimation("box",boxImg)
  box2.addAnimation("x",xImg)
  box2.addAnimation("o",oImg)
  box2.scale=0.8
  
  box3.addAnimation("box",boxImg)
  box3.addAnimation("x",xImg)
  box3.addAnimation("o",oImg)
  box3.scale=0.8
  
  box4.addAnimation("box",boxImg)
  box4.addAnimation("x",xImg)
  box4.addAnimation("o",oImg)
  box4.scale=0.8
  
  box5.addAnimation("box",boxImg)
  box5.addAnimation("x",xImg)
  box5.addAnimation("o",oImg)
  box5.scale=0.8

  box6.addAnimation("box",boxImg)
  box6.addAnimation("x",xImg)
  box6.addAnimation("o",oImg)
  box6.scale=0.8
  
  box7.addAnimation("box",boxImg)
  box7.addAnimation("x",xImg)
  box7.addAnimation("o",oImg)
  box7.scale=0.8

  box8.addAnimation("box",boxImg)
  box8.addAnimation("x",xImg)
  box8.addAnimation("o",oImg)
  box8.scale=0.8
  
  box9.addAnimation("box",boxImg)
  box9.addAnimation("x",xImg)
  box9.addAnimation("o",oImg)
  box9.scale=0.8
  
  box11=1;
  box12=1;
  box13=1;
  box21=1;
  box22=1;
  box23=1;
  box31=1;
  box32=1;
  box33=1;
  
  

  turn="p1";

  


}



function draw(){
 background("black");

 
 drawSprites();
 

  //box1
  if(mousePressedOver(box1) && box11 == 1){
    if(turn =="p1"){
      letThePlayerOnePlay(box1);
      box11=2;
    }
    else if(turn =="p2"){
      letThePlayerTwoPlay(box1);
      box11=3;
    }
  } 
  
  //box2
  if(mousePressedOver(box2) && box12 == 1){
    if(turn =="p1"){
      letThePlayerOnePlay(box2);
      box12=2;
    }
    else if(turn =="p2"){
      letThePlayerTwoPlay(box2);
      box12=3;
    }
  } 
  
  //box3
  if(mousePressedOver(box3) && box13 == 1){
    if(turn =="p1"){
      letThePlayerOnePlay(box3);
      box13=2;
    }
    else if(turn =="p2"){
      letThePlayerTwoPlay(box3);
      box13=3;
    }
  } 

  //box4
  if(mousePressedOver(box4) && box21 == 1){
    if(turn =="p1"){
      letThePlayerOnePlay(box4);
      box21=2;
    }
    else if(turn =="p2"){
      letThePlayerTwoPlay(box4);
      box21=3;
    }
  } 
  
  //box5
  if(mousePressedOver(box5) && box22 == 1){
    if(turn =="p1"){
      letThePlayerOnePlay(box5);
      box22=2;
    }
    else if(turn =="p2"){
      letThePlayerTwoPlay(box5);
      box22=3;
    }
  } 

  //box6
  if(mousePressedOver(box6) && box23 == 1){
    if(turn =="p1"){
      letThePlayerOnePlay(box6);
      box23=2;
    }
    else if(turn =="p2"){
      letThePlayerTwoPlay(box6);
      box23=3;
    }
  } 

  //box7
  if(mousePressedOver(box7) && box31 == 1){
    if(turn =="p1"){
      letThePlayerOnePlay(box7);
      box31=2;
    }
    else if(turn =="p2"){
      letThePlayerTwoPlay(box7);
      box31=3;
    }
  } 
  
  //box8
  if(mousePressedOver(box8) && box32 == 1){
    if(turn =="p1"){
      letThePlayerOnePlay(box8);
      box32=2;
    }
    else if(turn =="p2"){
      letThePlayerTwoPlay(box8);
      box32=3;
    }
  } 
  
  //box9
  if(mousePressedOver(box9) && box33 == 1){
    if(turn =="p1"){
      letThePlayerOnePlay(box9);
      box33=2;
    }
    else if(turn =="p2"){
      letThePlayerTwoPlay(box9);
      box33=3;
    }
  } 
  
  
  //player1 winning conditions(x)
 if(box11 == 2 && box12 == 2 && box13 == 2){
   playerOneWins();
 }  
 if(box21 == 2 && box22 == 2 && box23 == 2){
  playerOneWins();
 }
 if(box31 == 2 && box32 == 2 && box33 == 2){
  playerOneWins();
  }
 if(box11 == 2 && box21 == 2 && box31 == 2){
  playerOneWins();
 }
 if(box21 == 2 && box22 == 2 && box23 == 2){
  playerOneWins();
 }   
 if(box13 == 2 && box23 == 2 && box33 == 2){
  playerOneWins();
 }
 if(box11 == 2 && box22 == 2 && box33 == 2){
  playerOneWins();
 }
 if(box13 == 2 && box22 == 2 && box31 == 2){
  playerOneWins();
 }


   
 // player2 winning conditions(o)
 if(box11 == 3 && box12 == 3 && box13 == 3){
  playerTwoWins();
 }  
 if(box21 == 3 && box22 == 3 && box23 == 3){
  playerTwoWins();
 }
 if(box31 == 3 && box32 == 3 && box33 == 3){
  playerTwoWins();
  }
 if(box11 == 3 && box21 == 3 && box31 == 3){
  playerTwoWins();
 }
 if(box12 == 3 && box22 == 3 && box23 == 3){
  playerTwoWins();
 }   
 if(box13 == 3 && box23 == 3 && box33 == 3){
  playerTwoWins();
 }
 if(box11 == 3 && box22 == 3 && box33 == 3){
  playerTwoWins();
 }
 if(box13 == 3 && box22 == 3 && box31 == 3){
  playerTwoWins();
 }
 
 
  
}
function letThePlayerOnePlay(boxP1){
  boxP1.changeAnimation("x");
  boxP1.scale=0.6;
  turn="p2"
}
function letThePlayerTwoPlay(boxP2){
  boxP2.changeAnimation("o");
  boxP2.scale=0.2;
  turn="p1"
}
function playerOneWins(){
  textSize(40)
  fill(rgb(random(0,255),random(0,255),random(0,255)))
  text("Get wrecked O", 200,300)
  text("X wins!!!",200,340)
  turn="box"
}

function playerTwoWins(){
  textSize(40)
  fill(rgb(random(0,255),random(0,255),random(0,255)))
  text("Get wrecked X", 200,300)
  text("O wins!!!",200,340)
  turn="box"
}