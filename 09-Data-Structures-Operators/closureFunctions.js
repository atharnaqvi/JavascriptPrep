'use strict';

/*
💥💥💥💥💥💥💥💥    Closure
👉 When our functions get called, we create a live store of data (local memory/variable environment/state) for that function's execution context.
👉 When the function finishes executing, its local memory is deleted (except the returned value).
👉 But what if our functions could hold on to live data/state betwen executions? 😮
👉 This would let our function definitions have an associated cache/persistent memory.
👉👉 But it starts with returning us returning a funciton from another function.

☝️☝️☝️☝️   Persistent Lexical Scope Reference (PLSR) Backpack
☝️☝️☝️☝️   Close Over Variable Environment (COVE) Backpack
☝️☝️☝️☝️☝️☝️☝️☝️☝️   This Back pack is called Closure
this is also called Module Patern 

Closure's Definitions
👉  A closure is the closed-over variable environment of the execution conext in which a funciton was created, een after that execution context is gone. 
less formal
👉  A closure gives a function access to all the variables of it's parent function, even after that parent function has returned. The
function keeps a reference to it's outer scope, which preserves the scope chain throught time. 

👉  A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.

Very Informal definition
👉  A closure is like a backpack that a function carries around where it goes. This backpack has all the variables that were present in the environment where
the function was created. 

☝️  We do not have to manually create closures, this is a Javascript feature that happens automatically. We can't even access
closed-over variables explicitly. A closure is NOT tangible JavaScript object. 

  
*/

function outer() {
  //   console.log(counter);
  let counter = 0;
  function incrementCounter() {
    counter++;

    console.log(counter);
  }

  return incrementCounter;
}
let myNewFunc = outer(); // myNewFunc = incrementCounter()

myNewFunc();
myNewFunc();
myNewFunc();

const anotherFunc = outer(); // myNewFunc = incrementCounter()

anotherFunc();
anotherFunc();

console.dir(myNewFunc);
console.dir(anotherFunc);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(`The funciton run within function g ${a * 2}`);
  };
};

const k = function () {
  const b = 100;
  f = function () {
    console.log(`The function run within function K ${b * 5}`);
  };
};

g();
f();
console.dir(f);
k();
f();
console.dir(f);

let d = {
  a: 2,
  b: 24,
};
console.dir(d);
console.dir(g);

//Example 2

const boarPassangers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passangers`);
    console.log(`There are 3 groups, with each ${perGroup} passangers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boarPassangers(210, 6);
console.dir(boarPassangers);
console.dir(setTimeout);
