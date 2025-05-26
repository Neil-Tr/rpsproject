
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;
const round = document.querySelector(".round");
//(1) function to get the computer choice from math random
function getComputerChoice() {
    let r = Math.random();
    let computerSelection;
    if (r < 1/3) {
        computerSelection = "rock";
    }
    if (r>=1/3 && r<2/3) {
        computerSelection = "paper";
    }
    if (r>= 2/3) {
        computerSelection = "scissors";
    }
    return computerSelection;
}

//(2) function to compare human choice and computer choice
function playRound() {    
let computerChoice = getComputerChoice();
let humanChoice = humanSelection;
if (humanChoice === 'rock') {
    if (computerChoice === 'rock') {
        round.textContent = 'Tie! We both got Rock!';
    }
    if (computerChoice === 'paper') {
        round.textContent = 'You lost! I got Paper, and Paper beats Rock!';
        computerScore += 1;
    }
    if (computerChoice === 'scissors') {
        round.textContent = 'You won! I got Scissors, and Rock beats Scissors!';
        humanScore += 1;
    }
}

if (humanChoice === 'paper') {
    if (computerChoice == 'paper') {
        round.textContent = 'Tie! We both got Paper!';
    }
    if (computerChoice === 'scissors') {
        round.textContent = 'You lost! I got Scissors, and Scissors beats Paper!';
        computerScore += 1;
    }
    if (computerChoice === 'rock') {
        round.textContent = 'You won! I got Rock, and Paper beats Rock!';
        humanScore += 1;
    }
    }


if (humanChoice === 'scissors') {
    if (computerChoice == 'scissors') {
        round.textContent = 'Tie! We both got Scissors!';
    }
    if (computerChoice == 'rock') {
        round.textContent = 'You lost! I got Rock, and Rock beats Scissors!';
        computerScore += 1;
    }
    if (computerChoice == 'paper') {
        round.textContent = 'You won! I got Paper, and Scissors beats Paper!';
        humanScore += 1;
    }
    }

}

//(3) call the functions, check anyone reachs 5 wins, and anounce final result
let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
    button.addEventListener("click", function() {
        humanSelection = this.textContent.toLowerCase();
        playRound();
    const div = document.querySelector(".score");
    var replay = document.querySelector(".replay");
    if (humanScore < 5 && computerScore < 5) {
    let currentScore = "Current score: " + humanScore + " - " + computerScore;
    div.textContent = currentScore;
    }
    if (humanScore >=5) {
        div.textContent = 'You WON! You are the Rock Paper Scissors Champion!'
        humanScore = 0;
        computerScore = 0;
        let button = document.createElement('button');
        replay.appendChild(button);
        button.textContent = 'Replay';
        button.addEventListener("click", function() {
            replay.removeChild(button);
            div.textContent = '';
            round.textContent = '';
        }
        )
    }
    if (computerScore>=5) {
        div.textContent = 'You LOST! Do you want to try again?'
        humanScore = 0;
        computerScore = 0;
         let button = document.createElement('button');
        replay.appendChild(button);
        button.textContent = 'Replay';
        button.addEventListener("click", function() {
            replay.removeChild(button);
            div.textContent = '';
            round.textContent = '';
        })
    }
    })
    });










