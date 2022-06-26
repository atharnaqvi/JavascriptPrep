'use strict';

const firstSet = new Set('athar');
console.log(firstSet);

const secondSet = new Set(['Men', 'Woment', 'Men', 'men', 'women']);
console.log(secondSet);
console.log(secondSet.size);
console.log(secondSet.has('men'));
console.log(secondSet.has('athar'));

const foodItem = new Set([
  'Pasta',
  'Pizza',
  'Pasta',
  'Pizza',
  'Risotto',
  'Risotto',
]);

foodItem.add('Garlic Bread');
foodItem.add('Garlic Bread');
// foodItem.delete('Risotto');
// foodItem.clear();

// console.log(foodItem.keys());
for (const food of foodItem) console.log(food);

const staffArr = ['Waiter', 'Manager', 'Chef', 'Manager', 'Chef', 'Manager'];

// creating a Set from an Array
const staffUnique = new Set(staffArr);
console.log(staffUnique);

// Reverse order. Create an array from Set after it remove duplicate values

const staffUniqueArray = [...new Set(staffArr)];
console.log(staffUniqueArray);
console.log(staffUniqueArray.values());

const uniqueValues = new Set(staffArr).size;
console.log(`Size of staffArr: ${staffArr.length}`);
console.log(`Unique size of staffArr: ${uniqueValues}`);
