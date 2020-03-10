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


function draw(){
 
  

    

	// draw the image
    tint(255, 255, 255);
    image(img, 0, 0, 400, 350)
    



}

