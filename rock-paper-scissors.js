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
    if (humanChoice === "rock" || "paper" || "scissors") {
      console.log(humanChoice);
      console.log(getComputerChoice());
      alert(computerChoice);
    } 

}
    
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

