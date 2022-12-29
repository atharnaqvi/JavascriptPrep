'use strict';
//calling function within a function (JavaScript calls it closour or sth like it)

const greatings = function (greet) {
  return function (name) {
    console.log(`${greet} ${name}`);
  };
};

const greetMsg = greatings('Hey');

greetMsg('Athar');
greatings('Hello')('Mr. Naqvi');

// Using Arrow function returning another arrow function

const greatingsArr = great => names => console.log(`${great} ${names}`);

const greetMsgArr = greatingsArr('Hey');

greetMsgArr('John');
greatingsArr('Hello')('Mr. Smith');
