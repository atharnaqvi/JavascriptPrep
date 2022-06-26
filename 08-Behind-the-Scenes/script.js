'use strict';
// var firstNameTest = 'John Smith';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `You born in ${age}, in the year ${birthYear}`;

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       //Creating a new variable 'firstName' similar to a vaiable in the outer scope.
//       const firstName = 'Fizza'; // JS will not do any variable lookup if it finds it in the current scope
//       //Reassign a new value to pre-defined vaiable in the outer scope
//       output = 'New OUTPUT';
//       const str = `${firstName} ${lastName} you are a Millenial`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     //console.log(add(2, 4)); // to verify that functions are block scoped starting in ES6
//     //if remove strict mode than it'll work otherwise it'll give Referece error

//     console.log(output);
//   }
//   printAge();
//   console.log(`${firstName} ${lastName}`);

//   return age;
// }

// function printAge() {
//   console.log(`Another function with the same name as defined above by ${firstName} ${lastName}`);
// }

// const lastName = 'Naqvi';
// const firstName = 'Athar';
// calcAge(1991);
// printAge();

// //Temporal Dead Zone

// console.log(a);
// // console.log(b);   //TDZ for const and let
// // console.log(c);

// console.log(abc(3, 4));
// //console.log(addExpression(3, 4)); //with var declaration JS error message looks like 'addExpression is not a function' actually means that var is "undefined"
// //console.log(addArrow(5, 5));

// var a = 'hello';
// let b = 'world';
// const c = 'hello world';

// // Functions

// function abc(a, b) {
//   return a + b;
// }

// var addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;
// console.log(window.a); //variable is defined in  window object
// console.log(window.b);
// console.log(window.c);

// //////////////////////////////////////////////////
// // Bug with VAR declaration
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart(); //because of hoisting var value is undefined at this point hence it'll be a falsy value and run the function to delete the shopping cart

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!!!');
// }

// /////////////////////////////////////////////////////////
// // this keyword
// console.log(this);

// function calcAge(birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// }
// calcAge(1976);

// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1975);

// //Using this keyword in a method

// const bioData = {
//   fname: 'Athar',
//   lname: 'Naqvi',
//   dob: 1975,
//   calcAge: function (birthYear) {
//     console.log(2022 - this.dob);
//     console.log(this);
//   },
// };
// bioData.calcAge();

// //Object borrowing

// const myData = {
//   dob: 1992,
// };

// myData.calcAge = bioData.calcAge;
// myData.calcAge();

// const bioData1 = {
//   fname: 'Athar',
//   lname: 'Naqvi',
//   dob: 1975,
//   calcAge: function (birthYear) {
//     console.log(2022 - this.dob);
//     console.log(this);
//   },
//   greet: () => console.log(`Hey ${this.firstNameTest}`),
// };
// bioData1.greet();

// // Argument keyword

// const argumentKeywords = function (a, b, c) {
//   console.log(arguments);
//   const result = a + b + c;
//   console.log(result);
//   return result;
// };
// argumentKeywords(4, 5, 4, 2, 4, 23);

let age = 30;
let oldAge = age;
age = 34;

console.log(age);
console.log(oldAge); //because age was 30 when the value was assigned to oldAge

////////////////////////////////////////////////////////////////////////

let me = {
  fname: 'Athar',
  age: 34,
};

let friend = me;

friend.age = 30;

console.log('Me', me);
console.log('Friend', friend);
