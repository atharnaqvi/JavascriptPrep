'use strict';

const resturant = {
  name: 'Sizzling Grill',
  course: ['Starter', 'Main', 'Deserts', 'BBQ'],
  menu: ['Hot Wings', 'Fish Fry', 'BBQ', 'Chicken', 'Cake'],
  address: 'Station Road, Milton Keynes',
  mainMenu: ['Pizza', 'Pasta', 'Biryani', 'Curries', 'BBQ'],
  starterMenu: ['Fries', 'Fish Fry', 'Kebab', 'Salad'],
  order: function (courseIndex, menuIndex) {
    return [this.course[courseIndex], this.menu[menuIndex]];
  },
  openingHours: {
    wed: {
      open: 11,
      close: 23,
    },
    thu: {
      open: 11,
      close: 23,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
    sun: {
      open: 12,
      close: 23,
    },
  },
  orderPizza: function (ing1, ing2, ing3) {
    console.log(`Here is your Pizza with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderCustomPizza: function (mainIng, ...otherIng) {
    console.log(`Your pizza\'s main ingredient is: ${mainIng}`);
    console.log(`However the other ingredients are ${otherIng}`);
  },
};

const {
  name: ResturantName,
  address,
  openingHours,
  menu,
  openingHours: { fri },
} = resturant;
console.log(ResturantName, address, openingHours, menu, fri);
resturant.menu[1] = 'Boiled Fish';
console.log(menu);
resturant.name = 'Turkish Grill';
console.log(ResturantName);

console.log(resturant);
// console.log(resturant.course, resturant.menu);

// const {
//   fri: { open, close },
// } = resturant;

// console.log(open, close);

let [starter, , desert] = resturant.course;
console.log(starter, desert);
[desert, starter] = [starter, desert];

console.log(starter, desert);

console.log(resturant.order(0, 0));

let [a1, a2, a3, a4] = resturant.course;

[a4, a3, a2, a1] = [a1, a2, a3, a4];
console.log(a1, a2, a3, a4);

const arr1 = [a1, a2, a3, a4];
// const arr2 = [b1, b2, b3, b4];

const name = 'Athar';
const letters = [...name];
console.log(letters);
console.log(typeof letters);
// console.log(`${...letters} Naqvi`);
//can't use template litteral with spread operators

// const pizzaIng = [
//   prompt(
//     'Please select 3 ingridients for your delicisous pizza. Ingredient 1?'
//   ),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];
// resturant.orderPizza(...pizzaIng);

//objects

const newResturant = {
  foundedIn: 1990,
  ...resturant,
  foundedBy: 'Athar Naqvi',
};
console.log(newResturant);

const resturantCopy = { ...newResturant };
resturantCopy.foundedBy = 'John Smith';
console.log(newResturant.foundedBy);
console.log(resturantCopy.foundedBy);

//REST Operter
const [a, b, ...otherNumbers] = [1, 2, 3, 4, 5];
console.log(a, b, otherNumbers);

const [firstDish, secondDish, ...otherFood] = [
  ...resturant.starterMenu,
  ...resturant.mainMenu,
];
console.log(firstDish, secondDish, otherFood);

const { sat, sun, ...weekdays } = resturant.openingHours;
console.log(weekdays);

const hours = {
  wed: {
    open: 11,
    close: 23,
  },
  thu: {
    open: 11,
    close: 23,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 12,
    close: 24,
  },
  sun: {
    open: 12,
    close: 23,
  },
};
const { saturday, sunday, ...workingDays } = hours;
console.log(workingDays);

function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.log(add(1, 3, 4, 5));
console.log(add(1, 3));
console.log(add(1, 3, 4, 5, 6, 3, 5, 3));

const newArr = [1, 2, 3, 4];
console.log(add(...newArr));

resturant.orderCustomPizza('Chicken', 'Onion', 'Olives', 'Pepporoni');

let foo = 10;
let result = (null || undefined) ?? foo;
console.log(result);

const emptyText = '';
const message = emptyText ?? 'Hello world';
const messagePrint = emptyText || 'Hello World with OR';
console.log(message); // output = '' as '' is not Null or undefined
console.log(messagePrint); //output: 'Hello World with OR

const rest1 = {
  name: 'Ghori Chargha',
  numGuest: 0,
};

const rest2 = {
  name: 'Lasani Chargha',
  owner: 'Mr Rossi',
};

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

//AND Assignment Operators
// Return the falsy value if there. If truthy then replace it with the left side of the string.
// rest1.owner = rest1.owner && '<ANONYMOUS>'; //{name: 'Ghori Chargha', numGuest: 0, owner: undefined}
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // {name: 'Lasani Chargha', owner: '<ANONYMOUS>', numGuest: 10}

rest1.owner &&= '<ANONYMOUS>'; //{name: 'Ghori Chargha', numGuest: 0}
rest2.owner &&= '<ANONYMOUS>'; // {name: 'Lasani Chargha', owner: '<ANONYMOUS>', numGuest: 10}

console.log(rest1, rest2);

//For Of loop
//destructing the initial variable.
for (const [ind, restu] of resturant.course.entries()) {
  console.log(`${ind + 1}: ${restu}`);
}

const objLiteral = {
  proPerty3: 'value3',
  proPerty4: 'value4',
  oderdeliver() {
    (starterIndex = 1), (mainIndex = 0), (tiem = '20:00');
  },
};

const mainObj = {
  proPerty1: 'value1',
  proPerty2: 'value2',
  objLiteral,
};

console.log(mainObj);

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const schedule = {
  [weekDays[0]]: {
    openingHours: 10,
    closed: 23,
  },
  [weekDays[1]]: {
    openingHours: 10,
    closed: 23,
  },
};

console.log(schedule);

if (resturant.openingHours.wed)
  console.log(resturant.openingHours.wed.openingHours);

//with optional chaning method

console.log(resturant.openingHours.fri?.open);
//without optional chaning method
console.log(resturant.openingHours.thur?.close);
// Uncaught TypeError: Cannot read properties of undefined (reading 'close')
//     at script.js:246:41

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let day of days) {
  const open = resturant.openingHours[day]?.open;
  if (open === undefined) {
    console.log(`On ${day}, we are closed`);
  } else {
    console.log(`On ${day}, we Open at ${open}`);
  }
}

for (let day of days) {
  const open = resturant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we Open at ${open}.`);
}

//to use Optional Chaining with Mehtods

console.log(resturant.order?.(0, 1) ?? 'Mehod does not exist');
console.log(resturant.orders?.(0, 1) ?? 'Mehtods does not exist');

// Optional Chaining to Check if the Array is empty

const users = [
  { fname: 'Athar', lname: 'Naqvi' },
  { fname: 'Fizza', lname: 'Naqvi' },
];

console.log(users[2]?.fname ?? 'User array is empty');

if (users.length > 0 && users.length < 2) console.log(users[0].fname);
else console.log("User's array is empty");

// for (const firstName of users.keys(fname)) {
//   console.log(firstName);
// }

const courses = {
  masters: ['Computer Sceices', 'Law', 'Business', 'Accountency'],
  calculations: () => 2 + 3 + 4,
  returnFunc() {
    console.log(
      `We teaches the following master level courses: ${
        this.masters
      } and fee is ${this.calculations()} and now trying to call the same function `
    );
  },
  callFunc() {
    return this.returnFunc();
  },
};
courses.callFunc();

const weeksDays = function () {
  return 'Monday, Tuesday, Wednesday, Thursday, Friday';
};
const weekendDays = () => 'Saturday, Sunday';
const monthNames = () =>
  'Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec';

const arrOfNames = [
  'These are weekdays',
  weeksDays(),
  'these are weekends',
  weekendDays(),
  'and these are the anems of the months',
  monthNames(),
];
console.log(arrOfNames[0], arrOfNames[1]);
console.log(arrOfNames[2], arrOfNames[3]);
console.log(arrOfNames[4], arrOfNames[5]);

let arrofFirst6Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
arrofFirst6Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'January',
  'February',
  'March',
];
console.log(
  new Set([
    'January',
    'February',
    'March',
    'April',
    'May',
    'January',
    'February',
    'March',
  ]).size
);
let uniqueMonthsSet = [...new Set(arrofFirst6Months)];
console.log(arrofFirst6Months);
console.log(uniqueMonthsSet);
arrofFirst6Months = uniqueMonthsSet;
for (const months of uniqueMonthsSet) {
  console.log(months);
}

console.log(arrofFirst6Months.map(mon => 'Month Name: ' + mon));
console.log(arrofFirst6Months);

arrofFirst6Months.push('Jun');
console.log(arrofFirst6Months);

console.log(new Set('Syed Athar Ali Naqvi').size);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest
  .set('months', ['Jan', 'Feb', 'Mar', 'Apr', 'May'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('name'));
rest.delete(2);
rest.set(document.querySelector('h1'), 'Heading 1');
const arr = [1, 2];
rest.set(arr, 'Test Array as key');
// rest.clear();
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
console.log(rest.get('months'));

const quest = new Map([
  ['question', 'What is the best programing Lanugage in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['Correct', 3],
  [true, 'You got  it right!!!'],
  [false, 'Incorrect answer please try again'],
]);

console.log(quest);

//Convert object to Map
const hour = new Map(Object.entries(openingHours));
console.log(hour);

console.log(quest.get('question'));
for (const [key, value] of quest) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('your answer?'));
const answer = 3;
console.log(answer);

console.log(quest.get(answer === quest.get('Correct')));

// Convert a Map into an Array
console.log([...quest]);
console.log(quest.enteries);
console.log([...quest.keys()]);
console.log([...quest.values()]);

//converting array into Set
const tasks = [1, 0, 1, 0, 1, 0];
console.log(tasks);
const newTask = new Set(tasks);
console.log(newTask);

const newTaskArray = [...newTask];
console.log(newTaskArray);

//********************************** */
//*********CODING CHALLENGE**************************

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow Card'],
  [69, 'Red Card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow Card'],
]);

//1- Create an array 'events' of the different game ev ents that happened(no duplicates)

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2 - After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

//3- Print the following string to the console:

//use pop() method to get the last key of an array
const totalTime = [...gameEvents.keys()].pop();
//conventional method of getting the last key of an array
// let totalTime = [...gameEvents.keys()];
// totalTime = totalTime[totalTime.length - 1];
console.log(totalTime);
console.log(
  `An event happened, on average, every ${(totalTime / gameEvents.size).toFixed(
    2
  )} minutes`
);
//4 - LOOP Over the evnts and log them to the console, marking wheter it's in the first half or second half (after 45 min)
// Like this: [FIRST HALF] 17: GOAL

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

//******************STRINGS and thir METHODS */

const myName = 'Syed Athar Ali Naqvi';
const yob = 'Sep1976';

console.log(yob[0]);
console.log(yob[1]);
console.log(yob[2]);
console.log('Sep1976'[0]);
console.log(myName.length);
console.log('Syed Athar Ali Naqvi'.length);
console.log(myName.indexOf('A'));
console.log(myName.lastIndexOf('a'));
console.log(myName.indexOf('Naqvi'));

// Slice give the begin prameter. In other words it gives the position where the extraction will beign
// the following is called substring
//This doesn't change the underlying string
console.log(myName.slice(5));
//can also defined end parameter
console.log(myName.slice(5, 11));
//to slice where we do not know the hard coded number
console.log(0, myName.lastIndexOf(' '));
console.log(myName.lastIndexOf(' ') + 1);
console.log(myName.slice(myName.indexOf(' '), myName.lastIndexOf(' ')));

console.log(myName.slice(-5));
console.log(myName.slice(myName.indexOf(' ') + 1, -5));

//Write a function to find out if it's a middle seat (B and E are middle seats)

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E' || s === 'b' || s === 'e')
    console.log(`Your seat# ${seat} is in the middle !!!`);
  else console.log(`Your seat# ${seat} on the side row.`);
};

checkMiddleSeat('11A');
checkMiddleSeat('5E');
checkMiddleSeat('22D');
checkMiddleSeat('26b');

// We know that strings are just premittive so why do they have methods?
// Shouldn't methods only be available for objects such as arrays
// JavaScript is really smart so here is how it works
// Whenever we call a method on a string, javascript in the background automatically converts the string
// premittive to an object with the same contents and then on that object the methods are called.
// This process is called Boxing
// Because it takes all the strings and put them into a box which is the object

// So behind the scenes javascript does this conversion
console.log(new String('Athar'));
console.log(typeof new String('Athar'));
// string type now is an object

// But as a result it returns a string
console.log(typeof new String('Athar').slice(1));

const airline = 'Pakistan International Airlines';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name

const passenger = 'atHAR'; // Athar
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Compare emails
const email = 'atharnaqvi@gmail.com';

const loginEmail = '       AtharNaqvi@gmail.com          \n';
console.log(loginEmail);
const loginEmailLower = loginEmail.toLowerCase();
const emailTrimmed = loginEmailLower.trim();
console.log(emailTrimmed);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

//ES6 also allowed trimStart() or trimEnd() methods

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passenger come to boarding door 23. Boarding door 23!!!';
// console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // in older version of Javascript use regular expression
// console.log(announcement.replaceAll('door', 'gate')); // only supported in newer versions of Javascript

//Include //startsWith- Boolean
const plane = 'Airbus A320neo';
console.log(plane.includes('320'));
console.log(plane.includes('bus A'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//practice exercise

const checkBaggage = function (items) {
  items = items.toLowerCase();
  if (items.includes('gun') || items.includes('knife')) {
    console.log(
      'You carry unauthorised items in your baggage and not allowed to board the plane!!!'
    );
  } else {
    console.log('Welcome aboard!!!');
  }
};

checkBaggage("I've got Food items, a Knife");
checkBaggage("I've Socks and camera");
checkBaggage('Got some snakes and a guns for protection');

const myFullName = 'athar naqvi';
let [firstname, lastname] = myFullName.split(' ');
console.log(firstname[0].toUpperCase() + firstname.slice(1), lastname);
console.log(lastname);

const newName = [
  'Mr.',
  firstname[0].toUpperCase() + firstname.slice(1),
  lastname.toUpperCase(),
].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  console.log(names);
  const namesUpper = [];
  for (const eachWord of names) {
    // namesUpper.push(eachWord[0].toUpperCase() + eachWord.slice(1));
    namesUpper.push(eachWord.replace(eachWord[0], eachWord[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('syed athar ali naqvi');
capitalizeName('sakina ali syed');

//**********PADDING */

const messages = 'Go to Gate 23!';
console.log(messages.padStart(15, '*').padEnd(25, '*'));

// Create Masking for Bank Credit cards

const maskedCreditCard = function (num) {
  num = num + '';
  const last = num.slice(-4);
  return last.padStart(num.length, '*');
};

console.log(maskedCreditCard(1234567812345678));
console.log(maskedCreditCard(8765432187654321));
console.log(maskedCreditCard(87654321));

//***********REPEAT */

const name3 = 'Bill Gates * ';
console.log(name3.repeat(5));

const planeDelayed = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planeDelayed(5);
planeDelayed(12);
planeDelayed(3);

//To test if . and @ sign included in an email address

const checkValidEmail = function (email) {
  if (email.includes(' ')) {
    console.log(`The email address ${email} is not valid`);
  } else {
    console.log(
      `This email address ${email} ${
        email.includes('@') && email.includes('.')
          ? 'is Valid.'
          : 'is not valid.'
      }`
    );
  }
};

checkValidEmail('atharnaqvi@gmail.com');
checkValidEmail('athar naqvi@gmail.com');
checkValidEmail('atharnaqvi@gmailcom');
checkValidEmail('atharnaqvigmail.com');
checkValidEmail('atharnaqvigmailcom');

//***************Coding Challenge********** */

// Write a program that receives a list of variable names written in underscore_case
// and convert them to cmelCase

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
});
