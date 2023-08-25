let secretNumber = Math.trunc(Math.random() * 20);
console.log(secretNumber);

let score = 20;
let highScore = 0;

// function for displaying message
let displayMessage = (msg) => {
    document.getElementById("message").textContent = msg;
};

// function for displaying score
let displayScore = (score) => {
    document.querySelector(".score").textContent = score
};




document.getElementById("check").addEventListener("click", () => {
  const guess = Number(document.getElementById("guess").value);

  if (!guess) {
    displayMessage("🚫 No number!");
  } else if (guess === secretNumber) {
    displayMessage("Congratulations! You Won the Game 🏆");
    document.getElementsByClassName("number")[0].textContent = secretNumber;

    // styling
    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too Low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("😢😭 You Lost the Game! 😢😭");
      displayScore(0);
    }
  }
});

// Again button Functionality

document.getElementById("again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20);
  score = 20;
  document.getElementById("guess").value = "";
  displayScore(score);
  displayMessage("Start guessing...");
  document.getElementsByClassName("number")[0].textContent = "?";

  // styling
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
