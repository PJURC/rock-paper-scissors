// Rock Paper Scissors game

// Track the score
let playerScore = 0;
let computerScore = 0;

// Buttons
const rps_buttons = document.querySelectorAll('.rps');

// Result fields
const player_score = document.querySelector('#player-score');
const computer_score = document.querySelector('#computer-score');
const game_outcome = document.querySelector('#outcome');

// Return 'Rock', 'Paper' or 'Scissors'
function getComputerChoice () {
    const choice_list = ['Rock', 'Paper', 'Scissors'];
    let choice = choice_list[Math.floor(Math.random() * choice_list.length)];
    return choice.toLowerCase();
};

// Add the event listener for each button
rps_buttons.forEach((rps_button) => {
    rps_button.addEventListener('click', () => {
        // Alert the user if game has ended
        if (playerScore >= 5 || computerScore >= 5) { 
            alert('This match has concluded. Refresh the page to play again!');
            return;
        };

        // Store the Player Choice
        playerSelection = rps_button.value;

        // Initiate Computer Choice
        computerSelection = getComputerChoice();

        // Play a round
        game_outcome.textContent = playRound(playerSelection, computerSelection);

        // Update the scoreboard
        player_score.textContent = playerScore;
        computer_score.textContent = computerScore;

        // Check if anyone won
        if (playerScore == 5) {
            game_outcome.textContent = "Congratulations! You have won!";
        } else if (computerScore == 5) {
            game_outcome.textContent = "The Computer won! Better luck next time!";
        };
    });
});

// Play the round function
function playRound(playerSelection, computerSelection) {
    console.log("The player selected " + playerSelection);
    console.log("The computer selected " + computerSelection);
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return("Both chose Rock! It's a tie!");
        } else if (computerSelection == 'paper') {
            computerScore++;
            return("Round lost! Paper beats Rock!");
        } else {
            playerScore++;
            return("Round won! Rock beats Scissors!");
        };
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore++;
            return("Round won! Paper beats Rock!");
        } else if (computerSelection == 'paper') {
            return("Both chose Paper! It's a tie!");
        } else {
            computerScore++;
            return("Round Lost! Scissors beat Paper!");
        };
    } else {
        if (computerSelection == 'rock') {
            computerScore++;
            return("Round Lost! Rock beats Scissors!");
        } else if (computerSelection == 'paper') {
            playerScore++;
            return("Round won! Scissors beat Paper!");
        } else {
            return("Both chose Scissors! It's a tie!");
        };
    };
};