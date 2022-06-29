'use strict';

const airline = 'Pakistan Air Line';
console.log(airline.length);
console.log(airline.indexOf('i'));
console.log(airline[0]);
console.log(airline[1]);
console.log(airline[2]);
console.log(airline[3]);
console.log(airline.indexOf('Air'));
console.log(airline[airline.length - 1]);

const fname = 'athar';
let firstLetter = fname[0].toUpperCase();
console.log(firstLetter);
let fullWord = fname.charAt(0).toUpperCase() + fname.slice(1);
console.log(fullWord);
console.log(airline.slice(9));
console.log(airline.slice(9, 13));
console.log(
  airline.slice(0, airline.indexOf(' ')) +
    airline.slice(airline.lastIndexOf(' '))
);

console.log(airline.slice(-1));
console.log(airline.slice(1, -2));

// Write a function to Find if the seat is a middle seat
// B and E are the middle seats

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`${seat} is a middle seat`);
  } else {
    console.log(`${seat} is not a middle seat`);
  }
};

checkMiddleSeat('11A');
checkMiddleSeat('24B');
checkMiddleSeat('41F');
checkMiddleSeat('22E');

//a function to correct the first capital letter and rest lower case.
//let passenagerName = prompt('Enter your name: ');
const passenagerName = 'atHAR';
const capitalisation = function (strName) {
  const correctName =
    passenagerName.charAt(0).toUpperCase() +
    passenagerName.slice(1).toLowerCase();
  console.log(correctName);
};

capitalisation(passenagerName);

// Comparing two email address

const email = 'atharnaqvi@gmail.com';
let inputEmail = '    aTHARNAQVI@GMAIL.COM \n';

inputEmail = inputEmail.toLowerCase().trim();
console.log(inputEmail);
inputEmail === email
  ? console.log('email is valid')
  : console.log('email is not valid');

//trim() method is used to take off any empty string values
// there is also in ES6 trimStart and trimEnd methods

const testStr = '    laskdl    ';
const trimStartTest = testStr.trimStart();
console.log(`Trim Start Test: ${trimStartTest}`);

const trimEndTest = testStr.trimEnd();
console.log(`Trim End Test: ${trimEndTest}`);

const trimTest = testStr.trim();
console.log(`Trim test : ${trimTest}`);

//replace a string with some other string

const priceUK = '£233,22';
const priceUS = priceUK.replace('£', '$').replace(',', '.');
console.log(priceUS);
