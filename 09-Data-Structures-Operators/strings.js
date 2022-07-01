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

let announcements =
  'To all customers, please come to boarding gate # 23, all customers to boading gate # 23 please';

announcements = announcements.replaceAll('gate', 'door');
// console.log(announcements);

//using regex or regular expression to replace a string with some other string
announcements = announcements.replace(/customers/g, 'passengers');
console.log(announcements);

//Boolean output
const ticketRef = 'Airbus A320neo';
console.log(ticketRef.includes('A320')); //true
console.log(ticketRef.includes('a320')); //false
console.log(ticketRef.includes('320n')); //true
console.log(ticketRef.startsWith('Airbus')); //true

if (ticketRef.startsWith('Airbus') && ticketRef.endsWith('neo')) {
  console.log(`${ticketRef} is for New type of Airbus called 'Neo'`);
}
const notAllowed = ['gun', 'knife', 'arsnel', 'weapon', 'pistol', 'milk'];

//A function to check if baggage items are in allowed categories
const bagageCheck = function (items) {
  const baggage = items.toLowerCase();

  if (notAllowed.indexOf(baggage) > -1) {
    console.log(
      `Beause you got ${items}, that's why you are not allowed to travell`
    );
    console.log(
      `NOTE: The following items are prohibited to take on board: ${notAllowed}`
    );
    console.log(notAllowed.indexOf(baggage));
    console.log(
      '---------------------------------------------------------------- '
    );
  } else {
    console.log('Welcome on board');
    console.log(notAllowed.indexOf(baggage));
    console.log(
      '---------------------------------------------------------------- '
    );
  }
};

bagageCheck('KNIFE');
bagageCheck('GUN');
bagageCheck('Cloths');
bagageCheck('milk');

//Split method

const jubrish = 'this+is+jubrish+text'.split('+');
console.log(jubrish);

const fullName = 'Athar Naqvi';
const [firstname, lastname] = fullName.split(' ');
console.log(`First name: ${firstname}`);
console.log(`Last name: ${lastname}`);

const newName = ['Mr.', firstname, lastname].join(' ');
console.log(newName);

//Convert first letter of a sentence to upper case

const capitalizeName = function (name) {
  const names = name.split(' ');
  const fullNames = [];
  for (const n of names) {
    //fullNames.push(n[0].toUpperCase() + n.slice(1));
    fullNames.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(fullNames.join(' '));
};

capitalizeName('syed athar ali naqvi');
capitalizeName('john mick tan');

//Padding padStart and padEnd

const paddStr = 'A320neo';
console.log(paddStr.padStart(12, '#').padEnd(16, '#'));

//Hide credit card number except last 4 digits

const hideStrFunc = function (Numb) {
  const str = Numb + '';
  const strLast = str.slice(-4);
  return strLast.padStart(str.length, '*');
};

console.log(hideStrFunc(31313215613));
console.log(hideStrFunc(123456789123456));

// Repeate the same strings x number of times

const badWeatherAlert = 'Bad weather Alert, ... all flights are delayed';
console.log(badWeatherAlert.repeat(4));
