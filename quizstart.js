const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

let questions = [
    {
       question: "Mark for iron in the periodic table?",
       imgSrc: "img/novismileNauka.png",
       choiceA: "Fe",
       choiceB: "Ge",
       choiceC: "Ef",
       choiceD: "Pe",
    
       correct: "A"
   }, {
       question: "Who actually discovered penicillin?",
       imgSrc: "img/novismileNauka.png",
       choiceA: "Thomas Edison",
       choiceB: "Alexander Fleming",
       choiceC: "Nikola Tesla",
       choiceD: "Charles Darwin",
      
       correct: "B"
   }, {
       question: "The longest river in Europe is?",
       imgSrc: "img/novismileNauka.png",
       choiceA: "Sava",
       choiceB: "Rhine",
       choiceC: "Volga",
       choiceD: "Danube",
       
       correct: "C"
   },{
       question: "Who is the father of the mathematics?",
       imgSrc: "img/novismileNauka.png",
       choiceA: "Archimedes",
       choiceB: "Socrates",
       choiceC: "Pythagoras",
       choiceD: "Aristotle",
       
       correct: "A"
   }, {
       question: "For which club Michael Jordan played the most matches?",
       imgSrc: "img/novismileSport.png",
       choiceA: "Charlotte Hornets",
       choiceB: "Miami Heat",
       choiceC: "LA Lakers",
       choiceD: "Chicago Bulls",
     
       correct: "D"
   }, {
       question: "What team has won the most Champions League titles?",
       imgSrc: "img/novismileSport.png",
       choiceA: "FC Real Madrid",
       choiceB: "FC Liverpool",
       choiceC: "FC Barcelona",
       choiceD: "FC Milan",
     
      
       correct: "A"
   },
   {
       question: "Who won Wimbledon 2011 men's final?",
       imgSrc: "img/novismileSport.png",
       choiceA: "Novak Djoković",
       choiceB: "Rafael Nadal",
       choiceC: "Björn Borg",
       choiceD: "Roger Federer",
     
       correct: "A"
   }, {
       question: "What athlete has won the most gold medals at the Olympics?",
       imgSrc: "img/novismileSport.png",
       choiceA: "Mark Spitz",
       choiceB: "Michael Phelps",
       choiceC: "Michael Johnson",
       choiceD: "Merlene Ottey",
     
       correct: "B"
   }, {
       question: "Who has won the most Oscars ever?",
       imgSrc: "img/novismileZabava2.png",
       choiceA: "Bruce Willis",
       choiceB: "Meryl Streep",
       choiceC: "Jack Nicholson",
       choiceD: "Katharine Hepburn",
 
       correct: "D"
   }, {
       question: "Who sing song Smells like teen spirit?",
       imgSrc: "img/novismileZabava2.png",
       choiceA: "Nirvana",
       choiceB: "Metallica",
       choiceC: "Sex Pistols",
       choiceD: "Queen",
       correct: "A"
   }, {
       question: "Who plays Charlie Goodson on Anger Management?",
       imgSrc: "img/novismileZabava2.png",
       choiceA: "Charlie Harper",
       choiceB: "Bruce Willis",
       choiceC: "Charlie Sheen",
       choiceD: "Jack Nicholson",


       correct: "C"
   }, {
       question: "The name of the pub where Homer drinks beer?",
       imgSrc: "img/novismileZabava2.png",
       choiceA: "Mooo",
       choiceB: "Mo",
       choiceC: "Om",
       choiceD: "Nooo",
    
       correct: "B"
   }, {
       question: "Who painted The scream?",
       imgSrc : "img/novismileArt.png",
       choiceA: "Edvard Munch",
       choiceB: "Rembrandt",
       choiceC: "Pablo Picasso",
       choiceD: "Frida Kahlo",
    
       correct: "A"
   }, {
       question: "Who won nobel  prize for literature 1961?",
       imgSrc : "img/novismileArt.png",
       choiceA: "Robert Hofstadter",
       choiceB: "Rudolf Mössbauer",
       choiceC: "Ivo Andrić",
       choiceD: "Marie Curie",
      
       correct: "C"
   }, {
       question: "Who wrote  The Jungle Book?",
       imgSrc : "img/novismileArt.png",
       choiceA: "Edgar Allan Poe",
       choiceB: "Rudyard Kipling",
       choiceC: "Lewis Carroll",
       choiceD: "Ivo Andrić",
   
       correct: "B"
   }, {
       question: "Who wrote The Four Seasons?",
       imgSrc : "img/novismileArt.png",
       choiceA: "Frédéric Chopin",
       choiceB: "Richard Wagner ",
       choiceC: "Johannes Brahms",
       choiceD: "Antonio Vivaldi",
      
       correct: "D"
   }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;


// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    
   
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s

}


// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
        
        
    }
     
}


// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#003f1e";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">" + "<br/>";
    scoreDiv.innerHTML += "<p class='score-txt'>"+ scorePerCent +"%</p>"+ "<br/>";
    scoreDiv.innerHTML +="<p class='highscore-txt'>" +"Click for High Score"+"</p>" + "<br/>";
}