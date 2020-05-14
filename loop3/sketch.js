/*
   loop3
   */
   // draw 5 circles in a line

function setup(){
	createCanvas(640, 360);
    background("white");
    rectMode(CENTER)
	noStroke();
 

    rotateSlider = createSlider(0, TWO_PI, 0);
    rotateSlider. input(pattern);


	pattern(); // generate a pattern to start



	var columns = 32;
	var rows = 16;
	var w = width/columns;
	var h = height/rows;
	
	for (var x = 0; x < width; x += w) {
		for (var y = 0; y < height; y += h) {
			var r = random(0,255);
			var g = random(0,255);
			var b = random(0,255);
			fill(r, g, b);
			var s = random(-10, 10);

			if (random(1) > 0.5){
				triangle(x, y, w + s, w + s,);
			} else{
			    rect(x, y, w + s, w + s);
		    }
		}
	}
    
    for (let x = 0; x <= width; x += 50) {
		rect(x, random(height), random(100));


    push();
    translate(x, height/2);
    rotate(rotateSlider .value());
    pop();


}

