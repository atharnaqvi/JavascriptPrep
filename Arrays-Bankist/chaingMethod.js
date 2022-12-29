'use strict';
/*
When a method output an array we can use chaning method such as Filter and Map return an array
Whereas Reduce return a value so after reduce we can't use chaning method. 
PIPELINE analogy
👉 Try to avoid overly complex chains specially in a larg arays as it's a serious performance concern
👉 Although it's allowed to use mutated methods in chaining but it's a bad practice in JavaScript


*/
const eurToUsd = 1.1;
const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(`Total Deposite in USD: $${totalDepositsUSD}`);

const totalWithDrawalUSD = Math.abs(
  movements
    .filter(mov => mov < 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0)
);
console.log(`Total Withdrawal in USD: $${totalWithDrawalUSD}`);

console.log(`Balnce ammount in USD: $${totalDepositsUSD - totalWithDrawalUSD}`);

// to trouble shoot a method in PIPELINE

const totalWithDrawalUSDTest = Math.abs(
  movements
    .filter(mov => mov < 0)
    .map((mov, i, arr) => {
      console.log(arr);
      return mov * eurToUsd;
    })
    .reduce((acc, mov) => acc + mov, 0)
);
