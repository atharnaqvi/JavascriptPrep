'use strict';
/*
 *************                 Immediately Invoked Function Expression (IIFE)     *****************
 */
const varGlobal = 'This is a global variable';
(function () {
  console.log('This function will run only once');
  const isPrivate = 'This is a private variable!!!';
  console.log(varGlobal);
  var isGlobal = 'Lets chack var in imdiate invvoked functions';
})();

// console.log(isGlobal);
// console.log(isPrivate);

//Arrow Functions

(() => console.log('Arrow Function using IIFEE'))();

// Functions create Scope
// in the score change any variable defined in the fucntion is parivate to that function and outside
// of the scope change the variable is unaccessible all all the data within a function is also called 'data is encapsulated'
// Whereas a variable defined outside of the function is accessible within the scope

//score for Var, Let and Const are differnet
{
  const isPrivate2 = 'is not accessible out of the score';
  var globalVar = 'However var is accessible out of the block';
}

console.log(globalVar);
console.log(isPrivate2);
