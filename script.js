function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const choice = Math.ceil(Math.random() * options.length);
    switch (choice) {
        case 1:
            return options[0];
            break;
        case 2: 
            return options[1];
            break;
        case 3:
            return options[2];
            break;
    }
}

function playerChoice() {
    return prompt("What is your choice?")
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'rock') {
            return 'Player wins!'
        } else if (playerSelection == computerSelection) {
            return 'Draw!';
        } else {
            return 'Computer wins!';
    }
 }

function game() {
    for (let i = 0; i < 5; i++) { 
        console.log(playRound(playerChoice(), getComputerChoice()));
    }
}

game()