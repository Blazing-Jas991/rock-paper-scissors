const rockButton = document.querySelector("#button1");
const paperButton = document.querySelector("#button2");
const scissorsButton = document.querySelector("#button3");
const container = document.querySelector("#container");
const containerTwo = document.querySelector(".container-two")
let span = document.querySelector("#input-text");
let cSpan = document.querySelector("#computer-text");
let resultSpan = document.querySelector("#round-winner");
let yourScore = document.querySelector("#yourScore");
let comScore = document.querySelector("#comScore");
let scoreCard = document.querySelector("#scoreCard");
let humanScore = 0;
let computerScore = 0;
let clickCounter = 4;
let resetButton = document.createElement("button");

function getComputerChoice() {
const randomChoice = Math.ceil(Math.random() * 3);
let computerPick = "";
if (randomChoice === 1) {
    computerPick = "Rock";
    cSpan.textContent = "Computer Picked: " + computerPick;
    return computerPick;
} else if (randomChoice === 2) {
    computerPick = "Paper";
    cSpan.textContent = "Computer Picked: " + computerPick;
    return computerPick;
} else {
    computerPick = "Scissors";
    cSpan.textContent = "Computer Picked: " + computerPick;
    return computerPick;
};
};

rockButton.addEventListener("click", chooseRock);
function chooseRock() {
    span.textContent = "You picked: Rock";
    playGame();
    remainingMoves();
    comScore.textContent = "Computer Score: " + computerScore;
    yourScore.textContent = "Your Score: " + humanScore;
    clickCounter --;
};

paperButton.addEventListener("click", choosePaper);
function choosePaper() {
    span.textContent = "You picked: Paper";
    playGame();
    remainingMoves();
    comScore.textContent = "Computer Score: " + computerScore;
    yourScore.textContent = "Your Score: " + humanScore;
    clickCounter --;
};

scissorsButton.addEventListener("click", chooseScissors);
function chooseScissors() {
    span.textContent = "You picked: Scissors";
    playGame();
    remainingMoves();
    comScore.textContent = "Computer Score: " + computerScore;
    yourScore.textContent = "Your Score: " + humanScore;
    clickCounter --;
};

function playGame() {
    let computerChoice = getComputerChoice();
    comScore.innerText = "Computer Score: " + computerScore;
    yourScore.innerText = "Your Score: " + humanScore;
    if (computerChoice === "Rock" && span.textContent === "You picked: Rock") {
        resultSpan.innerText = "Tie";
    } else if (computerChoice === "Paper" && span.textContent === "You picked: Paper") {
        resultSpan.innerText = "Tie";
    } else if (computerChoice === "Scissors" && span.textContent === "You picked: Scissors") {
        resultSpan.innerText = "Tie";
    } else if (computerChoice === "Rock" && span.textContent === "You picked: Scissors") {
        resultSpan.innerText = " Computer won, Rock crushes Scissors";
        computerScore++;
        comScore.innerText = "Computer Score: " + computerScore;
    } else if(computerChoice === "Paper" && span.textContent === "You picked: Scissors") {
        resultSpan.innerText = "You won, Scissors cuts Paper";
        humanScore++;
        yourScore.innerText = "Your Score: " + humanScore;
    } else if (computerChoice === "Scissors" && span.textContent === "You picked: Paper") {
        resultSpan.innerText = " Computer won, Scissors cuts Paper";
        computerScore++;
        comScore.innerText = "Computer Score: " + computerScore;
    } else if (computerChoice === "Rock" && span.textContent === "You picked: Paper") {
        resultSpan.innerText = "You won, Paper covers Rock";
        humanScore++;
        yourScore.innerText = "Your Score: " + humanScore;
    } else if (computerChoice === "Paper" && span.textContent === "You picked: Rock") {
        resultSpan.innerText = " Computer won, Paper covers Rock";
        computerScore++;
        comScore.innerText = "Computer Score: " + computerScore;
    } else if (computerChoice === "Scissors" && span.textContent === "You picked: Rock") {
        resultSpan.innerText = "You won, Rock crushes Scissors";
        humanScore++;
        yourScore.innerText = "Your Score: " + humanScore;
    } else {
        return;
    };
};

function remainingMoves() {
    if (clickCounter === 0 && computerScore < humanScore) {
        scoreCard.textContent = "After Five Rounds, You won the game: " + humanScore + " - " + computerScore;
        resetButton.textContent = "RESTART GAME";
        containerTwo.appendChild(resetButton);
        resetButton.disabled = false;
        scissorsButton.disabled = true;
        rockButton.disabled = true;
        paperButton.disabled = true;
        return;
    } else if (clickCounter === 0 && computerScore > humanScore) {
        scoreCard.textContent = "After Five Rounds, Computer won the game: " + computerScore + " - " + humanScore;
        resetButton.textContent = "RESTART GAME";
        containerTwo.appendChild(resetButton);
        resetButton.disabled = false;
        scissorsButton.disabled = true;
        rockButton.disabled = true;
        paperButton.disabled = true;
        return;
    } else if(clickCounter === 0 && computerScore === humanScore) {
        scoreCard.textContent = "After Five Rounds, There was a Tie, Please play another round";
        resetButton.textContent = "RESTART GAME";
        containerTwo.appendChild(resetButton);
        resetButton.disabled = false;
        scissorsButton.disabled = true;
        rockButton.disabled = true;
        paperButton.disabled = true;
        return;
    };
};

function reset() {
    span.innerText = "";
    cSpan.innerText = "";
    resultSpan.innerText = "";
    yourScore.innerText = "";
    comScore.innerText = "";
    scoreCard.innerText = "";
    humanScore = 0;
    computerScore = 0;
    clickCounter = 4;
    containerTwo.removeChild(resetButton);
    scissorsButton.disabled = false;
    rockButton.disabled = false;
    paperButton.disabled = false;
};
resetButton.addEventListener("click", reset);