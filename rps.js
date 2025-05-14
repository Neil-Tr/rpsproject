

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

function getHumanChoice() {
 let humanSelection = prompt('Input your choice - Rock, Paper or Scissors');
    humanSelection = humanSelection.toLowerCase();
 return humanSelection;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
if (humanChoice == 'rock') {
    if (computerChoice == 'rock') {
        console.log('Tie! We both got Rock!');
    }
    if (computerChoice == 'paper') {
        console.log('You lost! Paper beats Rock!');
        computerScore += 1;
    }
    if (computerChoice == 'scissors') {
        console.log('You won! Rock beats Scissors!');
        humanScore += 1;
    }
}

if (humanChoice == 'paper') {
    if (computerChoice == 'paper') {
        console.log('Tie! We both got Paper!');
    }
    if (computerChoice == 'scissors') {
        console.log('You lost! Scissors beats Paper!');
        computerScore += 1;
    }
    if (computerChoice == 'rock') {
        console.log('You won! Paper beats Rock!');
        humanScore += 1;
    }
    }


if (humanChoice == 'scissors') {
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



let humanSelection;
let computerSelection;

function playGame() {
for (let round =1; round < 6; round++) {


humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection);
console.log(humanScore);
console.log(computerScore);

}

}

playGame();
let finalScore = "Final score: " + humanScore + " - " + computerScore;
console.log(finalScore);