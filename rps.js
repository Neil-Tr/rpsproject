
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

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



let buttons = document.querySelectorAll("button");
 buttons.forEach(button => {
    button.addEventListener("click", function() {
        humanSelection = this.textContent.toLowerCase();
        playRound();
    let currentScore = "Current score: " + humanScore + " - " + computerScore;
    console.log(currentScore);
    });
 });






function playRound() {
let computerChoice = getComputerChoice();
let humanChoice = humanSelection;
if (humanChoice === 'rock') {
    if (computerChoice === 'rock') {
        console.log('Tie! We both got Rock!');
    }
    if (computerChoice === 'paper') {
        console.log('You lost! Paper beats Rock!');
        computerScore += 1;
    }
    if (computerChoice === 'scissors') {
        console.log('You won! Rock beats Scissors!');
        humanScore += 1;
    }
}

if (humanChoice === 'paper') {
    if (computerChoice == 'paper') {
        console.log('Tie! We both got Paper!');
    }
    if (computerChoice === 'scissors') {
        console.log('You lost! Scissors beats Paper!');
        computerScore += 1;
    }
    if (computerChoice === 'rock') {
        console.log('You won! Paper beats Rock!');
        humanScore += 1;
    }
    }


if (humanChoice === 'scissors') {
    if (computerChoice == 'scissors') {
        console.log('Tie! We both got Scissors!');
    }
    if (computerChoice == 'rock') {
        console.log('You lost! Rock beats Scissors!');
        computerScore += 1;
    }
    if (computerChoice == 'paper') {
        console.log('You won! Scissors beats Paper!');
        humanScore += 1;
    }
    }

}


