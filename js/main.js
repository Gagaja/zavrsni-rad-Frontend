
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
function showHideQuizField(elementId) {

    var x = document.getElementById("playquiz");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
//upload photo
var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};

var fullReset = document.getElementById('fullReset');
/*reset page
fullReset.addEventListener('click', function (e) {
    location.reload();
}, false);*/
//go to high score page to save result
function showEndHtml() {
    window.location.assign("end.html");
  } 

  //show and hide rank list of the best players


function showHideRankList(elementId) {
    var x = document.getElementById("highScores");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
