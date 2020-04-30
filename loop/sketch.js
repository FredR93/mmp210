/*
   loop 
   */
   // draw 5 circles in a line

function setup(){
	createCanvas(640, 360);
    background(220)

//
 for (var x= 50; x < width; x +=50)
{ 
 

 
   circle(x, height/2, 50);
   circle(x - 10, height/2 -10, 10);
   circle(x + 10, height/2 -10, 10)
   rect(x, height/2 + 10, 15, 10, 5);
}


}

