// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 14: UNIT TESTING


/* 
	In the corresponding spec file, write a test for the msPerYear below.
*/
let msPerYear = 1000 * 60 * 60 * 24 * 365.25;


/* 
	In the corresponding spec file, write a test for each property in the object below. Fix any mistakes that are uncovered by the tests.
*/
let bucky = {
	fullName: "James Buchanan Barnes",
	nickname: "The Winter Soldier",
	triggerWords: ["Longing", "rusted", "furnace", "daybreak", "seventeen", "benign", "nine", "homecoming", "one", "freight car"],
	age: Math.round((new Date() - new Date(1917, 10, 3)) / msPerYear),
	isHydraAgent: true
};


/** TEST-DRIVEN DEVELOPMENT **/

/*
	TODO: Practice TDD by writing each test before adding code to the function below.

  The function should return true or false depending on whether all of its characters are alphabetical or not.
*/
function isAlphaOnly(str) {
let allowed = "abcdefghijklmnopqrstuvwxyz";
for(let i=0; i < str.length; i++){
if(!allowed.includes(str[i].toLowerCase())){
	return false;
}
}
return true;
}

// TODO: Export items to be tested
module.exports ={
	MS_PER_YEAR: this.MS_PER_YEAR,
	bucky :  bucky,
	isAlphaOnly: isAlphaOnly
}