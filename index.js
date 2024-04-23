const box1 = document.getElementById("1");
const box2 = document.getElementById("2");
const box3 = document.getElementById("3");
const box4 = document.getElementById("4");
const box5 = document.getElementById("5");
const box6 = document.getElementById("6");
const box7 = document.getElementById("7");
const box8 = document.getElementById("8");
const box9 = document.getElementById("9");
const xBtn = document.getElementById("xBtn");
const oBtn = document.getElementById("oBtn");
const resetBtn = document.getElementById("resetBtn");
const completeBox = document.getElementById("completeBox");
const winner = document.getElementById("winner");
const nextGame = document.getElementById("nextGame");
const xScore = document.getElementById("xScore");
const oScore = document.getElementById("oScore");
const resetScore = document.getElementById("resetScore");
const turn = document.getElementById("turn");

let counter = 0;
let isGameComplete = false;
let xScoreTotal = localStorage.getItem("xScore") || 0;
let oScoreTotal = localStorage.getItem("oScore") || 0;

xScore.innerText = localStorage.getItem("xScore") || 0;
oScore.innerText = localStorage.getItem("oScore") || 0;
turn.innerText = "X";

function symbolFunction(event) {
  if (isGameComplete === false) {
    if (counter % 2 === 0) {
      event.target.innerText = "X";
      event.target.style.color = "red";
      turn.innerText = "O";
    } else {
      event.target.innerText = "O";
      event.target.style.color = "blue";
      turn.innerText = "X";
    }

    counter++;

    if (event.target.innerText === "X" || "O") {
      event.target.style.pointerEvents = "none";
    }

    if (
      box1.innerText === box2.innerText &&
      box2.innerText === box3.innerText &&
      box1.innerText !== ""
    ) {
      gameComplete();
    } else if (
      box4.innerText === box5.innerText &&
      box5.innerText === box6.innerText &&
      box4.innerText !== ""
    ) {
      gameComplete();
    } else if (
      box7.innerText === box8.innerText &&
      box8.innerText === box9.innerText &&
      box7.innerText !== ""
    ) {
      gameComplete();
    } else if (
      box7.innerText === box5.innerText &&
      box5.innerText === box3.innerText &&
      box7.innerText !== ""
    ) {
      gameComplete();
    } else if (
      box1.innerText === box5.innerText &&
      box5.innerText === box9.innerText &&
      box1.innerText !== ""
    ) {
      gameComplete();
    } else if (
      box1.innerText === box4.innerText &&
      box4.innerText === box7.innerText &&
      box1.innerText !== ""
    ) {
      gameComplete();
    } else if (
      box2.innerText === box5.innerText &&
      box5.innerText === box8.innerText &&
      box2.innerText !== ""
    ) {
      gameComplete();
    } else if (
      box3.innerText === box6.innerText &&
      box6.innerText === box9.innerText &&
      box3.innerText !== ""
    ) {
      gameComplete();
    }
  }
}

function resetGame() {
  isGameComplete = false;
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.innerText = "";
    square.style.pointerEvents = "auto";
    if (counter % 2 === 0) {
      turn.innerText = "X";
    } else {
      turn.innerText = "O";
    }
  });
}

function gameComplete() {
  if (counter % 2 === 0) {
    winner.innerText = "O";
    oScoreTotal++;
    oScore.innerText = oScoreTotal;
    localStorage.setItem("oScore", oScoreTotal);
  } else {
    winner.innerText = "X";
    xScoreTotal++;
    xScore.innerText = xScoreTotal;
    localStorage.setItem("xScore", xScoreTotal);
  }

  completeBox.style.display = "flex";

  isGameComplete = true;
}

function runNextGame() {
  completeBox.style.display = "none";
  resetGame();
}

function resetScores() {
  localStorage.setItem("xScore", 0);
  localStorage.setItem("oScore", 0);
  xScoreTotal = 0;
  oScoreTotal = 0;
  xScore.innerText = 0;
  oScore.innerText = 0;
}

box1.addEventListener("click", symbolFunction);
box2.addEventListener("click", symbolFunction);
box3.addEventListener("click", symbolFunction);
box4.addEventListener("click", symbolFunction);
box5.addEventListener("click", symbolFunction);
box6.addEventListener("click", symbolFunction);
box7.addEventListener("click", symbolFunction);
box8.addEventListener("click", symbolFunction);
box9.addEventListener("click", symbolFunction);
resetBtn.addEventListener("click", resetGame);
nextGame.addEventListener("click", runNextGame);
resetScore.addEventListener("click", resetScores);

xBtn.addEventListener("click", () => {
  counter = 0;
  turn.innerText = "X";
});
oBtn.addEventListener("click", () => {
  counter = 1;
  turn.innerText = "O";
});
