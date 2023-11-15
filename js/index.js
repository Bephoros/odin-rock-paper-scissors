function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choice 

    if(randomNumber == 1) {
        choice = 'Rock'
    } else if(randomNumber == 2) {
        choice = 'Paper'
    } else {
        choice = 'Scissors'
    }

    return choice.toLowerCase()
}

const randomComputerChoice = getComputerChoice()

let playerChoice = prompt("Choose Rock, Paper or Scissors").toLocaleLowerCase()

function playOneRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            if(computerSelection == 'rock') {
                return 'Draw!'
            } else if(computerSelection == 'paper') {
                return 'You lose, Paper wins over Rock!'
            } else {
                return 'You win, Rock wins over Scissors!'
            }
            break;

        case 'paper':
            if(computerSelection == 'paper') {
                return 'Draw!'
            } else if(computerSelection == 'scissors') {
                return 'You lose, Scissors win over Paper!'
            } else {
                return 'You win, Paper wins over Rock!'
            }
            break;

        case 'scissors':
            if(computerSelection == 'scissors') {
                return 'Draw!'
            } else if(computerSelection == 'rock') {
                return 'You lose, Rock wins over Scissors!'
            } else {
                return 'You win, Scissors wins over Paper!'
            }
            break;
    
        default:
            return 'Invalid selection. Please choose rock, paper, or scissors.';
            break;
    }
}

let outcome = playOneRound(playerChoice, randomComputerChoice)

console.log(outcome)