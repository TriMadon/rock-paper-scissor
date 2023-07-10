const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

function getComputerChoice() {
    let choices = [ROCK, PAPER, SCISSORS];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}