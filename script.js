//Function getComputerChoice erstellen
//Gewünschter Output: Gibt per Zufallsprinzip einen von drei Spielmöglichkeiten zurück; Entweder Rock, Paper oder Scissor; Diese Auswahl ist für den Computer gedacht

//Mögliche Probleme: Wie erstelle ich die Randomisierung?

//Algo:
    //0. Erstelle die Funktion Namens getComputerChoice(), welche 0 Parameter besitzt
    //1. Definiere die zur Verfügung stehenden Auswahlmöglichkeiten in einem Array
    //Beispiel: let choices = ["Rock", "Paper", Scissor]
    //2. Erstelle eine Zufallszahl zwischen 0 und 2
    //Beispiel: Math.random() erzeugt eine Zufallszahl zwischen 0 und 1 (0 inklusive, 1 exklusive; somit wäre 0,99 möglich, aber nicht 1); Multipliziert mit 3 erhalte ich eine Zahl zwischen 0 und 2.9*
    //Math.floor() rundet die von Math.random() generierte, zufällige Zahl auf die nächst niedrigere Zahl ab
    //Beispiel: 2.8765 > 2; somit bekomme ich nur ganze Zahlen zwischen 0 und 2 als möglichen Output
//3. Returne auf Basis der Zufallszahl das Element im Array choices mittels Index aus
//Beispiel: Zufallszahl = 1 --> choices[1], somit "Paper"
//Output: return choices[randomNumber]

//Erstellt eine Zufallszahl zwischen 0 und 2 und gibt darauf basierend entweder Rock, Paper oder Scissor zurück
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let randomNumber = Math.floor(Math.random() * 3); //Erstellt Zufallszahl zwischen 0 und 2 > 0,1 oder 2
    return choices[randomNumber].toLowerCase();
}

// console.log(getComputerChoice()); //Call der Funktion getComputerChoice()


//Function playRound

//Gewünschter Output:
//Nimmt zwei Parameter entgegen: 1. Die Auswahl des Spielers, 2. Die Auswahl des Computers;
//Auf Basis der Auswahl beider Spieler wird anschließend der Gewinner ermittelt. Verliert der Spieler, so soll folgendes ausgegeben werden: "You Lose! X beats Y", wobei X und Y als Platzhalter für Rock/Paper/Scissor fungieren
//Der Input Spieler-seitig soll via prompt geschehen und muss im Zuge der Berechnung als nicht-case-sensitive behandelt werden: RocK, ROCK, rOcK = rock

//Algo:
//1. Erstelle eine Funktion namens playRound, welche zwei Paramter enthält: computerSelection, playerSelection
//computerSelection ist dabei eine Callback-Function und bezieht sich auf die zuvor erstellte Funktion getComputerChoice
//playerSelection ist dabei ein einfacher String, beruhend auf den Eingaben des Users
//2. Erstelle winner Variable und überprüfe folgende Logiken, damit Gewinner euriert werden kann:
/*

WENN USER SCHERE AUSWÄHLT:
    SCHERE AUF SCHERE = UNENTSCHIEDEN //winner=draw
    SCHERE AUF STEIN = VERLOREN //winner=computer
    SCHERE AUF PAPIER = GEWONNEN //winner=player
WENN USER STEIN AUSWÄHLT:
    STEIN SCHLÄGT SCHERE = GEWONNEN //winner=player
    STEIN AUF STEIN = UNENTSCHIEDEN //winner=draw
    STEIN VERLIERT GEGEN PAPIER = VERLOREN //winner=computer
WENN USER PAPIER AUSWÄHLT:
    PAPIER VERLIERT GEGEN SCHERE = VERLOREN //winner=computer
    PAPIER SCHLÄGT STEIN = GEWONNEN //winner=player
    PAPIER AUF PAPIER = UNENTSCHIEDEN //winner=draw
*/
//3. Return gewinner
//Um playerSelection zu erhalten, muss folgendes vor dem Funktionsaufruf implementiert werden:
    //1. Frage den Benutzer mittels prompt nach seiner Auswahl
    //2. Wenn die Auswahl eines der drei Möglichkeiten entspricht, kann die Funktion playRound aufgerufen werden, falls nicht, wird dem User mitgeteilt, dass seine Auswahl ungültig war und der prompt wird erneut getriggert
    //3. Erstelle für die zuvor genannten Schritte (1. u. 2.) eine eigene Funktion (Merke: One Function > One Action; Im Zuge des Code-Refacturing dann erneut überprüfen, sobald Grund-Logik steht)

    
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
            break;
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


//Function game()
//Gewünschter Output:
//Spiele 5 Runden RPS, nach jeder Runde wird via Konsole der Gewinner ausgegeben; Am Ende der 5 gespielten Runden wird der finale Gewinner über alle 5 Runden ausgegeben. Ein Best of 3, bei dem derjenige der Gewinner ist, der als erstes 3 Runden gewonnen hat; (Bo3 Implementierung optional, da zuerst auch alle 5 Runden gespielt werden können und dann wird erst ausgewertet)

//Algo:
//Erstelle Function namens game(), ohne Parameter
//Erstelle zwei Variablen, die als Win-Counter für den Spieler als auch für den Computer fungieren
//Erstelle eine for-Loop, welche 5 Mal durchläuft; bei jedem Durchlauf invoke folgende Function: playRound()
//Nach jedem Durchlauf return-Wert (winner) von playRound() überprüft werden;
//Teile dem User mittels console.log mit, wer gewonnen hat (nach jeder Runde/jedem Schleifen-Durchlauf)
//Wenn player, dann playerWincounter += 1;
//Wenn computer, dann computerWincounter +=1;
//Wenn Draw, dann rechne keinem einen Win an;
//Entscheide wer gewonnen hat, anhand folgender Logik
//Wenn computerWinCounter > playerWinCounter = Computer ist Gewinner
//Wenn playerWinCounter > computerWinCounter = Player ist Gewinner
//Wenn computerWinCounter == playerWinCounter = Unentschieden

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