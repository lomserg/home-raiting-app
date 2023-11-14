class Player {
  constructor(name) {
    this.name = name || "player";
    this.score = 10;
  }
  addScore(score) {
    this.score = this.score + score;
  }
  removeScore(score) {
    this.score = this.score - score;
  }
}

let serg = new Player("serg");
const danyil = new Player("danyil");

const btns = document.querySelectorAll(".btn");
const scorePlayer2 = document.querySelector("#score-player2");
const scorePlayer1 = document.querySelector("#score-player1");
const raitingDniyl = document.querySelector("#score-player2");
const turtSerg = document.querySelector(".turtle-img-serg");
const turtDanyil = document.querySelector(".turtle-img-danyil");

let sergScore;
let danyilScore;
// btn serg
const addScoreSerg = document.querySelector("#add-score-player2");
const removeScoreSerg = document.querySelector("#remove-score-player2");

function init() {
  let player2Score = JSON.parse(window.localStorage.getItem("sergScore"));
  let player1Score = JSON.parse(window.localStorage.getItem("danyilScore"));
  player2Score = JSON.parse(player2Score);
  serg.score = player2Score.score;
  player1Score = JSON.parse(player1Score);
  danyil.score = player1Score.score;
  turtSerg.setAttribute("style", ` --x: ${serg.score * 10}px;`);
  turtDanyil.setAttribute("style", ` --x: ${serg.score * 10}px;`);
  scorePlayer2.textContent = serg.score;
  scorePlayer1.textContent = danyil.score;
}

init();
function hahdleRaiting(e) {
  console.log(e.target.id.includes("add") && e.target.id.includes("player1"));
  if (e.target.id.includes("add") && e.target.id.includes("player2")) {
    serg.addScore(1);
    scorePlayer2.textContent = serg.score;
    sergScore = JSON.stringify(serg);
    window.localStorage.setItem("sergScore", JSON.stringify(sergScore));
    turtSerg.setAttribute("style", ` --x: ${serg.score * 10}px;`);
  } else if (e.target.id.includes("add") && e.target.id.includes("player1")) {
    danyil.addScore(1);
    scorePlayer1.textContent = danyil.score;
    danyilScore = JSON.stringify(danyil);
    window.localStorage.setItem("danyilScore", JSON.stringify(danyilScore));
    turtDanyil.setAttribute("style", ` --x: ${danyil.score * 10}px;`);
  } else if (
    e.target.id.includes("remove") &&
    e.target.id.includes("player1")
  ) {
    danyil.removeScore(1);
    scorePlayer1.textContent = danyil.score;
    danyilScore = JSON.stringify(danyil);
    window.localStorage.setItem("danyilScore", JSON.stringify(danyilScore));
    turtDanyil.setAttribute("style", ` --x: ${danyil.score * 10}px;`);
  } else if (
    e.target.id.includes("remove") &&
    e.target.id.includes("player2")
  ) {
    serg.removeScore(1);
    scorePlayer2.textContent = serg.score;
    sergScore = JSON.stringify(serg);
    window.localStorage.setItem("sergScore", JSON.stringify(sergScore));
    turtSerg.setAttribute("style", ` --x: ${serg.score * 10}px;`);
  }
}

// addScoreSerg.addEventListener("click", addRaiting);

// removeScoreSerg.addEventListener("click", () => {
//   serg.removeScore(1);
//   scorePlayer2.textContent = serg.score;
//   sergScore = JSON.stringify(serg);
//   console.log(sergScore);
//   window.localStorage.setItem("sergScore", JSON.stringify(sergScore));
//   turtSerg.setAttribute("style", ` --x: ${serg.score * 10}px;`);
// });

// console.log(serg.score);

// console.log(JSON.parse(sergScore));

btns.forEach((btn) => {
  btn.addEventListener("click", hahdleRaiting);
});
