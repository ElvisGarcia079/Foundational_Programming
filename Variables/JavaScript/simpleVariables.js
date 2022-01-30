t

//1. A String
let progLanguage = "JavaScript";

//2. A Number 
let number = 25;

//3. A Boolean 
let isCoding = true;

/* It can also be the other two Primitive Data Types */

//4. An Undefined
let noValue; //A Variable with No Value is 'undefined'
let undef = undefined //Can explicitly make 'undefined'

//5. A Null Value
let emptyObj = null; //Null is an Object with no Reference! (Like the number 0 is a number with no Quantity.)


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