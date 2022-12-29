'use strict';

// Example of Call Back function (Higher order function and lower order function)

const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

const calculatorFunc = function (num1, num2, fn) {
  // const fnName = fn.name;
  const symbol = function (fn) {
    if (fn.name === 'add') {
      return '+';
    } else if (fn.name === 'subtract') {
      return '-';
    } else if (fn.name === 'multiply') {
      return '*';
    } else if (fn.name === 'divide') {
      return '/';
    } else {
      return 'Wrong function name';
    }
  };

  console.log(`${num1} ${symbol(fn)} ${num2} = ${fn(num1, num2)}`);
};

calculatorFunc(3, 5, add);
calculatorFunc(3, 5, subtract);
calculatorFunc(3, 5, multiply);
calculatorFunc(15, 5, divide);
