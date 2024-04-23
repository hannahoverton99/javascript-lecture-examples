// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 17: EXCEPTIONS


/* Throwing an Exception */

function getPrize(kid, prize) {
	console.log(`\nSomewhere nearby, you could swear you hear several tiny voices say, "It's the claaaawwwww! You have been chosen!"`);
	// TODO: Throw an exception if Sid tries to get Buzz out of the machine
if(kid === "Sid" && prize === "Buzz Lightyear"){
	throw new Error(`Hey! that ${prize} isn't supposed to be in there!`)
}else{
	console.log(`\nCongrats, ${kid}! you got the ${prize} toy!`);
}}

// TODO: Have Andy try for a three-eyed alien
// getPrize("Andy", "three-eyed alien");
// TODO: Have Sid try for Buzz Lightyear
// getPrize("Sid", "Buzz Lightyear");

/* Try, Catch, Finally */

// TODO: Use a try/catch/finally series in the function below to prevent your program from crashing
function executeReconPlanCharlie(action) {
	let actions = {
		mobilize: "\nAlright men, listen up! We've got a Code Red!",
		recon: "\nTime to scope out the birthday presents!",
		help: "\nA good soldier never leaves a man behind.",
		affirm: "\nMission accomplished! Well done, men.",
		warn: "\nRed alert! Red alert! Andy is coming upstairs!"
	};
	
  // TODO: Move the reassignment and console.log below into the try block
 try{
	 action = action.toLowerCase();
	 if(actions.hasOwnProperty(action)){    //if(action in actions)
		 console.log(actions[action]);
	 }else {
		let customError = new Error(`\n${action} is not a valid action for the army men!`);
		console.log(`\n**************`);
		console.log(customError.name);
		console.log(customError.message);
		console.log('\n*************')
	 
	 }

 }catch(e){
	console.log(e);
 }finally{

	 console.log("*** RECON PLAN CHARLIE ***\n");	
 }
 
}
 
 

  // TODO: Put the final console.log inside a finally block

// TODO: Mobilize the men
executeReconPlanCharlie("Mobilize");
// TODO: Do some recon
executeReconPlanCharlie("Recon");
// TODO: Warn the toys upstairs about the kids headed their way
executeReconPlanCharlie("Warn");
// TODO: Try to call the function with a string that is not a key in the actions object
executeReconPlanCharlie("run");
// TODO: Try to call the function without an action
executeReconPlanCharlie();
// That's it!

console.log("\nIf you're seeing this, you've handled your errors without crashing your program!");
