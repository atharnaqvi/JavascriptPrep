'use strict';

// let message = document.querySelector('.message').textContent;
// console.log(message);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);
var firstname = 'Fizza';
//var creats a property in the global object hence this.firstname will give Fizza which is q
// dangrous. We should never use "var" to create a variable.
const myObj = {
  firstname: 'Athar',
  lastname: 'Naqvi',
  dob: 1976,
  calcAge: function () {
    let todaysYear = new Date().getFullYear();
    let age = todaysYear - this.dob;
    console.log(age);

    //Solution 1: Before ES6 solution
    // const self = this; //this or that
    // const millinials = function () {
    //   console.log(self);
    //   console.log(self.dob >= 1985 && self.dob <= 1996);
    //   // console.log(self);
    //   // console.log(this.dob >= 1985 && this.dob <= 1996);
    // };
    // millinials();

    //Solution 2: After ES6 solution
    // Arrow function inherit the this keyword from the parent scope
    const millinials = () => console.log(this.dob >= 1985 && this.dob <= 1996);
    // console.log(self);
    // console.log(this.dob >= 1985 && this.dob <= 1996);

    millinials();
  },

  myAge: () => {
    console.log(this);
    console.log(`Hey my name is ${this.firstname}`);
    // looks into window object and find a property firstname as created by "var" keyword.
  },
  // Arrow function should not be used in the method as it's prone to bug as doesn't support
  // "this" keyword. It'd give "Hey my name is Undefined".
};

myObj.calcAge();
myObj.myAge();
console.log(this.firstname);
// looks into window object and find a property firstname as created by "var" keyword.

//Date validation functions

const dateValidation = function () {
  let startDate = document.getElementById('startDate').value;
  let endDate = document.getElementById('endDate').value;
  let warningText = document.querySelector('.warningTxt');
  console.log(startDate);
  console.log(endDate);
  if (startDate === endDate) {
    warningText.innerHTML = 'You have selected the same date';
  } else if (startDate >= endDate) {
    warningText.innerHTML = 'You can not enter end date before start date';
  } else {
    warningText.innerHTML = 'You have done well';
  }
};
