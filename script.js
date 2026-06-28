const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");
const container = document.querySelector("#buttons-container");
const textsContainer = document.querySelector(".texts-container");
textsContainer.style.display = "none";
const humanSelectText = document.querySelector("#input-text");
const scoreCardContainer = document.querySelector(".score-card-container");
scoreCardContainer.style.display = "none";
let comSelectText = document.querySelector("#computer-text");
let roundWinnerText = document.querySelector("#round-winner");
let yourScore = document.querySelector("#yourScore");
let comScore = document.querySelector("#comScore");
let scoreCard = document.querySelector("#scoreCard");
let humanScore = 0;
let computerScore = 0;
let clickCounter = 5;
let resetButton = document.createElement("button");
resetButton.classList.add("reset-button");

function getComputerChoice() {
  const randomChoice = Math.ceil(Math.random() * 3);
  let computerPick = "";
  if (randomChoice === 1) {
    computerPick = "Rock";
    document.getElementById("hand-cpu").textContent = "🪨";
    comSelectText.textContent = "Com Picked: " + computerPick;
    return computerPick;
  } else if (randomChoice === 2) {
    computerPick = "Paper";
    document.getElementById("hand-cpu").textContent = "📄";
    comSelectText.textContent = "Com Picked: " + computerPick;
    return computerPick;
  } else {
    document.getElementById("hand-cpu").textContent = "✂️";
    computerPick = "Scissors";
    comSelectText.textContent = "Com Picked: " + computerPick;
    return computerPick;
  }
}

rockButton.addEventListener("click", chooseRock);
function chooseRock() {
  document.getElementById("hand-you").textContent = "🪨";
  humanSelectText.textContent = "You picked: Rock";
  playGame();
  remainingMoves();
  comScore.textContent = computerScore;
  yourScore.textContent = humanScore;
  clickCounter--;
  textsContainer.style.display = "flex";
}

paperButton.addEventListener("click", choosePaper);
function choosePaper() {
  document.getElementById("hand-you").textContent = "📄";
  humanSelectText.textContent = "You picked: Paper";
  playGame();
  remainingMoves();
  comScore.textContent = computerScore;
  yourScore.textContent = humanScore;
  clickCounter--;
  textsContainer.style.display = "flex";
}

scissorsButton.addEventListener("click", chooseScissors);
function chooseScissors() {
  document.getElementById("hand-you").textContent = "✂️";
  humanSelectText.textContent = "You picked: Scissors";
  playGame();
  remainingMoves();
  comScore.textContent = computerScore;
  yourScore.textContent = humanScore;
  clickCounter--;
  textsContainer.style.display = "flex";
}

function playGame() {
  let computerChoice = getComputerChoice();
  comScore.innerText = computerScore;
  yourScore.innerText = humanScore;
  if (
    computerChoice === "Rock" &&
    humanSelectText.textContent === "You picked: Rock"
  ) {
    roundWinnerText.innerText = "Tie";
  } else if (
    computerChoice === "Paper" &&
    humanSelectText.textContent === "You picked: Paper"
  ) {
    roundWinnerText.innerText = "Tie";
  } else if (
    computerChoice === "Scissors" &&
    humanSelectText.textContent === "You picked: Scissors"
  ) {
    roundWinnerText.innerText = "Tie";
  } else if (
    computerChoice === "Rock" &&
    humanSelectText.textContent === "You picked: Scissors"
  ) {
    roundWinnerText.innerText = " Computer won, Rock crushes Scissors";
    computerScore++;
    comScore.innerText = "Computer Score: " + computerScore;
  } else if (
    computerChoice === "Paper" &&
    humanSelectText.textContent === "You picked: Scissors"
  ) {
    roundWinnerText.innerText = "You won, Scissors cuts Paper";
    humanScore++;
    yourScore.innerText = "Your Score: " + humanScore;
  } else if (
    computerChoice === "Scissors" &&
    humanSelectText.textContent === "You picked: Paper"
  ) {
    roundWinnerText.innerText = " Computer won, Scissors cuts Paper";
    computerScore++;
    comScore.innerText = "Computer Score: " + computerScore;
  } else if (
    computerChoice === "Rock" &&
    humanSelectText.textContent === "You picked: Paper"
  ) {
    roundWinnerText.innerText = "You won, Paper covers Rock";
    humanScore++;
    yourScore.innerText = "Your Score: " + humanScore;
  } else if (
    computerChoice === "Paper" &&
    humanSelectText.textContent === "You picked: Rock"
  ) {
    roundWinnerText.innerText = " Computer won, Paper covers Rock";
    computerScore++;
    comScore.innerText = "Computer Score: " + computerScore;
  } else if (
    computerChoice === "Scissors" &&
    humanSelectText.textContent === "You picked: Rock"
  ) {
    roundWinnerText.innerText = "You won, Rock crushes Scissors";
    humanScore++;
    yourScore.innerText = "Your Score: " + humanScore;
  } else {
    return;
  }
}

function remainingMoves() {
  if (humanScore === 3) {
    scoreCardContainer.style.display = "flex";
    scoreCard.textContent =
      "You won the match 🎉 (" + humanScore + " - " + computerScore + ")";
    anotherRound();
    return;
  }
  if (computerScore === 3) {
    scoreCardContainer.style.display = "flex";
    scoreCard.textContent =
      "Computer won the match (" + computerScore + " - " + humanScore + ")";
    anotherRound();
    return;
  }

  if (clickCounter === 0 && computerScore < humanScore) {
    scoreCardContainer.style.display = "flex";
    scoreCard.textContent =
      "After Five Rounds, You won the match 🎉: " +
      humanScore +
      " - " +
      computerScore;
    anotherRound();
    return;
  } else if (clickCounter === 0 && computerScore > humanScore) {
    scoreCardContainer.style.display = "flex";
    scoreCard.textContent =
      "After Five Rounds, Computer won the match: " +
      computerScore +
      " - " +
      humanScore;
    anotherRound();
    return;
  } else if (clickCounter === 0 && computerScore === humanScore) {
    scoreCardContainer.style.display = "flex";
    scoreCard.textContent = "After Five Rounds, There was a Tie";
    anotherRound();
    return;
  }
}

function anotherRound() {
  resetButton.textContent = "RESTART GAME";
  scoreCardContainer.appendChild(resetButton);
  resetButton.disabled = false;
  scissorsButton.disabled = true;
  rockButton.disabled = true;
  paperButton.disabled = true;
}

function reset() {
  humanSelectText.innerText = "";
  comSelectText.innerText = "";
  roundWinnerText.innerText = "";
  yourScore.innerText = "";
  comScore.innerText = "";
  scoreCard.innerText = "";
  humanScore = 0;
  computerScore = 0;
  clickCounter = 5;
  document.getElementById("hand-you").textContent = "🤜";
  document.getElementById("hand-cpu").textContent = "🤜";
  scoreCardContainer.removeChild(resetButton);
  scissorsButton.disabled = false;
  rockButton.disabled = false;
  paperButton.disabled = false;
  textsContainer.style.display = "none";
  scoreCardContainer.style.display = "none";
}
resetButton.addEventListener("click", reset);
