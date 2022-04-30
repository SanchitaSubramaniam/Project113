function take_snapshot() {
    save('my_image.png')
}

function draw() {
    image(video, 30, 30, 300, 300);

    // Set colors
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
  
    // A rectangle
    rect(40, 120, 120, 40);
    // An ellipse
    ellipse(240, 240, 80, 80);
    // A triangle
    triangle(300, 100, 320, 100, 310, 80);
}

function setup() {
    // Create the canvas
    createCanvas(720, 400);
    
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}