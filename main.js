song_1 = ""
song_2 = ""

leftWristY = 0
leftWristX = 0

rightWristY = 0
rightWristX = 0

score_leftWrist = 0
score_rightWrist = 0

function preload() 
{
    song_1 = loadSong("harry potter.mp3")
    song_2 = loadSong("peter pan.mp3")
}
function setup() 
{
    canvas = createCanvas(500, 460)
    canvas.position(485, 200)

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotposes)
}
function draw() 
{
    image(video, 0, 0, 500, 460)
}
function modelLoaded() 
{
    console.log("Posenet is initialized")
}
function gotposes(results) 
{
   if (length > 0) 
   {
    score_leftWrist = results.length[9].keypoints
    score_rightWrist = results.length[10].keypoints

    leftWristX = results[0].pose.leftWrist.x
    righttWristX = results[0].pose.righttWrist.x

    leftWristyY= results[0].pose.leftWrist.y
    rightWristY = results[0].pose.rightWrist.y
   }
}