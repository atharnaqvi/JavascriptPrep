'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Now we can compute property names
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Data needed for first part of the section
const openingHours = {
  [weekDays[4]]: {
    open: 12,
    close: 22,
  },
  [weekDays[`${4 + 1}`]]: {
    open: 8,
    close: 22,
  },
  [weekDays[`${2 + 4}`]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  rating: 'A star',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderMenu: function (categoryIndex, starterIndex, mainIndex) {
    return [
      this.categories[categoryIndex],
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
    ];
  },
  oderDelivery: function ({
    time = '18:00',
    starterMenu = 0,
    mainIndex = 0,
    address = 'House of Lords',
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterMenu]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // orderPizza: function (tpping1, topping2, topping3) {
  //   console.log(
  //     `Your pizza is order with ${tpping1}, ${topping2} and ${topping3}`
  //   );
  // },    // old way of writing a perperty and assigning a function to it

  orderPizza(tpping1, topping2, topping3) {
    console.log(
      `Your pizza is order with ${tpping1}, ${topping2} and ${topping3}`
    );
  }, // ES6 Function keyword and : is not required.

  openingHours: openingHours, // old way to call an outside array within an object

  openingHours, //ES6 way to call an outside array within an object
};

console.log(restaurant);
restaurant.oderDelivery({
  time: '20:30',
  address: '15 Clapham Place, Bradwell Road, Bedford',
  mainIndex: 2,
  starterMenu: 1,
});

restaurant.oderDelivery({
  starterMenu: 2,
});

let [main, , , secondary] = restaurant.categories;
console.log(main, secondary);

////Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];

console.log(main, secondary);

const [category, starter, mainCourse] = restaurant.orderMenu(0, 1, 0);

console.log(
  `Food category: ${category} and for Starter: ${starter} and finally for Main Course: ${mainCourse}`
);

//nested destructuring
const nestedArr = [2, 4, [6, 7]];

const [i, , [, k]] = nestedArr;

console.log(i, k);

// Setting a Default value in destructuring
//This feature is very useful when getting data from APIs

const [p = 'NA', q = 'NA', r = 'NA'] = [, 5];
console.log(p, q, r);

// const { name, openingHours, categories, rating } = restaurant;
// console.log(name, openingHours, categories, rating);
// console.log(restaurant.location);

//default values (objects)

const {
  name: resturantName = '',
  starterMenu: starters = [],
  owner = 'Not available',
} = restaurant;
console.log(
  `Resturant Name: ${resturantName}, Starter Menu: ${starters}, Owner: ${owner}`
);

// Mutating variables

let a = 222;
let b = 333;
let c = 999;
let obj = { a: 23, b: 423, c: 342 };

({ a, b, c } = obj);
console.log(a, b, c);
({ a, b, c } = { c, b, a });

console.log(a, b, c);

// Nested Objects destructuring

const {
  Fri: { open: o = 'Open', close: cl = 'Closed' },
} = restaurant.openingHours;
console.log(o, cl);

// Spread Array

const firstQuarter = ['Jan', 'Feb', 'Mar', 'Apr'];
const secondQuarter = ['May', 'Jun', 'Jul', 'Aug'];
const thirdQuarter = ['Sep', 'Oct', 'Nov', 'Dec'];

console.log(firstQuarter[1]);

const wholeYear = [...firstQuarter, ...secondQuarter, ...thirdQuarter];
console.log(wholeYear);

console.log(...firstQuarter[1]);

const newMenu = [...restaurant.mainMenu, 'Biryani'];
console.log(newMenu);
console.log(restaurant.mainMenu);

const menu = [...newMenu, ...restaurant.starterMenu];
console.log(menu);

const myName = 'Athar Ali Naqvi';
const letters = [...myName];
console.log(letters);
console.log(...myName);
const testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(...testNumbers);
const newTestNumbers = [...testNumbers];
console.log(newTestNumbers);

//----------- A real Wotrld Example
const toppings = [
  //   prompt(
  //     'Your delicsious pizza is ready to take customized 3 topings!!! Topping 1?'
  //   ),
  //   prompt(
  //     'Your delicsious pizza is ready to take customized 3 topings!!! Topping 2?'
  //   ),
  //   prompt(
  //     'Your delicsious pizza is ready to take customized 3 topings!!! Topping 3?'
  //   ),
];

//restaurant.orderPizza(toppings[0], toppings[1], toppings[2]);
restaurant.orderPizza(...toppings);

//------------------- Objects -- Since ES2018 Spread operators also work on Objects

const newRestaurant = {
  foundedIn: 1997,
  ...restaurant,
  founders: ['John Smith', 'Tim Southe', 'Michael More'],
};

console.log(newRestaurant);

//-------------- Create a shallow object

const restaurantCopy = { ...newRestaurant };
console.log(restaurantCopy);
restaurantCopy.name = 'Bismillah Hotel';
console.log(restaurantCopy.name);
console.log(newRestaurant.name);

// Rest Pattern
// Rest, same ...notation but on the left side of the = operator.

const [d, e, f, ...other] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(d, e, f, other);

let [g, ...others] = 'athar';
let firstLetter = g.toUpperCase();
console.log(firstLetter);
const newName = [firstLetter, ...others];
const converstionToString = newName.toString();
console.log(converstionToString);

const [Pizza, , , Biryani, ...restOfMenu] = [
  ...newMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Biryani, restOfMenu);

const { sat, ...restOftheWeak } = restaurant.openingHours;
console.log(sat, restOftheWeak);

// using Rest structure method add x numbers together

const addFunc = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
  // return sum;
};

addFunc(2, 4, 5);
addFunc(2, 5, 6, 5, 3, 8, 3);
addFunc(3, 7, 34, 5, 3, 5);

const xyz = [3, 5, 33, 123];
addFunc(...xyz);
addFunc(xyz); // not correctly implemented

// Short-Circuting (OR)
// it'll evaluate and return the first truthy value, if the first one is truthy value then it'll not evaluate the second value and return the value itself
console.log('---------- OR Short Circuting --------------');
console.log('4' || 'Athar');
console.log('' || 'Athar');
console.log(undefined || null);
console.log(false || '' || true);
console.log(0 || 1);
console.log(-5 || 4);

//Short circuit example with restaurant object
// restaurant.numGuests = 23;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

const newGuests = restaurant.numGuests || 10;
console.log(newGuests);

// Short-Circuting (AND)
// it'll evaluate and return the first falsy value, if the first one is falsy value then it'll not evaluate the second value and return the value itself
console.log('---------- AND Short Circuting --------------');

console.log('4' && 'Athar');
console.log('' && 'Athar');
console.log(undefined && null);
console.log(false && '' && true);
console.log(0 && 1);
console.log(-5 && 4);

// Practical Example:

if (restaurant.orderPizza) {
  restaurant.orderPizza('Mashrooms', 'spinich', 'Chicken');
}

restaurant.orderPizza &&
  restaurant.orderPizza('Hallapenos', 'Grill Chicken', 'Onion');

// The Nullish Coalesing Operators
// this is introduce ES2020
// if the first value is 0 which could be a real number but coz it's falsy value, || short circut will ignore it as falsy value which will
// return unexpected value
console.log('---- Problemas ----');
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests || 10;
console.log(guests1);

console.log('====== Solution using Nulish Coalesing Operators=======');
const guestsSolution = restaurant.numGuests ?? 10;
console.log(guestsSolution);

const rest1 = {
  name: 'Capri',
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR Assignment Operator
//rest1.numGuest = rest1.numGuest || 20; // old way
//rest2.numGuest = rest2.numGuest || 20; //old way
// rest1.numGuest ||= 20; // new way but faulty with Nulish value
// rest2.numGuest ||= 20; // new way but faulty with Nulish value

// new way with Nulish operator to resolve 0 or '' value as a real number not falsy
rest1.numGuest ??= 0;
rest2.numGuest ??= 0;

// To make the owner of the restaurant to annonymize the owner name
rest1.owner &&= 'Anon';
rest2.owner &&= 'Anon';

console.log(rest1);
console.log(rest2);
//*****************************************************

restaurant.openingHours.Mon && console.log(restaurant.openingHours.open);

//  With Optional Chaining

console.log(restaurant.openingHours.Mon?.open);

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we are open at ${open}`);
}

// Optional Chaining with Methods
console.log(restaurant.orderPizza?.(0, 1) ?? 'Method doesn not exist');

// Optional Chaining with Arrays

const users = [
  {
    name: 'Athar',
    email: 'atharnaqvi@gmail.com',
  },
];

console.log(users[0]?.name ?? 'Users array is empty');

const users2 = [];
console.log(users2[0]?.email ?? 'Users2 array is empty');

console.log(
  '------------------Property Names-----------------------------------'
);

//older way to show the keys of a property within Methods
const properties = Object.keys(openingHours);
console.log(properties);

//using For-of mehtod to show the keyes within Methods

let openStr = `We are open for ${properties.length} days`;

console.log(restaurant.openingHours);
for (const day of Object.keys(openingHours)) {
  openStr += `, ${day} `;
}
console.log(openStr);

// more advance way

for (const day of properties) {
  console.log(day);
}

console.log(`----------------Values-----------------------`);

const val = Object.values(openingHours);
console.log(val);

for (const valu of val) {
  console.log(valu);
}

//Key values
const entries = Object.entries(openingHours);
//console.log(entries);

for (const [days, { open, close }] of entries) {
  console.log(
    `The restaurant will open on ${days}  at ${open} and close at ${close}`
  );
}

const [l, h, j] = [];
console.log(l, h, j);

const strVar = 'Athar';
const letterStrVar = [...strVar];
console.log(letterStrVar);

//Rest Pattern

const [a1, b1, ...x1] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`a1: ${a1} ,b1: ${b1}, x1: ${x1}`);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(3, 4, 3, 4, 3, 4);
add(5, 9, 7, 5, 7, 5, 8, 4, 7, 5);
add(4, 3, 5, 5, 6, 9, 8, 4, 7, 5);

const xy = [3, 4, 3, 4, 33, 242, 43, 24, 33, 242];
add(...xy); //used spread element to pass the value into a function

//Short Circuting

const xFalsy = 0;
let xTruthy = 'Athar';
console.log(xFalsy || xTruthy);

//Nulish Coalescing Operator to replace || to resolve 0 and '' string bug

console.log(xFalsy ?? xTruthy);
let orLogical = xFalsy;
let nulishTest = xFalsy ?? 10;
console.log(nulishTest);

// Or Logical operators (introduce in ES2021)
//Nulish Coalescing Operator to replace || to resolve 0 and ''

orLogical ??= 'set to falsy value';

console.log(orLogical);

xTruthy &&= '<ANONYMOUS>';
console.log(xTruthy);
