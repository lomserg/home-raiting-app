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
  // Save to local storage

  let scorePlayerObj = JSON.stringify({
    name: `${this.name}`,
    score: `${this.score}`,
  });

  console.log(scorePlayerObj);
  window.localStorage.setItem(
    `${this.name}Score`,
    JSON.stringify(scorePlayerObj)
  );
  this.init();
};

Player.prototype.removeScore = function () {
  // Decrement the score (you might want to add some validation to avoid negative scores)
  this.score--;
  // Update the HTML to reflect the new score
  this.player.querySelector(".score").innerHTML = this.score;
  let scorePlayerObj = JSON.stringify({
    name: `${this.name}`,
    score: `${this.score}`,
  });

  console.log(scorePlayerObj);
  window.localStorage.setItem(
    `${this.name}Score`,
    JSON.stringify(scorePlayerObj)
  );
  this.init();
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
