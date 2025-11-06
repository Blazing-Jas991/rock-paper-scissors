function getComputerChoice() {
  const randomChoice = Math.ceil(Math.random() * 3);

  if (randomChoice === 1) {
    return "rock";

  }else if (randomChoice === 2) {
    return "paper";

  }else {
    return "scissors";
  };
};

let yourChoice = "";
yourChoice.textContent = "";

function getHumanChoice() {
  let inputArea = document.createElement("input");

  let userInput = prompt("Please enter your option:");
  userInput.toLowerCase();
  if (userInput === null) { 
    return;

  } else if (userInput === "rock") {
    yourChoice.textContent = "Rock";
    console.log("rock");

  } else if (userInput === "paper") {
    yourChoice.textContent = "Paper";
    console.log("paper");

  } else if (userInput === "scissors") {
    yourChoice.textContent = "Scissors";
    console.log("scissors");

  } else {
    return '';
  };
};


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
      console.log("There is a Tie, Try Again");

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      yourChoice.textContent = "Rock";
      console.log("You Win, Rock Crushes Scissors!");
      humanScore++;

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      yourChoice.textContent = "Scissors";
      console.log("You Win, Scissors Cuts Paper");
      humanScore++;

    } else if (humanChoice === "paper" && computerChoice === "rock") {
      yourChoice.textContent = "Paper";
      console.log("You Win, Paper covers Rock");
      humanScore++;

    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      yourChoice.textContent = "Scissors";
      console.log("Computer Wins, Rock Crushes Scissors");
      computerScore++;

    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      yourChoice.textContent = "Paper";
      console.log("Computer Wins, Scissors Cuts Paper");
      computerScore++;

    } else if (computerChoice === "paper" && humanChoice === "rock") {
      yourChoice.textContent = "Rock";
      console.log("Computer Wins, Paper Covers Rock");
      computerScore++;

    } else {
      console.log("Try Again, that's not a valid option");
    }
    
    console.log('You Chose: ' + humanChoice);
    console.log('Computer Chose: ' + computerChoice);
    console.log('Your Score: ' + humanScore);
    console.log("Computer's Score: " + computerScore);

};   

function playGame() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  const diff = computerScore-humanScore;
  
  if (computerScore > humanScore) {
    alert("Computer Won");
  } else {
    alert("You Won");
  }
    
};

playGame();

