'use strict';
// Call back functions

/*
First Class Functions

👉 JavaScript treats functions as first class citizens
👉 This means that functions are simply values
👉 Functions are just another "type" of object

👉 Store Functions in variables or perperties
const add = (a, b) => a + b;

const counter = {
    value: 23,
    inc: function(){this.value++;}
}

👉 Pass functions as arguments to OTHER functions
const great = () => console.log('Hey Johns');
btnClose.addEventListener('click', great)

👉 Return function FROM functions
👉 Call methods on functions
counter.inc.bind(someotherObject);)
*/

/*
Higher-Order Functions

1- 👉 A function that receives another function as an argument, that returns a new fucntion, or both
const great = () => console.log('Hey Johns');
btnClose.addEventListener('click', great);
            ☝️ addEventListner is Heigher order function
            the function (great) which is called in is called call-back function

👉 This is only possible because of first-class functions

2- 👉 Function that returns new function
function count(){
    let counter = 0;
    return fucntion(){
        counter++;
    };
}

*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const firstUpperWord = function (str) {
  let [firstWord, secondWord] = str.split(' ');

  firstWord = firstWord[0].toUpperCase() + firstWord.slice(1);
  secondWord = secondWord[0].toUpperCase() + secondWord.slice(1);
  return firstWord + ' ' + secondWord;
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Transformed string ${fn(str)} is transformed by ${fn.name}`);
};

transformer('Athar Naqvi @ Gmail .com', oneWord);
transformer('athar naqvi', firstUpperWord);

const high5 = function () {
  console.log('👋👋👋👋');
};

document.body.addEventListener('click', high5);

['abc', 'def', 'ghi', 'jkl'].forEach(high5);

//JavaScript always use call back function
// Call back functions allow us to use abstraction
// Higher order function works at higher level of abstraction to hide the details of lower level functions
