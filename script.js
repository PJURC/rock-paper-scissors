// Rock Paper Scissors game

// A function to return 'Rock', 'Paper' or 'Scissors'
function getComputerChoice () {
    const choice_list = ['Rock', 'Paper', 'Scissors'];
    let choice = choice_list[Math.floor(Math.random() * choice_list.length)];
    return choice.toLowerCase();
}

// Play the round function
function playRound(playerSelection, computerSelection) {
    console.log("The player selected " + playerSelection);
    console.log("The computer selected " + computerSelection);
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return("Both chose Rock! It's a tie!");
        } else if (computerSelection == 'paper') {
            computerScore++;
            return("You Lose! Paper beats Rock!");
        } else {
            playerScore++;
            return("You Win! Rock beats Scissors!");
        };
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore++;
            return("You Win! Paper beats Rock!");
        } else if (computerSelection == 'paper') {
            return("Both chose Paper! It's a tie!");
        } else {
            computerScore++;
            return("You Lose! Scissors beat Paper!");
        };
    } else {
        if (computerSelection == 'rock') {
            computerScore++;
            return("You Lose! Rock beats Scissors!");
        } else if (computerSelection == 'paper') {
            playerScore++;
            return("You Win! Scissors beat Paper!");
        } else {
            return("Both chose Scissors! It's a tie!");
        };
    }
}

// Play a 5 round game
function game () {
    for (let i = 0; i < 5; i++) {
        // Receive input from the player
        let playerSelection = getPlayerChoice();

        // Receive input from the computer
        let computerSelection = getComputerChoice();

        // Play a round
        console.log(playRound(playerSelection, computerSelection));

        console.log("Round " + (i + 1).toString() + " complete.");
        console.log("Player score: " + playerScore.toString());
        console.log("Computer score: " + computerScore.toString());
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You have won!");
    } else if (playerScore < computerScore) {
        console.log("You have lost! Better luck next time!");
    } else {
        console.log("It's a tie! Let's play again!");
    }
    console.log("The final score is " + playerScore.toString() + ":" + computerScore.toString())
}

// Receive input from the player
function getPlayerChoice () {
    let playerSelection = ''
    while (true) {
        playerSelection = prompt("Choose Rock, Paper or Scissors: ").toLowerCase();
        if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
            alert("Incorrect input. Please try again.");
        } else {
            return playerSelection;
        }
    }
}

// Play the game for a total of 5 rounds
let playerScore = 0;
let computerScore = 0;
game();

