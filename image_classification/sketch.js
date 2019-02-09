let classifier = ml5.imageClassifier('MobileNet', modelReady);
let img;

function setup() {
  // create canvas
  var c = createCanvas(400, 300);
  background(100);
  // Add an event for when a file is dropped onto the canvas
  c.drop(gotFile);
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text('Drag an image file onto the canvas.', width / 2, height / 2);
}

function modelReady() {
  console.log('model ready');
}

function gotFile(file) {
  // If it's an image file
  if (file.type === 'image') {
    // Create an image DOM element but don't show it
    img = createImg(file.data, imageReady).hide();
  } else {
    println('Not an image file!');
  }
}

function imageReady() {
  // Draw the image onto the canvas
  classifier.predict(img, gotResult);
  background(0);
  image(img, 0, 0, width, height);
}

function gotResult(err, results) {
  // Display error in the console
  if (err) {
    console.error(err);
  } else {
    console.log(results);
    createP(results[0].className);
  }
}