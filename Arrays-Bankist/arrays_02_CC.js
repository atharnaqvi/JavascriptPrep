'use strict';
/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀

*/

/*
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
*/
const dogAgeConverter = function (dogAgeArr) {
  const dogAgeUnder2 = dogAgeArr.filter(age => age <= 2);
  const dogAgeAbove2 = dogAgeArr.filter(age => age > 2);
  const calcAgeUnder2 = dogAgeUnder2.map(age => age * 2);
  const calcAgeAbove2 = dogAgeAbove2.map(age => 16 + age * 4);
  const dogHumanAge = calcAgeUnder2.concat(calcAgeAbove2); // Task 1

  //better way to calculater human age
  const humanAges = dogAgeArr.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);
  /*
Task 2: Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
*/
  const dogHumanAge18Above = dogHumanAge.filter(age => age >= 18);

  /*
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
*/
  const calcAverageHumanAge = dogHumanAge18Above.reduce(
    (accumulator, currentAge) => accumulator + currentAge,
    0
  );
  // better method
  const average = dogHumanAge18Above.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  const avgAge = calcAverageHumanAge / dogHumanAge18Above.length;

  // Console Logs
  console.log(dogAgeUnder2);
  console.log(calcAgeUnder2);
  console.log(dogAgeAbove2);
  console.log(calcAgeAbove2);
  console.log(dogHumanAge);
  console.log(dogHumanAge18Above);
  console.log(avgAge);
  console.log(average);
};

const dogAge1 = [5, 2, 4, 1, 15, 8, 3];
const dogAge2 = [16, 6, 10, 5, 6, 1, 4];

// 4. Run the function for both test datasets
dogAgeConverter(dogAge2);
