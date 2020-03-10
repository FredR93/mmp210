/*
   meme
   */

//gloabal scope
var dragonImage;

function preload(){
	img= loadImage("dragon.png")
}



function setup(){
	createCanvas(640, 360);
}


function draw(){
	background('gray');
    textSize(50);


	// draw the image
    tint(350, 150, 100);
    image(img, 0, 0, 250, 350)
    tint(300, 255, 255, 127);
    image(img, 0, 0, mouseX, mouseY);



}

