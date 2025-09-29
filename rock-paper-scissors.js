alert("We Are About To Play Rock, Paper, Scissors!");

function getComputerChoice() {
    const randomChoice = Math.ceil(Math.random() * 3);

    if (randomChoice === 1) {
        return "rock";

    }  else if (randomChoice === 2) {
       return "paper";

    }  else {
        return "scissors";
    }
}

function getHumanChoice() {
  let yourChoice = prompt("Please enter your option:");
  yourChoice = yourChoice.toLowerCase();

  if (yourChoice === "rock") {
    return "rock";

  } else if (yourChoice === "paper") {
    return "paper";

  } else {
    return "scissors";
  }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("There is a Tie, Try Again");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You Win, Rock Crushes Scissors!");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You Win, Scissors Cuts Paper");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You Win, Paper covers Rock");
      humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      console.log("Computer Wins, Rock Crushes Scissors");
      computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      console.log("Compuer Wins, Scissors Cuts Paper");
      computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      console.log("Computer Wins, Paper Covers Rock");
      computerScore++;
    } else {
      console.log("Try Again, that's not a valid option");
    }
    
    console.log('You Chose: ' + humanChoice);
    console.log('Computer Chose: ' + computerChoice);
    console.log('Your Score: ' + humanScore);
    console.log("Computer's Score: " + computerScore);

}   

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    const diff = computerScore-humanScore;
  }
    if (computerScore > humanScore) {
      alert("Computer Won");
    } else {
      alert("You Won");
    }
    
}

playGame();
