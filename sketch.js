// global scope 

// position variables
var x= 200; // origin for face 
var y= 180;



// size variables
var s = 200; // size of the face



function setup(){
	// setup scope
	createCanvas(640, 360);
}

function draw(){
	// draw scope
	background("lightblue");
	// shapes with xy coordinate + size
    


    //ouer eye 1
	fill('yellow')
	noStroke()
	x = width/2;
	y = height/2;
	ellipse(600, 160, s);//left eye 
	
    fill("red");
     stroke('black');
     noStroke()


   //line1 
   stroke('white')
   strokeWeight(5)
   line(100, 70, 160, 500);
	


	// face area 
	stroke('black')
	strokeWeight(3)
	ellipse(200, 180, 200);



    //line2
    stroke('black')
    strokeWeight(5)
    line(180, 70, 2000, 100);



   //nose
    fill('blue')
    noStroke()
	triangle(200, 180, 100, 150, 220, 220);
	


	//just a square
	fill('blue') 
	noStroke()
	 var b= 10; // blue 
	var r= mouseX; // red 
	var g= mouseY; // black
	fill(b, r, g);

	x = width/ 2;
	y = height/ 2;

	x= mouseX;
	y=mouseY;
	square(x, y, 55);
 



    //iner eye
    fill('black')
    stroke('white')
    strokeWeight(2) 
    ellipse(350, 160, 150)
    ellipseMode(CENTER);
    


    //line3
	stroke('blue')
	strokeWeight(5)
    line(200, 100, 1000, 500);



    //outer eye2
    fill('blue')
    stroke('red')
    strokeWeight(2)
	ellipse(350, 160, 100);//right eye



    //mouth 
    fill('yellow')
    stroke('black')
    strokeWeight(3)
	rect(150, 210, 100, 150, 15);


	//shapes that are only xy points
	
	

    //line4
    stroke('blue')
    strokeWeight(5)
	line(170, 100, 0, 100);
	
	
}

function mousePressed(){  
	s -= 10;
}
