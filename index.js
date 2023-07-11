const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const CHOICES = [ROCK, PAPER, SCISSORS];

function getComputerChoice() {
  let choice = CHOICES[Math.floor(Math.random() * 3)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let pSel = capitalize(playerSelection);
  let comSel = computerSelection;
  let result;

  if (!CHOICES.includes(pSel)) {
    alert(`Invalid player input! "${pSel}" is not a valid RPS move.`);
    return;
  }

  if (pSel === comSel) {
    result = `It's a Tie! ${pSel} is tied against ${comSel}.`;
  } else if (
    (pSel === ROCK && comSel === SCISSORS) ||
    (pSel === PAPER && comSel === ROCK) ||
    (pSel === SCISSORS && comSel === PAPER)
  ) {
    result = `You Win! ${pSel} beats ${comSel}.`;
  } else {
    result = `You Lose! ${comSel} beats ${pSel}.`;
  }

  return result;
}

function capitalize(playerSelection) {
  return (
    playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase()
  );
}

function game() {
  let pcWins = 0,
    playerWins = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("What's your move?");
    let computerSelection = getComputerChoice();
    console.log(`Computer chooses ${computerSelection}`);
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    playerWins += roundResult.includes("Win") ? 1 : 0;
    pcWins += roundResult.includes("Lose") ? 1 : 0;
  }

  let gameResult =
    playerWins > pcWins
      ? "You won the game!"
      : playerWins < pcWins
      ? "You lost the game!"
      : "You are tied against the computer.";

  return gameResult + ` ${playerWins} to ${pcWins}.`;
}

console.log(game());
