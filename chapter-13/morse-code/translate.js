/*
	Write an simple interactive program below that accepts user input and uses your translateAll() function to return the Morse code transation. Set up the program to loop and keep asking the user for another phrase until they end it.
*/

// TODO: Import readline-sync and translateAll
const input =  require(`readline-sync`);
const funcs = require(`./funcs.js`);

function runProgram() {

	// TODO: Write intro text
console.log("\nEnter text to translate to Morse code, or enter 'QuIT' when you're done.");

	// TODO: Continue asking for text to translate until user wants to end the program
while (true){
	let phrase = input.question("\nEnter text to translate to morse code:\n");
	if (phrase.toUpperCase() ==="QUIT"){
		console.log("\nThanks for trying the tanslator");
		break;
	}else{
		console.log(funcs.translateAll(phrase));
	}
}

}

// Ready to go!
runProgram();