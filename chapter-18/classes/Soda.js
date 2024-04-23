// TODO: Import the Beverage class

const Beverage = require("./Beverage");

/** The Soda Class **/

/* 
	TODO: Use 'extends' and 'super()' to create the Soda class as a child of Beverage
	
 	Add one more property as a parameter: hasCaffeine

 	Overwrite the inherited describe() method with a new sentence that includes the brand and caffeine status
*/
class Soda extends Beverage{
	constructor(name, ounces, container, hasCaffeine){
		super(name, ounces, container);
		this.hasCaffeine= hasCaffeine;
	
	}
	describe(){
		let haveOrHad = this.recycled ? "had" : "have";
		let caffeineStatus = this.hasCaffeine ? "caffeinated" : "caffeine-free";
		console.log(`\nI ${haveOrHad} a ${this.ounces}-oz. ${this.container} of ${this.name}`);
	}
}
// TODO: Export the Soda class
module.exports = Soda;