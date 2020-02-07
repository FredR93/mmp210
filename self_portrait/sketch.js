function setup(){
	createCanvas(640, 360);

}

function draw(){
	background("lightblue");

	// shapes with xy coordinate + size
	
    fill("red");
     stroke('black');
     noStroke()

	// face area
	ellipse(200, 180, 200);//face 
    
    //iner eyes
    fill(100)
    noStroke() 
    ellipse(350, 160, 150)
    ellipseMode(CENTER);
    
    //outer eyes
    fill('blue')
	ellipse(350, 160, 100);//right eye
	fill('yellow')
	ellipse(600, 160, 350);//left eye 

    //mouth
    fill('yellow')
    noStroke()
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