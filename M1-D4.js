// Just a comment
/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

function area(l1, l2) {
  console.log(l1 * l2);
}

area(2, 4);

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

function crazySum(a, b) {
  if (a == b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
}
console.log(crazySum(5, 10));
console.log(crazySum(5, 5));

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

function crazyDiff(n) {
  if (n <= 19) {
    return 19 - n;
  } else {
    return (n - 19) * 3;
  }
}

console.log(crazyDiff(20));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and 
returns true if 
N is within 20 and 100 (included) or equal to 400.
*/
/* WRITE YOUR CODE HERE */

function boundary(N) {
  if ((N >= 20 && N <= 100) || N === 400) {
    return true;
  }
}

console.log(boundary(50));
console.log(boundary(400));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to 
S "Strive" in
 front of a given string, if the given string begins with
  "Strive" then
  return the original string.
*/
/* WRITE YOUR CODE HERE */
//ATTEMPT 2 CORRECT ?:
function strivify() {
  var str = "Strive";
  var n = str.startsWith("S", 0);

  if (n == str.startsWith("S", 0)) {
    return str;
  }
}
console.log(strivify("S"));

// ATTEMPT 1:
// const string1 = "S";
// const string2 = "Strive";

// function strivify(string1, string2) {
//   if (string1.startWith()) {
//     return;
//   }
// }

// console.log(strivify("S"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive
 number and check if it is a multiple of 3 or a multiple 
 of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
function check3and7(x) {
  if (x % 3 == 0 || x % 7 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(12));

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically
 a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");

  return joinArray;
}
console.log(reverseString("Strive"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter
 of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */
function upperFirst(cap) {
  cap = cap.split(" ");

  for (let i = 0, x = cap.length; i < x; i++) {
    cap[i] = cap[i][0].toUpperCase() + cap[i].substr(1);
  }
  return cap.join(" ");
}
console.log(upperFirst("i like programming."));
/* EXERCISE 9
Write a function "cutString" to create a new string without
 the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
function cutString(string) {
  return string.substring(1, string.length - 1);
}
console.log(cutString("Strive"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n 
and returns an array containing n random numbers between 0
 and 10
*/

/* WRITE YOUR CODE HERE */
function giveMeRandom(n) {
  let myNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  // const items = Array(Math.floor(Math.random() * Math.floor(n)));
  // const rand = items[Math.floor(Math.random() * items.length)];
  // return Array(Math.floor(Math.random() * Math.floor(n)));
  return myNumbers[Math.floor(Math.random() * myNumbers)];
}
console.log(giveMeRandom(10));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
