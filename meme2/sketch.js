/*
   meme version1
   */

//gloabal scope
var newMeme;

function preload(){
	img= loadImage("newmeme.jpg")
}



function setup(){
	createCanvas(640, 360);
}

var x= 100
var speed= 5; 
function draw(){
	background(1000, 1000);
	img= loadImage("newmeme.jpg")
    x += speed;
    if (x > width || x < 0)
    	{ speed *=-1;}

    


    



}

