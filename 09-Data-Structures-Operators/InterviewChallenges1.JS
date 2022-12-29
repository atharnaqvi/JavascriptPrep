'use strict';

// 1. Write code to get array of names from given aray of users

const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
  },
  {
    id: 2,
    name: 'John',
    isActive: true,
  },
  {
    id: 3,
    name: 'Mike',
    isActive: false,
  },
];
/*
Basic user style of solving the problem 
const names = [];
for (const username of users) {
  names.push(username.name);
}
*/
// Expert user style
/*const names = [];
users.forEach(user => {
  names.push(user.name);
});
*/
// Expert user style end here.

// The best way of writing the code
const names = users.map(user => user.name);
// The best way of writing the code

console.log('Name:', names);
console.log(Array.isArray(names));
