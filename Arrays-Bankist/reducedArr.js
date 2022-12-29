'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Accumulator is like a snowball
/*const balance = movements.reduce(function (accumulator, currentValue, i, arr) {
  console.log(`Iteration ${i}: ${accumulator}`);
  return accumulator + currentValue;
}, 0);*/

// Refactoring using arrow function
const balance = movements.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

//☝️ 0 is the starting value of accumulator
console.log(movements);
console.log(balance);

// For loop to do the same solution as ☝️☝️☝️☝️
let ballance2 = 0;
for (const mov of movements) ballance2 += mov;
console.log(ballance2);

// to filter the maximum value in the array

const max = movements.reduce((accumulator, currentValue) => {
  if (accumulator > currentValue) return accumulator;
  else return currentValue;
}, movements[0]);

console.log(max);
