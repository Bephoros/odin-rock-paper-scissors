function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    return choices[randomNumber];
}

function playOneRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'draw';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
        const computerChoice = getComputerChoice();
        const result = playOneRound(playerChoice, computerChoice);

        if (result === 'win') {
            console.log(`Round ${i + 1}: You win! ${playerChoice} beats ${computerChoice}`);
            playerScore++;
        } else if (result === 'lose') {
            console.log(`Round ${i + 1}: You lose! ${computerChoice} beats ${playerChoice}`);
            computerScore++;
        } else {
            console.log(`Round ${i + 1}: It's a draw!`);
        }
    }

    if (playerScore > computerScore) {
        console.log(`Game over: You won! Score: ${playerScore} - ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Game over: You lost! Score: ${playerScore} - ${computerScore}`);
    } else {
        console.log(`Game over: It's a draw! Score: ${playerScore} - ${computerScore}`);
    }
}

game();
