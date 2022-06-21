lipstickx=0;
lipsticky=0;

function preload(){
    lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}
function setup(){
    canvas = createCanvas(600,400)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function draw(){
    image(video,0,0,600,0)
    image(lipstick,lipstickx,lipsticky,75,75)
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        lipstickx = results[0].pose.nose.x-60
        lipsticky = results[0].pose.nose.y
    }
}
function modelLoaded(){
    console.log("working")
}
function saves(){
    save("lipstick.png")
}