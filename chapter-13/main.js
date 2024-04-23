// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 13: MODULES


// NOTE: Import statements usually go together at the top but I will add them gradually below
const input= require(`readline-sync`);

/** EXPORT/IMPORT A SINGLE ITEM **/

// TODO: Import the function from contact.js that prints LaunchCode's organizational information, but give it a different name 
const printACMEInfo = require(`./common/contact.js`);

// TODO: Call the function
printACMEInfo();

/** EXPORT/IMPORT MULTIPLE ITEMS **/

// TODO: Import from utils.js using an alias for the exports object
const utils = require(`./common/utils.js`);

let longDecNum = 43.624571248419348;

// TODO: Use the rounding function in utils to print the rounded number to 3 decimal places
console.log(utils.roundToDec(longDecNum, 3));


console.log(utils.getRandNumber(100));

let bookTitle = input.question("What is one of your favorite books?");
console.log(utils.getTitleCase(bookTitle));
/** USING DECONSTRUCTION FOR IMPORTS **/

// TODO: Use deconstruction to import only the last two functions from utils.js


// TODO: Use deconstruction to import the question function from the readline-sync library


// TODO: Print a random integer between 0 and 100


// TODO: Ask a user for a book title, then print it in title case using the third function from utils.js
