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
    document.getElementById("quiz").style.display = "none";


    document.getElementById(elementId).style.display = "block";
}