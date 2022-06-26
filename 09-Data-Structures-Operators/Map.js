'use strict';

const rest = new Map();
rest.set('name', 'Nandos');

rest.set(1, 'Central, Milton Keynes');
console.log(rest.set(2, 'London, UK'));

rest
  .set('categories', ['Pasta', 'Pizza', 'Pasta', 'Pizza', 'Risotto', 'Risotto'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest);
console.log(rest.get('Open'));
console.log(`We are closed at ${rest.get('Close')}`);

const time = 7;
console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

//***************************************************** */

const questions = new Map([
  ['Question', 'What is the best programming language you have available?'],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [4, 'PHP'],
  [5, 'C#'],
  ['correct', 3],
  [true, 'You got the correct answer 🎉🎉🏆🏆'],
  [false, 'Try again  😥💥💥💥⛔⛔⛔⛔'],
]);

console.log(questions);

console.log(questions.get('Question'));
for (const [key, value] of questions) {
  if (typeof key === 'number') console.log(`${key}: ${value}`);
}
const answer = 3;
// const answer = Number(prompt('Your answer?'));
console.log(answer);

//map.get(true/false) to print the value of keys true or false
console.log(questions.get(questions.get('correct') === answer));

// convert map to Array

console.log([...questions]);
console.log(questions.entries());
console.log([...questions.keys()]);
console.log([...questions.values()]);
