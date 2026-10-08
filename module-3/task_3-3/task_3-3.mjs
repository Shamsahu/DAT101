"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodayDate() {
    const today = new Date();
    const norwegianDate = today.toLocaleDateString("nb-NO", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut(norwegianDate);
    return today;
}
printTodayDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateDaysUntilRelease(today) {
    const releaseDate = new Date(2025, 4, 14);
    const todayDate = Date.UTC(
         today.getFullYear(), 
         today.getMonth(), 
         today.getDate()
    );
    const releaseDateUTC = Date.UTC(2025, 4, 14);
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    
    const daysLeft = Math.round(
        (releaseDateUTC - todayDate) / millisecondsPerDay
    );
     return daysLeft;
}
const currentDate = printTodayDate();
const daysLeft = calculateDaysUntilRelease(currentDate);
if (daysLeft >= 0) {
    printOut(`There are ${daysLeft} days left until 2XKO release.`);
} else{
    printOut(`2XKO release date was ${Math.abs(daysLeft)} days ago.`);
}
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateCircle(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    printOut(`Diamter is ${diameter}`);
    printOut(`Circumference is ${circumference.toFixed(2)}`);
    printOut(`Area is ${area.toFixed(2)}`);
}
calculateCircle(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateRectangle(rectangle) {
    const width = rectangle.width;
    const height = rectangle.height;
    const cirumference = 2 * (width + height);
    const area = width * height;
    printOut(`Rectangle width: ${width}, height: ${height}`);
    printOut(`Circumference is ${cirumference.toFixed(2)}`);
    printOut(`Area is ${area.toFixed(2)}`);
}
calculateRectangle({ width: 4, height: 3 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(temperature, type) {
    let celsius;
    let fahrenheit;
    let kelvin;

    if (type === "Celsius") {
        celsius = temperature;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (type === "Fahrenheit") {
        fahrenheit = temperature;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (type === "Kelvin") {
        kelvin = temperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    } else {
        printOut("Unknown temperature type!");
        return;
    }

   printOut(`convert ${temperature} ${type}`);
   printOut(`Celsius = ${Math.round(celsius)}`);
    printOut(`Fahrenheit = ${Math.round(fahrenheit)}`);
    printOut(`Kelvin = ${Math.round(kelvin)}`);
    printOut(newLine);
}
convertTemperature(47, "Celsius");
convertTemperature(100, "Fahrenheit");
convertTemperature(300, "Kelvin");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateNetPrice(grossPrice, vatGroup) {
    const group = vatGroup.toLowerCase();
    let vat;

    if (group === "normal") {
        vat = 25;
    } else if ( group === "food") {
        vat = 15;
    } else if (
        group === "hotel" ||
        group === "transport" ||
        group === "cinema"
    ) {
        vat = 10;
    } else {
        printOut("Unknown VAT group!");
        return NaN;
    }

    const netPrice = (100 * grossPrice) / (vat + 100);
    return netPrice;
}

const normalPrice = calculateNetPrice(100, "normal");
printOut(`100 is ${normalPrice.toFixed(2)} without tax`);
const foodPrice = calculateNetPrice(150, "FOOD");
printOut(`150 is ${foodPrice.toFixed(2)} without tax`);
const hotelPrice = calculateNetPrice(50, "hotel");
printOut(`50 is ${hotelPrice.toFixed(2)} without tax`);

calculateNetPrice(80, "goblins");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateMotion(speed, distance, time) {
    const missingCount =
    (speed === undefined ? 1 : 0) +
    (distance === undefined ? 1 : 0) +
    (time === undefined ? 1 : 0);
    
  if (speed === undefined) {
    return distance / time;
  } else if (distance === undefined) {
    return speed * time;
  } else {
    return distance / speed;
  }
}
printOut(`Speed: ${calculateMotion(undefined, 50, 2)} km/h`);
printOut(`Distance: ${calculateMotion(60, undefined, 2)} km`);
printOut(`Time: ${calculateMotion(70, 105, undefined)} h`);
printOut(`Missing values: ${calculateMotion(undefined, 50, undefined)}`);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function extendText(text, maxLength, character, addBefore) {
    if (text.length >= maxLength) {
        return text;
    }

    const missingLength = maxLength - text.length;
    const extraCharacters = character.repeat(missingLength);

    if (addBefore === true) {
        return extraCharacters + text;
    } else {
        return text + extraCharacters;
    }
}

const firstText = extendText("Hello", 10, "*", true);
const secondText = extendText("World", 10, "-", false);

printOut(firstText);
printOut(secondText);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testMathPattern() {
    let currwntNumber = 1;

    for (let line = 1; line <= 200; line++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let i = 0; i <= line; i++) {
            leftSum += currwntNumber;
            currwntNumber++;
        }
        for (let i = 0; i < line; i++) {
            rightSum += currwntNumber;
            currwntNumber++;
        }
        if (leftSum !== rightSum) {
            printOut(`Error at line ${line}: ${leftSum} !== ${rightSum}`);
            return;
        }
    }
    printOut("Maths fun!");
}
testMathPattern();
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(number) {
    if(number === 0 || number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
}
const result = factorial(9);
printOut(`Factorial of 9 is ${result}`);
printOut(newLine);
