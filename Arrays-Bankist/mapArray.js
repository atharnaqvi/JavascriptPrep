'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;

// Functional method to resolve the issue. Most widely used
const movementsUSD = movements.map(function (mov) {
  //   return mov * euroToUSD;
  return '$' + mov * euroToUSD;
});

console.log(movements);
console.log(movementsUSD);
console.log(typeof movementsUSD);

// Same solution using For Of loop - old method

const movementsToUsdForOf = [];
for (const mov of movements) movementsToUsdForOf.push(mov * euroToUSD);
console.log(movementsToUsdForOf);
console.log(typeof movementsToUsdForOf);

// Simplyfy the functional solution using arrow function

const mov2USD = movements.map(mov => '$' + mov * euroToUSD);
console.log(mov2USD);
