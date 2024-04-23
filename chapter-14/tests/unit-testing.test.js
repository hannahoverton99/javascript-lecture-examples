// TODO: Import items to test

const examples = require('../unit-testing.js');
/** UNIT TESTING **/

/*
	Write a test for the msPerYear variable. It should be exactly 31557600000.
*/

// TODO: Create a describe block for the variable, then write a specification inside it
describe("The MS_PER_YEAR constant", function(){
	test("should have a value of 31557600000", function(){
		expect(examples.MS_PER_YEAR).toEqual(31557600000);
	});
});

/*
	Write a test for each of the properties in the object bucky
*/

// TODO: Create a describe block for the entire object
describe("The bucky object", function(){

	// TODO: Write each specification as an it block inside the describe block
	test("should have a property called 'fullName' with the value of 'James Buchanan Barnes'", function(){
		expect(examples.bucky.fullName).toEqual("James Buchanan Barnes");
	})
	// TODO: Test the value of fullName
	
	
	// TODO: Write 2 tests for the value of nickname — it should be "Bucky" and NOT "The Winter Soldier"
	test("should have a property called 'nickname' with the value of 'Bucky'", function(){
		expect(examples.bucky.nickname).toEqual("Bucky");
		expect(examples.bucky.nickname).not.toEqual("The Winter Soldier");
	})
	
	// TODO: Test that triggerWords includes "longing", "daybreak", and "homecoming"
	test("should have an array called 'triggerWords' that includes specific words", function(){
		expect(examples.bucky.triggerWords).toContain("daybreak");//case sensitive
	})
	
	// TODO: Test that the age property is greater than 100
	test("should have a property called 'age' that is great than 100 and less than 120", function(){
		expect(examples.bucky.age).toBeGreaterThan(100);
		expect(examples.bucky.age).toBeLessThan(150);
	})
	
	// TODO: Test that Bucky is no longer a Hydra agent
	
});


/** TEST-DRIVEN DEVELOPMENT **/

/*
	Write a new describe block for the isAlphaOnly function. Test positive cases, negative cases, and edge cases
*/

// TODO: Test data — will need to be moved into a beforeEach() function 
let cap = {
	fullName: "Steve Rogers",
	nickname: "Cap",
	age: Math.round((new Date() - new Date(1918, 7, 4)) / msPerYear),
	catchphrases: ["I could do this all day.", "Language!"]
};


// TODO: Write a describe block for the isAlphaOnly function	
describe("The isAlphaOnly function", function(){
	test("should return true if alpha-only string is passed in", function(){
		expect(examples.isAlphaOnly(cap.nickname)).toBe(true);
	})
	test("should return false if the string has numeric characters", function(){
		let cap.age = String(cap.age);
		expect(examples.isAlphaOnly(cap.age)).toBe(false);
	})

	
})
	// POSITIVE CASES
	// TODO: Write a test for nickname

	
	// NEGATIVE CASES
	// TODO: Write tests for non-alpha characters like numbers and punctuation

	
	// EDGE CASES
	// TODO: Write a test for spaces (is allowed)

	// TODO: Write a test for empty string (not allowed)

	// TODO: Write a test for non-string types (not allowed)

	// TODO: Write a test for null value
