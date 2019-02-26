
//play music
var x = document.getElementById("my-audio");
window.onload = function autoPlay () {
    x.autoPlay();
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
//upload image
var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};
// reset page(quiz)
var fullReset = document.getElementById('fullReset');

fullReset.addEventListener('click', function (r) {
    location.reload();
}, false);
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
  };
   function hideButton(elementId){
    var x = document.getElementById("label");
    if (x.style.display === "block") {
      x.style.display = "none";
    } 
  };

  function showRegLog() {
    window.location.assign("register-login.html");
  } 
  function showHelp() {
    window.location.assign("help.html");
  } 

  function showIndex() {
    window.location.assign("index.html");
  } 

