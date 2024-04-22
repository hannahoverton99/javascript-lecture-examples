// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 7: STRINGS


/** STRINGS — BRACKET NOTATION & IMMUTABILITY **/

let theLastTimeLord = " Tha Docktor  "; // um... that's not quite right!

// TODO: Use bracket notation to print the first character of the first word.


// TODO: Use bracket notation to print the first character of the last word.


// TODO: Try to fix the mistakes in the name by using bracket notation to assign new values to characters at specific indices, then print the whole name to see if it worked.



/** THE LENGTH PROPERTY **/

// TODO: Declare a variable
let daleWarCry = "Exterminate!";

// TODO: Print the length of the string.
console.log(daleWarCry.length);

// TODO: Use the length to store the index of the last character in a variable, then print it.
let lastIndex = daleWarCry.length - 1;
console.log(lastIndex);
// TODO: Use bracket notation and the variable you created to print the last character of the string.



/** COMMON STRING METHODS **/

/* Changing Case */
let getAMoveOn = "Allons-y!";
let timeDescription = "Wibbly-wobbly, Timey-wimey";

// TODO: Print getAMoveOn in all caps, then print the stored variable.
console.log(getAMoveOn.toUpperCase());
console.log(getAMoveOn);

// TODO: Print timeDescription in all lowercase, then print the stored variable.
console.log(timeDescription.toLowerCase());
console.log(timeDescription);


/* Trim & Replace */

// TODO: Remove the leading and trailing spaces from theLastTimeLord and reassign the returned value to the original variable, then print it.
theLastTimeLord = theLastTimeLord.trim();
console.log(theLastTimeLord);

// TODO: Change the errant a to an e in "Tha", reassigning to the original variable, then print it.
theLastTimeLord = theLastTimeLord.replace("a", "e");
console.log(theLastTimeLord);


/* Finding Characters Within a String */

// TODO: Check to see if there is a t in theLastTimeLord, and print the return value (boolean).
console.log(theLastTimeLord.includes("t"));

// TODO: Get the index of the errant k in the name, store it in a variable, then print it.
let extraLetter = theLastTimeLord.indexOf("k");
console.log(extraLetter);

/* Create a New String from a Substring */

// TODO: Use .slice() to build the correct string, omitting the k, and reassign it to the original variable. Print the final result.
theLastTimeLord = theLastTimeLord.slice(0, extraLetter) + theLastTimeLord.slice(extraLetter + 1);
console.log(theLastTimeLord);


/** TEMPLATE LITERALS **/

let rose = "Rose Tyler";
let martha = "Martha Jones";
let donna = "Donna Noble";

let quote1 = "Oi!";
let quote2 = "The first 19 years Of my life, nothing happened. Nothing at all. Not ever. And then I met a man called The Doctor.";
let quote3 = "All of space and time he promised me!";

// TODO: Using template literals, combine each quote with the correct character so that they come out in the console formatted like this: 
// "I am the Master and you will obey me." - The Master
console.log(`"${quote1}" - ${donna}`);
console.log(`"${quote2}" -${rose}`);
console.log(`"${quote3}" -${martha}`);


/* PUT IT ALL TOGETHER */

// TODO: Add the readline-sync library so you can accept user input.
const input = require('readline-sync');

// TODO: Ask the user for a first name
let firstname = input.question("/nPlease enter your first name:\n");

// The user may not give you their name formatted as you need it to be
// Examples: "AMY" or "rory" or " sally "
// Your code needs to anticipate fixing any of these formatting issues
// Think it through — what order should you do the modifications in?
// NOTE: There is more than one way to do this!

// TODO: Modify the name to ensure the first letter is capitalized, the remaining letters are lowercase, and no extra spaces are before or after the name.
firstName - firstname.trim();
firstName = firstName.toLowerCase();
firstName = firstname.replace(firstName[0], firstName[0].toUpperCase());

// TODO: Use a template literal to print a greeting with the name
console.log(`Hello, ${firstName}`);
