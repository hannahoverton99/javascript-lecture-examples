// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 15: SCOPE


// Some data to work with
let toys = [
	{
		name: "Woody",
		description: "cowboy",
		catchphrases: [ "There's a snake in my boot!", "Reach for the sky!" ]
	},
	{
		name: "Buzz Lightyear",
		description: "space ranger",
		catchphrases: [ "This is an intergalactic emergency.", "To infinity and beyond!" ]
	},
	{
		name: "Mr. Potato Head",
		description: "potato",
		catchphrases: [ "Prepare to meet Mr. Angry Eyes!", "You uncultured swine!" ]
	},
	{
		name: "Rex",
		description: "dinosaur",
		catchphrases: [ "I'm going for fearsome here, but I just don't feel it! I'm think I'm just coming off as annoying.", "But look at my little arms! I can't press the fire button and jump at the same time!" ]
	},
	{
		name: "Bo Peep",
		description: "shepherdess",
		catchphrases: [ "Be who you are right now.", "He's not lost. Not anymore." ]
	}
];

// TODO: Write a function describeToys() that takes an array and accesses each object one at a time, printing a sentence using the following template literal: 
// `${name} is a toy ${desc} who says things like, "${quote1}" and "${quote2}"\n`
function describeToys(arr){
for(let i = 0; i< arr.length; i++){
	// console.log(name) ref error
	let name = arr[i].name;
	let desc= arr[i].description;
	let quote1= arr[i].catchphrases[0];
	let quote2 = arr[i].catchphrases[1];
	console.log(name);
	console.log(`${name} is a toy ${desc} who says things like, "${quote1}" and "${quote2}"\n`)
}
}

// TODO: Call the function and pass in the array toys
// describeToys(toys);
// TODO: Change the scope of desc to global by removing the keyword let, and print it below
// console.log(desc);
// TODO: Remove the keyword let from quote1 above, then declare it with let below. Try printing it. What happens?
// console.log(quote1);
// TODO: Remove the keyword let from quote2 above, then declare it with var below. Try printing it. What happens?
// var quote2;
// console.log(quote2);