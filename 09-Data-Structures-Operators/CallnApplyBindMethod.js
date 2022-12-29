'use strict';

// CALL, APPLY and BIND methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function(){},
  book(flightNum, name) {
    console.log(
      `${name} book a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Athar Naqvi');
lufthansa.book(523, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const pia = {
  airline: 'Pakistan Air Line',
  iataCode: 'PK',
  bookings: [],
};

const emirates = {
  airline: 'Emirates Air Line',
  iataCode: 'EA',
  bookings: [],
};
const book = lufthansa.book;

//call, apply and bind methods to tell javascript that book is refereing this to which funciton
//this doens't work
//book(123, 'Tim Southe');

//Call mehtod
book.call(eurowings, 254, 'Mary Cooper');
book.call(eurowings, 255, 'Susie Franklin');
book.call(lufthansa, 445, 'Jack Hey');
book.call(lufthansa, 958, 'Sean Dickens');
book.call(pia, 445, 'Jamil Akhtar');
book.call(pia, 103, 'Adnan Bukhari');
book.call(emirates, 999, 'Jamal Abdul Nasir');
book.call(emirates, 996, 'Sheikh Ali');

//Apply method -- Apply the array to this keyword
//⛔ Apply method is not used in the modern javascript

const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);

//instead use the call method with spread method

const flightData2 = [220, 'John Smith'];
book.call(emirates, ...flightData2);

const bookEW = book.bind(eurowings);
const bookPIA = book.bind(pia);
const bookEA = book.bind(emirates);

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Mortaz Ali');
bookEW23('Sakina Ali');
bookEW(222, 'Alan South');
bookPIA(444, 'Imran Khan');
bookEA(666, 'Abdullah Shamim');

console.log(lufthansa);
console.log(eurowings);
console.log(pia);
console.log(emirates);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlan = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlan(); // to call this function to point to the function
// in this example when this keyword is called by an event listener than this point to the eventlistener not the function.
/* it returns
      <button class="buy">Buy new plan ✈️</button>
      NaN
*/
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlan.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.2);

console.log(addVat(100));
console.log(addVat(36));

// calling funciton within a function
// traditioanl function
/*
const calculateTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
*/
//Alternate Arrow function
const calculateTax = rate => value => console.log(value + value * rate);

const cTax = calculateTax(0.2);

cTax(30100);
cTax(100);
calculateTax(0.2)(2000);
