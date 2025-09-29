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
      alert("There is a Tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      alert("You Win, Rock Crushes Scissors");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      alert("You Win, Scissors Cuts Paper");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      alert("You Win, Paper covers Rock");
      humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      alert("Computer Wins, Rock Crushes Scissors");
      computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      alert("Compuer Wins, Scissors Cuts Paper");
      computerScore++;
    } else {
      alert("Computer Wins, Paper Covers Rock");
      computerScore++;
    }
    
    console.log(humanChoice);
    console.log(computerChoice);
    console.log(humanScore);
    console.log(computerScore);

}   

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
  let (i = 0, )
}

