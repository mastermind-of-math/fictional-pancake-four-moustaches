function preload(){
}

var x = 0;
var y = 0;

function setup(){
    canvas = createCanvas(300, 300)
    canvas.position(530, 250)
    img = createCapture(VIDEO);
    img.size(300, 300);
    img.hide();
    poseNet = ml5.poseNet(img, modelLoaded)
    poseNet.on('pose', gotResults);
}

function modelLoaded(){
    console.log('loaded posenet');
}


function gotResults(results){
    if(results.length > 0){
        console.log(results);
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y + 15;
    }
}

function draw(){
    image(img, 0, 0, 300, 300);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    circle(x, y, 10);
}