/*
   art 
   */
   // draw 5 circles in a line

function setup(){
	createCanvas(640, 360);
    noStroke();
 

    rotateSlider = createSlider(0, TWO_PI, 0);
    rotateSlider. input(pattern);


	pattern(); // generate a pattern to start
}

	
function pattern() {
	background('plum');
	
	fill('lightblue');
	
	for (let x = 0; x <= width; x += 50) {
		ellipse(x, random(height), random(100));
	

    push();
    translate(x, height/2);
    rotate(rotateSlider .value());
    pop();
    
	}

    



}

