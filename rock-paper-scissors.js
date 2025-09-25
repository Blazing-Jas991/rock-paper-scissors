function getComputerChoice() {
    const randomChoice = Math.random();

    if (randomChoice < 1 / 3) {
        return "rock";

    }  else if (randomChoice < 2 / 3) {
       return "paper";

    }  else {
        return "scissors";
    }
}

function getHumanChoice() {
  let yourPick = prompt("Please enter your option:");
  yourPick = yourPick.toLowerCase();
  if (yourPick === "rock") {
    return "rock";

  } else if (yourPick === "paper") {
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
      alert("Human Wins");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      alert("Human Wins");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      alert("Human Wins");
    } else {
      alert("Computer Wins");
    }
    console.log(humanChoice);
    console.log(computerChoice);
  
}    
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

