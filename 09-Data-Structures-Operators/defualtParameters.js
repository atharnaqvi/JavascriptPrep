'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers || 1;       //old way of setting default values     //ES5
  //   price = price || 1100 ;     //old way of setting default values //ES5
  const booking = { flightNum, numPassengers, price };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('PK452', 5);
createBooking('BA231', 10, 15000);
createBooking('EM', undefined, 100);
*/

const flight = 'PK452';
const athar = {
  name: 'Athar Naqvi',
  passport: 12323232,
};

const checkIn = function (flightNum, passanger) {
  flightNum = 'BA242';
  passanger.name = 'Mr.' + passanger.name;

  if (passanger.passport !== 12323232) {
    alert('Passport number is incorrect ✋🤚');
  } else {
    alert('Please Check in ✈️');
  }
};

// checkIn(flight, athar);
// console.log(flight);
// console.log(athar);

//object and it's reference are both the same so passanger.name === athar.name
// Passing a premittive type is like copying the value to a new variable flightNum hence original flight const remain unchanged.

const newPassword = function (document) {
  document.passport = Math.trunc(Math.random * 100000000000);
};

newPassword(athar);
checkIn(flight, athar);
console.log(athar);

/*
In programing there are two terms used when dealing with functions. Passing by reference and passing by values.
JavaScript only support passing by vlues not reference. 
 
*/
