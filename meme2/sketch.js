/*
   meme version2
   */

//gloabal scope


var x= 100
var speed= 5; 
function draw(){
	background(350);
	ellipse(x, 100, 100);
    x += speed;
    if (x > width || x < 0)
    	{speed *= -1;}

    


    



}

