
//play music
var x = document.getElementById("my-audio");
window.onload = function () {
    x.play();
}

function playAudio() {

    x.play();
}

function pauseAudio() {
    x.pause();
};
function show(elementId) {

    document.getElementById("playquiz").style.display = "none";


    document.getElementById(elementId).style.display = "block";
}
//upload photo
var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};

var fullReset = document.getElementById('fullReset');
//reset page
fullReset.addEventListener('click', function (e) {
    location.reload();
}, false);
//go to high score page to save result
function showEndHtml() {
    window.location.assign("end.html");
  } 

  //show rank list of the best players
  function showRankList(elementId) {
    

    document.getElementById("highScores").style.display = "none";


    document.getElementById(elementId).style.display = "block";
   
} 
