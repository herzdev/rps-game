function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber].toLowerCase();
}
    
function getUserInput() {
    let userInput = prompt("Rock, Paper or Scissor? ").toLowerCase();
    
    if(userInput == "rock" || userInput == "paper" || userInput == "scissor") {
        return userInput;
    } else {
        alert("Sorry, but your input was not valid.");
        let again = prompt("Try again? (y/n) ");
        if(again == "y") {
            getUserInput();
        } else {
            alert("Have a nice one! Bye!");
        }
    }
}

function playRound(computerSelection, playerSelection) {

    let winner = "";

    if (playerSelection == "scissor") {
        if (computerSelection == "scissor") {
            winner = "draw";
        } else if (computerSelection == "rock") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissor") {
            winner = "computer";
        } else if (computerSelection == "rock") {
            winner = "player";
        } else {
            winner = "draw";
        }
    } else {
        if (playerSelection == "rock") {
            if (computerSelection == "scissor") {
                winner = "player";
            } else if (computerSelection == "rock") {
                winner = "draw";
            } else {
                winner = "computer";
            }
        }
    }
    return winner;
}

function game() {
    let playerWinCounter = 0;
    let computerWinCounter = 0;
    let result = "";

    for (let i = 0; i < 5; i++) {
        result = playRound(getComputerChoice(),getUserInput());
        if(result == "player") {
            console.log("Player hat diese Runde gewonnen.")
            playerWinCounter++;
        } else if (result == "computer") {
            console.log("Computer hat diese Runde gewonnen.");
            computerWinCounter++;
        } else {
            console.log("Diese Runde verlief unentschieden!");
        }
    }

    if (computerWinCounter > playerWinCounter) {
        console.log(`Finaler Score: Computer: ${computerWinCounter} vs. Player: ${playerWinCounter} Computer ist der finale Gewinner!`);
    } else if (playerWinCounter > computerWinCounter) {
        console.log(`Finaler Score: Computer: ${computerWinCounter} vs. Player: ${playerWinCounter} Player ist der finale Gewinner!`);
    } else {
        console.log(`Finaler Score: Computer: ${computerWinCounter} vs. Player: ${playerWinCounter} Unentschieden!`);
    }
}

game(); //Start RPS-Game