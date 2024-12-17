console.log("welcome to the console! because this is my first project, there isn't much to do here.");
console.log("functions: buttonclicked(), resetscore()");
var score = 0;
const scorehtml = document.getElementById('scores');

function buttonclicked() {
    score = score + 1;
    scorehtml.innerHTML = score
};

function resetscore() {
    score = 0
    scorehtml.innerHTML = score
}