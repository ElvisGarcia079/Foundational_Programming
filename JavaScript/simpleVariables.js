//Initializing a Variable 

//In JavaScript, Declaring Variables is fairly simple: 

/* 
    1. The Keyword let or var (let is better)
    2. A Variable Name
    3. The Assignment Operator
    4. The Value
    5. A Semi Colon
*/

//The Value could be any Data Type: 

//1. A String
let progLanguage = "JavaScript";

//2. A Number 
let number = 25;

//3. A Boolean 
let isCoding = true;


//Printing out the Values of your Variables to the Console using console.log()
console.log(progLanguage);
console.log(number);
console.log(isCoding);


//Create a reference to the Data Type of your Variables using the JavaScript Method typeof()
typeof(progLanguage);
typeof(number);
typeof(isCoding);

//Log to the Console The Reference to Your Variables Data Type

/* Version 1: Directly Inserting the Type Of Method Reference into the console.log() as an argument */

console.log(typeof(progLanguage));
console.log(typeof(number));
console.log(typeof(isCoding));

/* Version 2: Storing the typeof() Reference as a variable and then using the Variable as an argument for the console.log() */

//Step 1: Create the Variables and Store the Reference as a Value
let progLanguageDT = typeof(progLanguage);
let numberDT = typeof(number);
let isCodingDT = typeof(isCoding);

//Step 2: Log to the Console the Variables with the Stored Reference
console.log(progLanguageDT);
console.log(numberDT);
console.log(isCodingDT);












