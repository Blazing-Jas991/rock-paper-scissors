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

console.log(getComputerChoice());

function getHumanChoice () {
  const yourPick = prompt("Please enter your option:");

  if (yourPick === "rock") {
    return "rock";

  } else if (yourPick === "paper") {
    return "paper";

  } else {
    return "scissors";
  }
}

console.log(getHumanChoice());