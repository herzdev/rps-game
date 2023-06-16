//Function getComputerChoice erstellen
//Output: Gibt per Zufallsprinzip einen von drei Spielmöglichkeiten zurück; Entweder Rock, Paper oder Scissor; Diese Auswahl ist für den Computer gedacht
//Problem: Wie erstelle ich die Randomisierung?
//Lösung:
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

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let randomNumber = Math.floor(Math.random() * 3); //Erstellt Zufallszahl zwischen 0 und 2 > 0,1 oder 2
    return choices[randomNumber];

}

// console.log(getComputerChoice()); //Call der Funktion getComputerChoice()


//Function playRound
//Gewünschter Output:
//Nimmt zwei Paramater entgegen: 1. Die Auswahl des Spielers, 2. Die Auswahl des Computers;
//Auf Basis der Auswahl beider Spieler wird anschließend der Gewinner ermittelt. Verliert der Spieler, so soll folgendes ausgegeben werden: "You Lose! X beats Y", wobei X und Y als Platzhalter für Rock/Paper/Scissor fungieren
//Der Input Spieler-seitig soll via prompt geschehen und muss im Zuge der Berechnung als nicht-case-sensitive behandelt werden: RocK, ROCK, rOcK = rock
//Lösungen:
//1. Erstelle eine Funktion namens playRound, welche zwei Paramter enthält: computerSelection, playerSelection
//computerSelection ist dabei eine Fallback-Function und bezieht sich auf die zuvor erstellte Funktion getComputerChoice
//playerSelection ist dabei ein einfacher String, beruhend auf den Eingaben des Users
//2. Erstelle winnerStatement Variable und überprüfe folgende Logiken, damit Gewinner euriert werden kann:
/*

WENN USER SCHERE AUSWÄHLT:
    SCHERE AUF SCHERE = UNENTSCHIEDEN
    SCHERE AUF STEIN = VERLOREN
    SCHERE AUF PAPIER = GEWONNEN
WENN USER STEIN AUSWÄHLT:
    STEIN SCHLÄGT SCHERE = GEWONNEN
    STEIN AUF STEIN = UNENTSCHIEDEN
    STEIN VERLIERT GEGEN PAPIER = VERLOREN
WENN USER PAPIER AUSWÄHLT:
    PAPIER VERLIERT GEGEN SCHERE = VERLOREN
    PAPIER SCHLÄGT STEIN = GEWONNEN
    PAPIER AUF PAPIER = UNENTSCHIEDEN
*/
//3. Return gewinnerStatement
//Um playerSelection zu erhalten, muss folgendes vor dem Funktionsaufruf implementiert werden:
    //1. Frage den Benutzer mittels prompt nach seiner Auswahl
    //2. Wenn die Auswahl eines der drei Möglichkeiten entspricht, kann die Funktion playRound aufgerufen werden, falls nicht, wird dem User mitgeteilt, dass seine Auswahl ungültig war und der prompt wird erneut getriggert

//


//Function game()



