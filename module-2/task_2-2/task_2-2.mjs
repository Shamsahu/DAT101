"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const originalExpression = 2 + 3 * 2 - 4 * 6;
const modifiedExpression = 2 + 3 * (2 - 4) * 6; 
printOut("OriginalExpression: 2 + 3 * 2 - 4 * 6 = " + originalExpression);
printOut("Modified expression: 2 + 3 * (2 - 4) * 6 = " + modifiedExpression);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const millimeters = (25 * 1000) + (34 * 10);
const millPrInch = 25.4;
const sumPart2 = millimeters / millPrInch;
printOut("25 meters and 34 centimeters = " + sumPart2.toFixed(2) + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Days = 3;
const part3Hours = 12;
const part3Minutes = 14;
const part3Seconds =45;
const part3Answer = 
(part3Days * 24 * 60) +
(part3Hours * 60) +
part3Minutes +
part3Seconds / 60;
printOut("3 days, 12 hours, 14 minutes and 45 seconds = " + part3Answer.toFixed(2) + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalMinutesPart4 = 6322.52;
const part4Days = Math.floor(totalMinutesPart4 / (24 * 60));
let remainder = totalMinutesPart4 / (24 * 60) - part4Days;
remainder = remainder * 24;
const part4Hours = Math.floor(remainder);
remainder = remainder - part4Hours;
remainder = remainder * 60;
const part4Minutes = Math.floor(remainder); 
remainder = remainder - part4Minutes;
remainder = remainder * 60;
const part4Seconds = Math.floor(remainder);
printOut(
    totalMinutesPart4 + " minutes = " +
    part4Days + " days, " +
    part4Hours + " hours, " +
    part4Minutes + " minutes, and " +
    part4Seconds + " seconds"
);
printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const nokPerUsd = 76 / 8.6;
const usdPerNok = 8.6 / 76;
const nokFromUsd = Math.round(54 * nokPerUsd);
const usdFromNok = Math.round(nokFromUsd * usdPerNok);
printOut("54 USD = " + nokFromUsd + " NOK");
printOut(nokFromUsd + " NOK = " + usdFromNok + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part6Text = "there is much between heaven and earth that we do not understand.";
printOut("Number of characters: " + part6Text.length);
printOut("Character at position 19: " + part6Text.charAt(19));
printOut("8 characters from position 35: " + part6Text.substring(35, 43));
printOut('Index of "earth": ' + part6Text.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("5 > 3 is " + (5 > 3));
printOut("7 >= 7 is " + (7 >= 7));
printOut('"a" > "b" is ' + ("a" > "b"));
printOut('"1" < "a" is ' + ("1" < "a"));
printOut('"2500" < "abcd" is ' + ("2500" < "abcd"));
printOut('"arne" !== "thomas" is ' + ("arne" !== "thomas"));
printOut("2 === 5 is " + (2 === 5));
printOut('"abcd" > "bcd" is'+ ("abcd" > "bcd"));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numberFromText1 = Number("254");
const numberFromText2 = parseFloat("57.23");
const numberFromText3 = parseInt("25 kroner");
printOut('"254" as a number is ' + numberFromText1);
printOut('"57.23" as a number is ' + numberFromText2);
printOut('"25 kroner" as a number is ' + numberFromText3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.floor(Math.random() * 360) + 1;
printOut("Random number between 1 and 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalDays = 131;
const fullWeeks = Math.floor(totalDays / 7);
const remainingDays = totalDays % 7;
printOut(totalDays + "days = " + fullWeeks + " weeks and " + remainingDays + " days");
printOut(newLine);