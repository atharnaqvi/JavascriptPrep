'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// a way to distinguish between deposited and withdrawals payment
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: deposited ${movement} `);
  } else {
    console.log(`Movement ${i + 1}: yave withdrwan ${Math.abs(movement)}`);
  }
}

console.log(
  '--------------------------------------------------------------------------------------------------'
);
// anther way to do the same using for each method
//forEach is a higher order function that call itself and no need to call it

movements.forEach(function (transactions, i, arr) {
  if (transactions > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${transactions}`);
  } else {
    console.log(
      `Transaction ${i + 1}: You yave withdrwan ${Math.abs(transactions)}`
    );
  }
});

const newMap = new Map();
newMap.set('Athar', {
  email: 'abc@gmail.com',
  phone: '07812345678',
  address: '123 Main St The City',
});

newMap.set('John', {
  email: 'def@gmail.com',
  phone: '07812345678',
  address: '321 Back St The City',
});

newMap.forEach(function (key, value, map) {
  console.log(`${key}: ${value}`);
});
console.dir(newMap);

console.log(newMap.size);
const myObj = newMap.get('Athar');
console.log(myObj.email);

// Another example

const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
  ['PKR', 'Pakistani Ruppees'],
  ['USD', 'US Dollar'],
]);
console.log(currencies.size);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.dir(currencies);

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'GBP', 'EUR', 'PKR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, set) {
  //_ is used as a throwaway variable which is not needed
  console.log(`${value}: ${value}`); //sets do not have keys and indexes so forEach copy the Value as key too
});
