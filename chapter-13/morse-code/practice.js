// TODO: Import from funcs.js

const funcs = require(`./funcs.js`);

/** TRY OUT INDIVIDUAL FUNCTIONS **/

// TODO: Store a single character in a new variable, char
let char = "w";
// TODO: Call the function and store returned value in a variable, translatedChar
let translatedChar = funcs.translateChar(char);
// TODO: Print a sentence that states the character and its translation

console.log(`In Morse code, the letter'${char}' is :\n${translatedChar}\n`)
// TODO: Store a single word in a new variable, word
let word = "specialty";
// TODO: Call the function and store returned value in a variable, translatedWord
let translatedWord = funcs.translateWord(word);

// TODO: Log a sentence that states the word and its translation
console.log(`In Morse code, the word '${word}' is: \n${translatedWord}`)

// TODO: Store a phrase in a new variable, phrase
let phrase = "Dammit, Jim - I'm a doctor, not a coder!";
// TODO: Call the function and store returned value in a variable, translatedPhrase
let translatedPhrase = funcs.translateAll(phrase);
// TODO: Print a sentence stating the phrase and its translation
console.log(`In Morse code, the phrase '${phrase} is: ${translatedPhrase}`);