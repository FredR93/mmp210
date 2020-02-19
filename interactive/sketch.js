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
	
    fill("red");
     stroke('black');
     noStroke()

	// face area 
	ellipse(200, 180, 200);
    
    //iner eyes
    fill(100)
    noStroke() 
    ellipse(350, 160, 150)
    ellipseMode(CENTER);
    
    //outer eyes
    fill('blue')
	ellipse(350, 160, 100);//right eye

	fill('yellow')
	x = width/2;
	y = height/2;
	ellipse(600, 160, s);//left eye 


    //mouth 
    fill('yellow')
    noStroke()
    var b= 0; // blue 
	var r= mouseX; // red 
	var b= mouseY; // black
	fill(b, r, b);

	x = width/ 2;
	y = height/ 2;
	rect(150, 210, 100, 150, 15);


	//shapes that are only xy points
	
	//hair
	stroke('black')
	strokeWeight(3)

	line(100, 70, 160, 500);
	line(200, 100, 1000, 500);
	line(170, 100, 0, 100);
	line(180, 70, 2000, 100);

    //nose
    fill('black')
	triangle(200, 180, 100, 150, 220, 220);

	//anything
	fill('blue') 
	noStroke()
	square(30, 20, 55);
}

function mousePressed(){  
	s -= 10;
}