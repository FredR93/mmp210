/*
   logo2 
   */
   //gloabal scope
var y= 100;
var n= 100;
var x= 100
var speed= 5; 
var a= 0;
var c= 1; // change 
var r, g, b;


function setup(){
	createCanvas(640, 360);
  r= random(0,255);
  g= random(0,255);
  b= random(0,255);

  noStroke();
}

function draw(){
	// background("lightblue");
  if(frameCount %25 === 0){
    r= random(0,255);
    g= random(0,255);
    b= random(0,255);
      }

	
  fill(r,g,b);
	ellipse(x, y, n, 100,);
    x += speed;
    if (x > width || x < 0)
    	{speed *= -1;}
    a += c;
    if (a > 255 || a < 0)
    	{ c *= 1}
    y +=2;
    n +=2;
    if (y > height)
      { y= 0;}
    if (n > height)
    { n= 0;}


if (mouseX > width/2) {
    fill("lightblue");
  } else {
    fill("plum");
  }

  if (mouseIsPressed) {
    // bigger difference in mouse position means bigger size
    var s = mouseX - pmouseX; 
    ellipse(mouseX, mouseY, s);
  }


 



}

