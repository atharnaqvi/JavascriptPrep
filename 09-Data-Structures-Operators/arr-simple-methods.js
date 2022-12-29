'use strict';

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const arr2 = arr.slice(2, 5);

//Slice method
// slice method doesn't mutate the original array
console.log(arr2[1]);
console.log(arr.slice(-1)); // to display the last element of the array
console.log(arr.slice(2, -2));

//to create a shallow copy of the array just like spread operator

console.log(arr.slice());
console.log([...arr]);

//Splice method
//splice method mutate the original array
console.log(arr.splice(2));
console.log(arr); //notice how splices has deleted array from arr[2] onwards

// example
const arr3 = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const arr4 = arr3.splice(6);
console.log(arr3);
console.log(arr4);

// example 3
// use begin and end parameters
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(days);
console.log(days.splice(2, 3));

//Reverse
// reverse method mutate the array
const arr5 = ['k', 'j', 'i', 'h', 'g', 'f', 'e', 'd'];
console.log(arr5.reverse());
console.log(arr5);

// Concat
// concat doesn't mutate the array involved
const arr6 = ['a', 'b', 'c'];
const letters = arr6.concat(arr5);
console.log(letters);
console.log([...arr6, ...arr5]); //We've used spread method before and it doesn't mutate the array

// Join
console.log(letters.join(' - '));

//Push, shift, Pop, Index of, Includes

//At Method

const arr7 = [22, 44, 34, 24, 27];
console.log(arr7[1]);
console.log(arr7.at(1));

//Getting the last element of the array
console.log(arr7[arr7.length - 1]);
console.log(arr7.slice(-1)[0]);
console.log(arr7.at(-1));

//AT method also work on strings
console.log('Athar'.at(0));
console.log('Athar'.at(-1));

const str1 = 'Naqvi';
console.log(str1.at(0));
