// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 18: CLASSES


// TODO: Import the Fruit class here for use below
const Fruit= require(`./classes/Fruit`);

/* The Fruit Class */

// TODO: In fruit.js, define the Fruit class before continuing

// TODO: Create a Fuji apple, Granny Smith apple, and navel orange
let fuji = new Fruit("Fuji", "red");
let grannySmith = new Fruit("Granny Smith Apple", "green");
let navel= new Fruit("navel orange", "orange", true);
// TODO: Print the three new objects
console.log(fuji);
console.log(grannySmith);
console.log(navel);
// TODO: Print the color of the fuji apple
console.log(fuji.color);

// TODO: Describe the navel orange
console.log(navel.describe())
// TODO: Cut both apples into different numbers of pieces

fuji.cut(4);
grannySmith.cut(8);