// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 16: MORE ON TYPES


/* Primitives */

let boy = "Andy";
let age = 6;
let hasBabySister = true;

let favoritePizzaPlace = null;
let favoriteIceCream;

function printValueAndType(data) {
	console.log("\nValue: " + data);
	console.log("Type: " + typeof data);
}

// TODO: Call the function for each variable above
let vars =[boy, age, hasBabySister, favoritePizzaPlace, favoriteIceCream];
vars.forEach(printValueAndType);


/* Data Structures */

let toyNames = ["Hamm", "Slinky Dog", "Wheezy"];

let neighborKid = {
	firstName: "Sid",
	lastName: "Phillips",
	pastime: "torturing toys"
};

// TODO: Call the function to print the value and type of the array and object
printValueAndType(toyNames);
printValueAndType(neighborKid);
console.log(neighborKid);

/* Null and Undefined */

function playGame() {
	console.log("Hey, this is fun!");
}

let pizzaPlanet = {
	food: "pizza",
	drink: "soda",
	doesDeliveries: true,
	videoGames: null,
    play: playGame
}

// TODO: Print the videoGames property
console.log(pizzaPlanet.videoGames);

// TODO: Print a nonexistent property of pizzaPlanet, hours
console.log(pizzaPlanet.hours);
// TODO: Call the play method
// console.log(pizzaPlanet.play()); instead of console.logging, call the function instead since there is no return value. if you try to console.log something
//without a return value you will get undefined as the type
pizzaPlanet.play();