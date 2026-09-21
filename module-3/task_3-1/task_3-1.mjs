"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeUpTime = 8;
printOut("Wake up time = " + wakeUpTime);
if (wakeUpTime === 7) {
    printOut(" I can take the bus to school");
}
else if (wakeUpTime ===8) {
    printOut(" I can take the train to school");
}
else {
    printOut(" I have to take the car to school");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numberValue = -1;
printOut("value = " + numberValue);
if (numberValue > 0) {
    printOut("Positive");
}
else if (numberValue < 0) {
    printOut("Negative");
}
else {
    printOut("Zero");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let photoSize = Math.floor(Math.random() * 8) +1;
printOut("Photo size = " + photoSize);
if (photoSize >= 4) {
    printOut("Thank you");
}
else {
    printOut("The image is too small");
}

    printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let photoSize2 = Math.floor(Math.random() * 8) +1;
printOut("Photo size = " + photoSize2);
if (photoSize2 >= 6) {
    printOut("Image is too large");
}
else if (photoSize2 >= 4) {
    printOut("Thank you");
}
else {
    printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "Mars", "April", "Mai", "Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("Month is = " + monthName);

if (monthName.includes("r")) {
    printOut("You must take vitamin D");
} else {
    printOut("You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "January") {
    printOut("It is 31 days in January");
}
else if (monthName === "February") {
    printOut("It is 28 days in February");
}
else if (monthName === "Mars") {
    printOut("It is 31 days in Mars");
}
else if (monthName === "April") {
    printOut("It is 30 days in April");
}
else if (monthName === "Mai") {
    printOut("It is 31 days in Mai");
}
else if (monthName === "Jun") {
    printOut("It is 30 days in Jun");
}
else if (monthName === "Juli") {
    printOut("It is 31 days in Juli");
}
else if (monthName === "August") {
    printOut("It is 31 days in August");
}
else if (monthName === "September") {
    printOut("It is 30 days in September");
}
else if (monthName === "October") {
    printOut("It is 31 days in October");
}
else if (monthName === "November") {
    printOut("It is 30 days in November");
}
else if (monthName === "December") {
    printOut("It is 31 days in December");
} 
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "April") {
    printOut("The Art gallery is open in April, welcome!");
}
else if (monthName === "March" || monthName === "Mai") {
    printOut("The Art gallery is closed in " + monthName);
}
else {
    printOut("The Art gallery is open in " + monthName + ", welcome!");
}
printOut(newLine);
