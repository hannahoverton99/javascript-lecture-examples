// TODO: Import classes for use below
const Beverage = require(`./classes/Beverage`);
const DietSoda = require("./classes/DietSoda");
const Juice = require("./classes/Juice");
const Soda = require("./classes/Soda");

/* The Beverage Class */

// TODO: In beverage.js, define the Beverage class before continuing

// TODO: Create a water object from Beverage class
let water = new Beverage("water", 20, "bottle")
// TODO: Print the water object
console.log(water);
// TODO: Describe the water (call the method)
water.describe();
// TODO: Recycle the water
water.recycle();
// TODO: Describe the water again

water.describe();

/* The Juice Class */

// TODO: In juice.js, define the Juice class before continuing

// TODO: Create orangeJuice, appleJuice, and v8 objects from the Juice class
let orangeJuice = new Juice("Orange Juice", 16, "bottle", ["oranges"]);
let appleJuice = new Juice("Apple Juice", 14, "can", ["apples"]);
let v8= new Juice("V8", 20, "glass bottle", ["tomatoes"], ["carrots", "celery", "beets", "parsley", "lettuce", "watercress", "spinach"])
// TODO: Print the three objects
console.log(orangeJuice);
console.log(appleJuice);
console.log(v8);
// TODO: Describe the v8
v8.describe();
// TODO: Recycle the apple juice (method inherited from Beverage)
appleJuice.recycle();

/* The Soda Class */

// TODO: In soda.js, define the Soda class before continuing

// TODO: Create drPepper and sprite objects from the Soda class, then print them
let drPepper = new Soda("Dr Pepper", 12, "can", true);
let sprite = new Soda("Sprite", 20, "can", false)

console.log(drPepper);
console.log(sprite);
// TODO: Whoops! That Sprite is actually in a bottle. Fix it.
sprite.container= "bottle"
// TODO: Describe the Sprite
sprite.describe();
// TODO: Recycle the Dr. Pepper, then describe it 
drPepper.recycle();
drPepper.describe();


/* The DietSoda Class */

// TODO: In dietSoda.js, define the DietSoda class before continuing

// TODO: Create cokeZero, caffFreeDietPepsi, and dietPepsi objects from the DietSoda class
let cokeZero = new DietSoda("Coke Zero", 12, "can", true, "aspartame");
let caffFreeDietCoke= new DietSoda("Caffeine-Free Diet Coke", 10, "bottle", false, "aspartame");
 let dietPepsi = new DietSoda("Diet Pepsi", 20, "bottle", true, "sucralose");
// TODO: Print the three new objects
console.log(cokeZero);
console.log(caffFreeDietCoke);
console.log(dietPepsi);
// TODO: Describe the Diet Pepsi
dietPepsi.describe();
// TODO: Recycle the Coke Zero and caffeine-free Diet Coke
cokeZero.recycle();
caffFreeDietCoke.recycle();


/* Identity */

// TODO: Use the instanceof keyword to verify the class inheritance of cokeZero
console.log(cokeZero instanceof DietSoda);
console.log(cokeZero instanceof Soda);
console.log(cokeZero instanceof Beverage);

// TODO: Try the same for cokeZero with the Juice class
console.log(cokeZero instanceof Juice);