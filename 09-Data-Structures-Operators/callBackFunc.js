'use strict';

function calculateFunc(array, func) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(func(array[i]));
  }
  return output;
}
const val = prompt('Enter a value to multply');
function multiply(input) {
  return input * val;
}

const arrayValue = [1, 2, 3, 4];

console.log(calculateFunc(arrayValue, multiply));
