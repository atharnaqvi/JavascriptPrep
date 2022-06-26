'use strict';

/*
CODING CHALLENGE # 1 & 2
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both
versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

    4. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    5. Use a template literal to include the BMI values in the outputs. Example: "Mark's

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

const BMI = function (mass, height) {
  const result = mass / (height * height);
  return result;
};

let mark = Math.floor(BMI(95, 1.88));
let john = Math.floor(BMI(85, 1.76));

console.log(`Mark's BMI is: ${mark}`);
console.log(`John's BMI is: ${john}`);

mark > john
  ? console.log(`Mark's BMI has heigher BMI ${mark} then John's BMI ${john}`)
  : console.log(`John's BMI has heigher BMI ${john} then Mark's BMI ${mark}`);
// use of if statement with template literals to print the result
