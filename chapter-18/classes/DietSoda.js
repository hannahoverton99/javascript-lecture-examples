// TODO: Import the Soda class

const Soda = require("./Soda");

/** The DietSoda Class **/

/*
	TODO: Use 'extends' and 'super() to create the DietSoda class as a child of Soda.

 	Give it all four params from Soda plus a new one, sweetener

	Overwrite the describe method, calling the Soda describe and then adding a line that mentions the type of sweetener.
*/
class DietSoda extends Soda{
	constructor(name, ounces, container, hasCaffeine, sweetener){
		super(name, ounces, container, hasCaffeine);
		this.sweetener = sweetener;
	}
	describe(){
		super.describe();
		console.log(`It was sweetened with ${this.sweetener}`);
	}
}
// TODO: Export the DietSoda class
module.exports= DietSoda;