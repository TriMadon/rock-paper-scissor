const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const CHOICES = [ROCK, PAPER, SCISSORS];
let playerScore = 0, computerScore = 0;

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
		playerSelection[0].toUpperCase() +
		playerSelection.substr(1).toLowerCase()
	);
}

const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector(".results .round");
const score = document.querySelector(".results .score");
const gameResult = document.querySelector(".results .game")

buttons.forEach(button => {
	button.addEventListener("click", () => {
		let result = playRound(button.id, getComputerChoice())
		roundResult.textContent = result;
		updateScore(result);
	})
})

function updateScore(result) {
	if (playerScore === 0 && computerScore === 0) {
		gameResult.textContent = "";
	}
	playerScore += result.includes("Win") ? 1 : 0;
	computerScore += result.includes("Lose") ? 1 : 0;
	score.textContent = `You: ${playerScore}  Computer: ${computerScore}`;
	if (playerScore === 5) {
		gameResult.textContent = "You won the game! game ends."
	}
	if (computerScore === 5) {
		gameResult.textContent = "You lost the game! game ends."
	}
	if (playerScore === 5 || computerScore === 5){
		resetScores();
	}
}

function resetScores() {
	playerScore = 0;
	computerScore = 0;
}
