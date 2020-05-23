

function draw() {
	createCanvas(640, 360);
	background("lightblue");
	button(100, 100, 100);
	button(200, 200, 200);
	button(300, 100, 100);
	button(500, 300, 400);
	button(320, 180, 50);
}

function button(x, y, s) {
	var d = dist(mouseX, mouseY, x, y);
	if (d < s / 2) {
		fill('green');
	} else {
		fill('blue');
	}
	ellipse(x, y, s);
    

    fill("red");
    square( x, y, s); 
}
