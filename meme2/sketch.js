/*
   meme version2
   */

//gloabal scope
function setup(){
	createCanvas(640, 360);
}

var x= 100
var speed= 5; 
var r= 0;
var c= 1; // change 
function draw(){
	background(500);
	fill( r, 50, 100);
	noStroke();
	ellipse(x, 100, 100);
    x += speed;
    if (x > width || x < 0)
    	{speed *= -1;}
    r += c;
    if (r > 255 || r < 0)
    	{ c *= -1}
    


    



}

