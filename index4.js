// ********* STRINGS *****************
// we can think of them as arrays of characters:

// const { arrayOf } = require("prop-types");

// const { array } = require("prop-types");

// const singleQuoted = "asdafdadff";
// const doubleQuoted = "asdasdaffads";

// const example = 12313132;
// const templateLiterals = `Value of example variable is: ${example}
// Value of doubleQuoted variable is: ${doubleQuoted}`;

// console.log(templateLiterals);
// console.log(templateLiterals.length);
// console.log(templateLiterals.toLowerCase()); //methods .tolowerCase
// console.log(templateLiterals.slice(4, 10));
// console.log(templateLiterals.indexOf("e"));
// console.log(templateLiterals.indexOf("ee"));
// console.log(templateLiterals.split(" ")); //split array of words!

// console.log(arrayOfWords);
// const joinedWithDots = arrayOfWords.join("........");
// console.log(joinedWithDots);

// ****************** FUNCTIONS ***************************
//DECLARING A FUNCTION

// const square = function (x) {
//   // function(parameter)
//   //BODY OF THE FUNCTION
//   const result = x * x;

//   return result; // return is final output of the function

//   //END OF BODY
// };

// console.log(square(4)); // here we are calling the functions 'RECEIVING'
// console.log(square(6)); // NOW i WILL CHANGE THE VALUE because i changed parameter to 6

// example1
//anonymous function expression: (name is not used)
// var myFunction = function(){
//     statements
// }


// example2

// const square = function (x, y, z) {
//   // function(parameter)
//   //BODY OF THE FUNCTION
//   const result = x * x;

//   return result; // return is final output of the function

//   //END OF BODY
// };

// console.log("The result of 4*4 is: " + square(4)); // here we are calling the functions
// console.log(square(6));

// const squareOf25 = square(25);

// let myFunctions = function () {
//   console.log("Hello");
// };

// console.log(squareOf25);
//------------------------------------------------------
// EXAMPLE 2  of DECLARING FUNCTIONS
// ARROW FUNCTIONS ( it doesnt use the function keyword)

// const sum = function (a, b) {
//   return a + b;
// };

// const sum2 = (a, b) => {
//   //NORMAL ARROW FUNCTION
//   return a + b;
// };

// const sum3 = (a, b) => a + b; //SHORTER SYNTAX sused just when you have to return something, just for single liners.

// I MADE A CHANGE HERE !
