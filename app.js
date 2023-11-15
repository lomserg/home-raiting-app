function Player(name, player) {
  if (!(player instanceof Element)) {
    throw new Error("No slider passed in");
  }
  this.name = name || "player";
  this.player = player;
  this.score = parseInt(player.querySelector(".score").innerHTML) || 0;
  this.turtle = player.querySelector(".turtle-img");
  const addScoreButton = player.querySelector(".add-score");
  const removeScoreButton = player.querySelector(".remove-score");

  addScoreButton.addEventListener("click", () => {
    this.addScore();
  });

  removeScoreButton.addEventListener("click", () => {
    this.removeScore();
  });

  this.init();
}

Player.prototype.addScore = function () {
  // Increment the score
  this.score++;
  // Update the HTML to reflect the new score
  this.player.querySelector(".score").innerHTML = this.score;
};

Player.prototype.removeScore = function () {
  // Decrement the score (you might want to add some validation to avoid negative scores)
  this.score--;
  // Update the HTML to reflect the new score
  this.player.querySelector(".score").innerHTML = this.score;
};

Player.prototype.init = function () {
  let playerScore = JSON.parse(
    window.localStorage.getItem(`${this.name}Score`)
  );
  playerScore = JSON.parse(playerScore);
  console.log(playerScore);
  this.score = playerScore.score;
  this.player.querySelector(".score").innerHTML = this.score;
  this.turtle.setAttribute("style", ` --x: ${this.score * 10}px;`);
};

const serg = new Player("serg", document.querySelector("#player1"));
const danyil = new Player("danyil", document.querySelector("#player2"));

console.log(serg);
console.log(danyil);
// const btns = document.querySelectorAll(".btn");
// const scorePlayer2 = document.querySelector("#score-player2");
// const scorePlayer1 = document.querySelector("#score-player1");
// const raitingDniyl = document.querySelector("#score-player2");
// const turtSerg = document.querySelector(".turtle-img-serg");
// const turtDanyil = document.querySelector(".turtle-img-danyil");

// let sergScore;
// let danyilScore;
// btn serg
function Game() {
  const addScoreSerg = document.querySelector("#add-score-player2");
  const removeScoreSerg = document.querySelector("#remove-score-player2");
}

// function init() {
//   let player2Score = JSON.parse(window.localStorage.getItem("sergScore"));
//   let player1Score = JSON.parse(window.localStorage.getItem("danyilScore"));
//   player2Score = JSON.parse(player2Score);
//   serg.score = player2Score.score;
//   player1Score = JSON.parse(player1Score);
//   danyil.score = player1Score.score;
//   turtSerg.setAttribute("style", ` --x: ${serg.score * 10}px;`);
//   turtDanyil.setAttribute("style", ` --x: ${serg.score * 10}px;`);
//   scorePlayer2.textContent = serg.score;
//   scorePlayer1.textContent = danyil.score;
// }

// init();
// function hahdleRaiting(e) {
//   console.log(e.target.id.includes("add") && e.target.id.includes("player1"));
//   if (e.target.id.includes("add") && e.target.id.includes("player2")) {
//     serg.addScore(1);
//     scorePlayer2.textContent = serg.score;
//     sergScore = JSON.stringify(serg);
//     window.localStorage.setItem("sergScore", JSON.stringify(sergScore));
//     turtSerg.setAttribute("style", ` --x: ${serg.score * 10}px;`);
//   } else if (e.target.id.includes("add") && e.target.id.includes("player1")) {
//     danyil.addScore(1);
//     scorePlayer1.textContent = danyil.score;
//     danyilScore = JSON.stringify(danyil);
//     window.localStorage.setItem("danyilScore", JSON.stringify(danyilScore));
//     turtDanyil.setAttribute("style", ` --x: ${danyil.score * 10}px;`);
//   } else if (
//     e.target.id.includes("remove") &&
//     e.target.id.includes("player1")
//   ) {
//     danyil.removeScore(1);
//     scorePlayer1.textContent = danyil.score;
//     danyilScore = JSON.stringify(danyil);
//     window.localStorage.setItem("danyilScore", JSON.stringify(danyilScore));
//     turtDanyil.setAttribute("style", ` --x: ${danyil.score * 10}px;`);
//   } else if (
//     e.target.id.includes("remove") &&
//     e.target.id.includes("player2")
//   ) {
//     serg.removeScore(1);
//     scorePlayer2.textContent = serg.score;
//     sergScore = JSON.stringify(serg);
//     window.localStorage.setItem("sergScore", JSON.stringify(sergScore));
//     turtSerg.setAttribute("style", ` --x: ${serg.score * 10}px;`);
//   }
// }

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

// btns.forEach((btn) => {
//   btn.addEventListener("click", hahdleRaiting);
// });
