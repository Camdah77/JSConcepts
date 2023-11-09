/**
 * To run this file in Gitpod, use the 
 * command node 006-rest-parameter-syntax.js in the terminal
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("sum:" , sum);





// Extra arguments are ignored
// Function using ...rest