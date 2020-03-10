/*
   meme version2
   */


var x= 100
var speed= 5; 
function draw(){
	background(500);
	ellipse(x, 100, 100);
    x += speed;
    if (x > width || x < 0)
    	{ speed *=-1;}
    

}

