const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const CHOICES = [ROCK, PAPER, SCISSORS];
let playerScore = 0,
	computerScore = 0;
let gameEnd = false;

function getComputerChoice() {
	let choice = CHOICES[Math.floor(Math.random() * 3)];
	return choice;
}

function playRound(playerSelection, computerSelection) {
	let pSel = capitalize(playerSelection);
	let comSel = computerSelection;
	let result;

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

const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");
const roundResult = document.querySelector(".results .round");
const pScore = document.querySelector(".player .score");
const comScore = document.querySelector(".computer .score");
const gameResult = document.querySelector(".results .game");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		let playerChoice = button.id;
		let computerChoice = getComputerChoice()
		let result = playRound(playerChoice, computerChoice);
		roundResult.textContent = result;
		roundResult.className = "round";
		if (result.includes("Win")) {
			roundResult.classList.add("roundWon");
		}
		if (result.includes("Lose")) {
			roundResult.classList.add("roundLost");
		}
		buttons.forEach((button) => button.className = "button");
		if (capitalize(playerChoice) === computerChoice) {
			button.classList.add("bothChosen");
		} else {
			button.classList.add("chosen");
		}
		buttons.forEach((button) => {
			if(capitalize(button.id) === computerChoice){
				button.classList.add("compChosen");
			}
		})
		updateScore(result);
	});
});

function updateScore(result) {
	if (gameEnd) {
		resetGame();
		return;
	}
	playerScore += result.includes("Win") ? 1 : 0;
	computerScore += result.includes("Lose") ? 1 : 0;
	pScore.textContent = playerScore;
	comScore.textContent = computerScore;
	if (playerScore === 5) {
		gameResult.textContent =
			"You won the game! click any button to restart.";
		body.classList.add("gameWon");
	}
	if (computerScore === 5) {
		gameResult.textContent =
			"You lost the game! click any button to restart.";
		body.classList.add("gameLost");
	}
	if (playerScore === 5 || computerScore === 5) {
		resetScores();
		gameEnd = true;
	}
}

function resetGame() {
	body.className = "";
	gameResult.textContent = "";
	pScore.textContent = "";
	comScore.textContent = "";
	roundResult.textContent = "";
	gameEnd = false;
}

function resetScores() {
	playerScore = 0;
	computerScore = 0;
}
