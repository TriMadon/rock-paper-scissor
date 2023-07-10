const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const choices = [ROCK, PAPER, SCISSORS];

function getComputerChoice() {
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}

function playRound(playerSelection, ComputerSelection) {
  let pSel = capitalize(playerSelection);
  let comSel = ComputerSelection;
  let result;

  if (!choices.includes(pSel)) {
    alert(`Invalid player input! "${pSel}" is not a valid RPS move.`);
    return;
  }

  if (pSel === comSel) {
    result = `It's a tie! ${pSel} is tied against ${comSel}.`;
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

