'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Functional method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// Old method
const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

// array for withdrwals

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
