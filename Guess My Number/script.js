let secretNumber = Math.trunc(Math.random() * 20);
console.log(secretNumber);


let score = 20;
let highScore = 0;

document.getElementById("check").addEventListener("click", () => {
  const guess = Number(document.getElementById("guess").value);
  if (!guess) {
    document.getElementById("message").textContent = "🚫 No number!";
} else if (guess === secretNumber) {
    document.getElementById("message").textContent = "Congratulations! You Won the Game 🏆";
    document.getElementsByClassName("number")[0].textContent = secretNumber;

    // styling
    document.querySelector('body').style.backgroundColor = "#60B347"
    document.querySelector('.number').style.width = '30rem'


    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }



    
  }
  else if (guess > secretNumber) {
    if (score > 1) {
      document.getElementById("message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.getElementById("message").textContent =
        "😢😭 You Lost the Game! 😢😭";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.getElementById("message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.getElementById("message").textContent =
        "😢😭 You Lost the Game! 😢😭";
      document.querySelector(".score").textContent = 0;
    }
  }
});



// Again button Functionality

document.getElementById('again').addEventListener('click',()=>{

  secretNumber = Math.trunc(Math.random() * 20);
  score = 20;
  document.getElementById("guess").value = '';
  document.querySelector(".score").textContent = score;
  document.getElementById("message").textContent = "Start guessing...";
  document.getElementsByClassName("number")[0].textContent = '?';

  // styling
  document.querySelector('body').style.backgroundColor = "#222"
  document.querySelector('.number').style.width = '15rem'

})