const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let userScore = 0;
let computerScore = 0;

rock.addEventListener("click", (e) => {
    playRound(e.target.innerText, getComputerChoice())
})

paper.addEventListener("click", (e) => {
    playRound(e.target.innerText, getComputerChoice())
})

scissors.addEventListener("click", (e) => {
    playRound(e.target.innerText, getComputerChoice())
})

function renderResults() {
    const uResult = document.querySelector(".user-score");
    uResult.innerHTML = `The User Score is: ${userScore}`;

    const computerResult = document.querySelector(".computer-score");
    computerResult.innerHTML = `The Computer Score is: ${computerScore}`;
}

renderResults();

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
            winnerDisplay(' Player wins! ');
            userScore++;
            renderResults();
            if (userScore == 5) {
                clearDisplay();
                winnerDisplay(" Player wins the game! ");
                resetScore();
            }
        } else if (playerSelection == computerSelection) {
            winnerDisplay(' Draw ');
        } else {
            winnerDisplay(" Computer Wins! ");
            computerScore++;
            renderResults();
            if (computerScore == 5) {
                clearDisplay();
                winnerDisplay(" Computer Wins the game! ");
                resetScore();
            }
    }
}

function winnerDisplay(msg) {
    const results = document.querySelector('.results-display');
    results.append(msg)
}

function clearDisplay() {
    const results = document.querySelector('.results-display');
    results.innerHTML = ''
}

function resetScore() {
    userScore = 0;
    computerScore = 0;
}
