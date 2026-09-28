"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let countUp = "";
for (let number = 1; number <= 10; number++) {
    countUp += number + " "; 
}
printOut(countUp);
let countDown = "";
for (let number = 10; number >= 1; number--) {
    countDown += number + " ";
}
printOut(countDown);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numberToGuess = 45;
let guessedNumber = Math.floor(Math.random() * 60) + 1;
while (guessedNumber !== numberToGuess) {
    guessedNumber = Math.floor(Math.random() * 60) + 1;
}
printOut(guessedNumber);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numberToGuessLevelUp = 450000;
let guessedNumberLevelUp = Math.floor(Math.random() * 1000000) + 1;
let numberOfGuesses = 1;
let startTime = Date.now();
while (guessedNumberLevelUp !== numberToGuessLevelUp) {
    guessedNumberLevelUp = Math.floor(Math.random() * 1000000) +1;
    numberOfGuesses++; 
}
let endTime = Date.now();
let timeTaken = endTime - startTime;
printOut("Number: " + guessedNumberLevelUp);
printOut("Number of guesses: " + numberOfGuesses);
printOut("Milliseconds: " + timeTaken);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primeNumbers = "";
for (let number = 2; number < 200; number++) { 
    let divisor = 2;
    let isPrime = true; 
    while (divisor < number) { 
        if (number % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }
    if (isPrime) {
        primeNumbers += number + " ";
    }
}
printOut(primeNumbers);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
    let rowOutput = "";
    for (let column = 1; column <= 9; column++) {
        rowOutput += "K" + column + "R" + row + " ";    
    }
    printOut(rowOutput);
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let student = 1; student <= 5; student++) {
    let points = Math.floor(Math.random() * 236) + 1;
    let percentage = (points / 236) * 100;
    let grade; 
    if (percentage >= 89) {
        grade = "A";
    } else if (percentage >= 77) {
        grade = "B";
    } else if (percentage >= 65) {
        grade = "C";
    } else if (percentage >= 53) {
        grade = "D";
    } else if (percentage >= 41) {
        grade = "E";
    } else {
        grade = "F";
    }
    printOut("Student " + student + ": " + points + " points - Grade " + grade);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let straightThrows = 0;
let straightFound = false;
while (!straightFound) {
    straightThrows++;
    let dice = [];
    for (let die = 0; die < 6; die++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
    dice.sort();
    if ( 
        dice[0] === 1 &&
        dice[1] === 2 &&
        dice[2] === 3 &&
        dice[3] === 4 &&
        dice[4] === 5 &&
        dice[5] === 6 
    ) { 
        straightFound = true; 
    }
}
printOut("Full straight: " + straightThrows + " throws");
printOut(newLine);
let pairsThrows = 0;
let pairsFound = false; 
while (!pairsFound) { 
    pairsThrows++;
    let dice = [];
    for (let die = 0; die < 6; die++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
    dice.sort();
    if (
        dice[0] === dice[1] &&
        dice[2] === dice[3] &&
        dice[4] === dice[5] &&
        dice[0] === dice[2] &&
        dice[2] !== dice[4]
    ) {
        pairsFound = true;
    }
}
printOut("3 pairs: " + pairsThrows + " throws");
printOut(newLine);
let towerThrows = 0;
let towerFound = false;
while (!towerFound) {
    towerThrows++;
    let dice = [];
    for (let die = 0; die < 6; die++) {
        dice.push(Math.floor(Math.random() * 6) + 1); 
    }
    dice.sort();
    if ( 
        (dice[0] === dice[1] &&
        dice[2] === dice[3] &&
        dice[3] === dice[4] &&
        dice[4] === dice[5] &&
        dice[1] !== dice[2])
        ||
        (dice[0] === dice[1] &&
        dice[1] === dice[2] &&
        dice[2] === dice[3] &&
        dice[4] === dice[5] &&
        dice[3] !== dice[4])
    ) {
        towerFound = true;
    }
}
printOut("Tower: " + towerThrows + " throws");
printOut(newLine);
let yahtzeeThrows = 0;
let yahtzeeFound = false;
while ( !yahtzeeFound) {
    yahtzeeThrows++;
    let dice = [];
    for (let die = 0; die < 6; die++) {
        dice.push(Math.floor(Math.random() *6) + 1);
    }
    if ( 
        dice[0] === dice[1] &&
        dice[1] === dice[2] &&
        dice[2] === dice[3] &&
        dice[3] === dice[4] &&
        dice[4] === dice[5] 
    ) {
        yahtzeeFound = true;
    }
}
printOut("yahtzee: " + yahtzeeThrows + " throws");
printOut(newLine);
