"use strict";

/*
const markW = 95;
const markH = 1.88;
const johnW = 85;
const johnH = 1.76;

const markMass = markH * markH;
const johnMass = johnH * johnH;

const markBMI = markW / (markH * markH) ;
const johnBMI = johnW / johnH ** 2;

console.log('Mark BMI is ' + markBMI, 'John BMI is ' + johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

console.log(`The Mark's height is ${markH} and his BMI is ${markBMI}, and it's a test to see if Mark BMI is greater then John =  ${markBMI > johnBMI}`);
*/
/*
const age = 14;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log(`Tim can start driving a car 🚓🚓🚓`);
}else{
    console.log(`Tim needs another ${18-age} years to be able to start driving 😟💔`);
}

const britherYear =2015;
let century;

if (britherYear <= 2000){
    century = 20;
}else {
    century = 21;
}

console.log("John is born in the "+ century)
if (century <= 2000){
    console.log('st century');
}else{
    console.log('th century');
}


const markW = 98;
const markH = 1.88;
const johnW = 122;
const johnH = 1.76;

const massMark = markH ** 2;
const massJohn = johnH ** 2;

const markBMI = markW / massMark;
const johnBMI = johnW / massJohn;

if (markBMI > johnBMI){
    console.log (`Mark's BMI ${markBMI} is greater than John's BMI ${johnBMI}!!!`);
} else {
    console.log (`John's BMI ${johnBMI} is greater than Mark's BMI ${markBMI}!!!`);
}
*/

// const inputYear = "1992";
// console.log(inputYear);
// console.log(typeof(inputYear));
// // console.log(Number(inputYear));
// const num = Number(inputYear);
// console.log(typeof(num));
// const str = String(num);
// console.log(str);
// console.log(`Type of str is ` + typeof( str));
// let n = `1` + 1;
// n = n -1
// console.log(n);
// var age;

// age = Number(prompt("Enter your age?"));

// if (age > 18){
//     console.log("Your are an adult and your age is  "+ age);
// }else {
//     console.log("you are a child and your age is "+ age);
// }
// console.log(typeof age);
// console.log(age);

// const a = true;
// const b = false;

// console.log(a && b);
// console.log(a || b);
// console.log(a && !b);

// const hasDriverLicence = true;
// const hasGoodVision = true;
// const isTired = false;

// if(hasDriverLicence && hasGoodVision && !isTired){
//     console.log("Sam could drive a car!!!");
// }else{
//     console.log("Somone else should drive!!!")
// }

// const employ = prompt("Enter the name of the Emply?");
// switch (employ){
//     case 'athar':
//         console.log("Athar is not a good employ");
//         break;
//     case 'fizza':
//         console.log("Fizza is a good employ");
//         break;
//     default:
//         console.log("Not an emply !!!");
// }

// const age = Number(prompt("Enter your age?"));
// // age >= 18? console.log("You are an Adult") : console.log("You are a child");

// // const drink = age >= 18 ? 'Wine ':'Water';
// // console.log(drink);

// console.log(`I can drink ${age >=18 ? 'Alcohol' : 'Coca Cola' }`);

// const bill = Number(prompt("Enter the total value of your food bill?"));
// const tip = bill >= 50 && bill <=300? console.log(`Your percentage calculated at 15% and total value of tip is ${(15/100)*bill}`):
//             console.log(`Your percentage calculated at 20% and total value of tip is ${.20* bill}`);

// const interface = "du";
// const private = 2834;

//FUNCTION DECLARATION

// function logger() {
//     //function body
//     console.log("Function Body");
// }

//     //calling / running / invoking a function
// logger();

// const val1 = Number(prompt("Enter first number"));
// const val2 = Number(prompt("Enter 2nd number?"));

// function multiFunc(a, b){
//     //string to store a value from TEMPLATE LITTERAL
//     const result = `Multipulication of ${a} and ${b} is  ${a * b}`;
//     return result;
// }

// const res = multiFunc(val1 , val2);
// console.log(res);

//Functions are a perfect exmaple of DRY CODE
//Console.log() is a also a type of function but it's a built in function of JavaScript
//Number() is also a funciton

//Dynamic Age calculation calculator function
// const currentYear = new Date().getFullYear();
// const yearOfBirth = Number(prompt("Enter your year of birth to calculate your age?"));

// //Function Declaration
// function yourAge(yob, cy){
//     const calAge = `You were born in ${yob} and your current age is ${cy - yob}`;
//     return calAge;
// }

// const age = yourAge(yearOfBirth, currentYear);
// console.log(age);

//Parameters are the placeholder in the function as in function e.g. yourAge(yob, cy){....
//Argument is the actual value that we use to fill in for the placeholders. e.g. const age = yourAge(yearOfBirth, currentYear);

// const currentYear = new Date().getFullYear();
// const yourYOB = Number(prompt("Enter your Year of Birth!!!"));

// //Function Expression
// const calAge = function (yb , cy){
//     const calcAge1 = `Your were born in ${yb} and current year is ${cy}. So your age is ${cy - yb}`;
//     return calcAge1;
// }

// const yourAge = calAge(yourYOB, currentYear);
// console.log(yourAge);

//ARROW FUNCTION
// const currentYear = new Date().getFullYear();
// const yearBirth = Number(prompt("Enter your year of birth!!!"));

// const calcAge3 = (yb, cy) => cy - yb;

// const age = calcAge3(yearBirth, currentYear);
// console.log(age);

//Write a function to tell the retirement year. State Pension age is currently 66 years old in the UK

// const currentYear = new Date().getFullYear();
// const yearOB = Number(prompt("Enter your year of birth"));

// function workYearLeftFunc(currentAge){
//     return 66-currentAge;
// }
// function currentAgeFunc(cYear, yoB){
//     const currentAge = cYear - yoB;
//     return currentAge;
// }

// //cYear and yoB are Local Variable for the function mainFunc also called Parameters
// function mainFunc(cYear, yoB) {
//     const currentAge = currentAgeFunc(cYear, yoB);
//     const yearLeft4Ret = workYearLeftFunc(currentAge);
//     const retYear = yearLeft4Ret + cYear;
//     console.log("You have " + yearLeft4Ret + " years left in your retirement!!!");
//     return retYear
// }

// const retirementYear = `Your are going to retire in the year ${mainFunc(currentYear, yearOB)}`;
// console.log(retirementYear);

//********************************************************* */
// There are three types of functions
// 1- Function Declaration
//     e.g.
//     function funcName(localVariable){
//         function body goes Headers;
//         return a value ;
//     }
// 2- Function Expressions
//     e.g
//     const funName = function (localVariable){
//         function body;
//         return;
//     };
// 3- Arrow Functions
//     e.g.
//     const constName = funcName => expression such as 2022 - yoB;
//*********************************************************************************** */

//Coding Challenge 2

//1 create an arrow function 'calcAverage' to calculate the average of 3 scores
//2 Use the function to calculate the average for both teams
//3 Create a function 'checkWinner' that takes the average score of each team as parameters('avgDolphins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rules above, EG: @Koalas win (30 vs 13)".
//4 Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.

//Test Data 1: Dolphins socre 44, 23, 71. Koalas score 65, 54, 49
//Test Data 2: Dolphins socre 85, 54, 41. Koalas score 23, 34, 27

// const calcAverage = calcAverageFunc => (a+b+c)/3;

// function avgDolphins(){
//     const calDolphonsAvg = calcAverage(44,23,71);
//     console.log(calDolphonsAvg);
// }

// const day = 'Satday';

// switch(day){
//     case 'Monday':
//         console.log("It's Monday!!!");
//         break;
//     case 'Tuesday':
//         console.log("Happy Tuesday");
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//     case 'Friday':
//     case 'Satday':
//     case 'Sunday':
//         console.log("Another week day");
//         break;
//     default:
//         console.log("Not a weekday!!!");
// }

// const age = 16;
// // age >= 18 ? console.log("Person is Adult") : console.log("Not adult");

// const canDrive = age>= 18? 'Can drive!!!': 'Can not drive!!!';
// console.log(canDrive);

// console.log(`I would like to drink ${age>=18 ? 'Alcohol': 'water'} `);

// 'use strict';
// const bill = 430;
// const tip = bill>=50 && bill<=300 ? (15/100)*bill : (20/100)*bill;
// console.log(tip);

// let hasDriversLicence = false;
// const passTest = true;

// if(passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log('I can drive');

// const interface = "Auto";

// function logger() {
//     console.log('My name is Athar');
// }

//calling ./ invoking/ running a function

// logger();
// logger();
// logger();

//parameters are local variables which are specific to this function

// function foodProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const result = foodProcessor(3, 5);
// console.log(result);
// console.log(foodProcessor(10, 5));

//DRY - Dont Repeat Yourself
//Function Declaration*************

// const currentAge = calcAge1(1975);
// function calcAge1(birthYear){
//     const currentTime = new Date();
//     const currentYear = currentTime.getFullYear();
//     return currentYear - birthYear;

// }

//function Expression ***********

// const calcAge2 = function (birthYear2){
//     const currentTime2 = new Date();
//     const currentYear = currentTime2.getFullYear();
//     return currentYear - birthYear2;
// }
// const age2 = calcAge2(2001);

// console.log(currentAge, age2);

// //Get Current YYYY function <<<<<<<<<<<<
// function currentYear4(){
//     const currentTime3 = new Date();
//     const currentYear3 = currentTime3.getFullYear();
//     return currentYear3;
// }

// const currentYearCal = currentYear4();
// console.log(currentYearCal);

//Get Current YYYY function <<<<<<<<<<<<<

// Arrow Function *******************

// const calcAge3 = birthYear3 => currentYearCal - birthYear3;
// const age3 = calcAge3(1975);
// console.log(age3);

// Calculate Age Function <<<<<<<<<<<<<
// const calcAge = function(birthYear){
//     return currentYearCal - birthYear;
// }
// Calculate Age Function >>>>>>>>>>>>>

//calculate years left in retirement <<<<<<<<<
// const yearsUntilRetirement = (fName) => {
//     //console.log(currentYearCal);
//     const retireAge = 65 - calcAge(1992);
//     //return retireAge;
//     if (retireAge > 0){
//     return `${fName} retires in ${retireAge} years`;
//     }else{
//         return `${fName} has already retired ${Math.abs(retireAge)} years ago`;
//     }
// }

// console.log(yearsUntilRetirement('Fizza'));
//console.log(yearsUntilRetirement('1992', 'Fizza'));

//calculate years left in retirement >>>>>>>>>>>

//Coding Challenge (functions) 1 >>>>>>>>>>>>>>>>>>>>

// const dolphins = avgCalcAverage => (44+33+41)/3;7
// const dolphinsAvg = dolphins();
// console.log(dolphinsAvg);

// const koalas = avgCalcAverage => (65+54+49)/3;
// const koalasAvg = koalas();
// console.log(koalasAvg);

// const calcAverage = (s1, s2, s3) => (s1+s2+s3)/3;
// const dolphinsAvg = calcAverage(85,54,49);
// const koalasAvg = calcAverage(23,34,27);

// function checkWinner(){
//     if(dolphinsAvg > 2 * koalasAvg){
//         return `Dolphons win 🏆🏆🏆 with average ${dolphinsAvg}`;
//     }else if(koalasAvg > 2 * dolphinsAvg){
//         return `Koalas win 🏆🏆🏆 with average ${koalasAvg}`;
//     }else{
//         return `Match is undecided 😟😟😟`;
//     }
// }

// console.log(dolphinsAvg, koalasAvg);
// const result = checkWinner();
// console.log(result);

//Coding Challenge (functions) 1 <<<<<<<<<<<<<<<<<<<<<<<<<<

// Arays
// function curYear(){
//         const currentTime = new Date();
//         const currentYear = currentTime.getFullYear();
//         return currentYear;
//     }

//     const currentYearCal = curYear();
//     console.log(currentYearCal);

//     //Get Current YYYY function <<<<<<<<<<<<<

//     //Arrow Function *******************

//     const years = [1975, 1992, 2015, 2017];

//     const calcAge3 = birthYear3 => currentYearCal - birthYear3;
//     const age1 = calcAge3(years[0]);
//     const age2 = calcAge3(years[1]);
//     const age3 = calcAge3(years[2]);
//     const age4 = calcAge3(years[years.length -1]);
//     const ages = [calcAge3(years[0]), calcAge3(years[1]), calcAge3(years[2]), calcAge3(years[years.length -1])];
//     console.log(ages);

//====Add Elements
//  const friends = ['John', 'Tim', 'Mic'];
//  friends.push('Shain'); //Add an element at the end of the array
//  console.log(friends);
//  const newLength = friends.unshift('Ian'); //produce length
//  friends.unshift(''); //Add an element at the begining of the array
//  console.log(friends);
//  console.log(newLength);

//  //Remove Elements
// const popped = friends.pop(); //pop function remove the last element in the array
// console.log(friends);
// console.log(popped);
// friends.shift();      //shift without value remove the first element in the array
// console.log(friends);
// console.log(friends.indexOf('Mic'));
// console.log(friends.indexOf('Athar'));
// const cc = friends.indexOf('Athar');
// console.log(cc < 0? 'Required element is not present' : 'It is available');

// console.log(friends.includes('Athar')); //Strict equality check
// friends.unshift('Athar');
// console.log(friends.includes('Athar'));
// console.log(friends);

// console.log(friends.includes('Athar')?'You have a friend called Athar':'You dont have a friend with this name');

// Coding Challenge 2 *********Tip Calculator using Functions and Arrays ***************** >>>>>>>>>>>>>>>>>>>

// const tipCalculator = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }

// const bills = [125, 555, 44];
// const tips = [tipCalculator(bills[0])+bills[0], tipCalculator(bills[1])+bills[1], tipCalculator(bills[bills.length -1])+bills[bills.length-1]];
// console.log(tips);

// Coding Challenge 2 *********Tip Calculator using Functions and Arrays ***************** <<<<<<<<<<<<<<<<<<<<

// //**** OBJECTS *****************
// function curYear(){
//             const currentTime = new Date();
//             const currentYear = currentTime.getFullYear();
//             return currentYear;
//         }

// const currentYear = curYear();
// const currentAge = function(age){
//     const ageCal = currentYear - age;
//     return ageCal;
// }

// const profile = {
//     fname:  prompt('Enter your first name:'),
//     lname:  prompt('Enter your last name:'),
//     age:    currentAge(prompt('Enter your year of birth:')),
//     job:    prompt('Enter your profession:'),
//     partner: prompt('Enter your partner\'s name:'),
//     children: [prompt('Enter your first child name:'), prompt('Enter your 2nd child name:')],
//     getSummary: function(){
//             return `${this.fname} has ${this.children.length} children name ${this.children[0]} and ${this.children[1]}`
//     }
// };
// profile.location = 'UK';
// profile['email'] = 'atharnaqvi@gmail.com';

// console.log(profile);
// console.log('First Name: ', profile.fname, 'Last Name: ', profile.lname);
// const nameKey = 'name';
// console.log(profile['f' + nameKey]);
// console.log(profile['l'+ nameKey]);

//const query = prompt('Please slect one of the option from profile i.e. fname, lname, age, job, partner, children etc');
//const result = profile[query] ? console.log(profile[query]) : console.log('Query about '+ query + ' is a wrong question');

// const challenge = console.log(profile.fname +' has '+ profile.children.length + ' children and his partner name is '+ profile.partner);
// console.log(`${profile.fname} has ${profile.children.length} children and he has a wife and her name is ${profile.partner}`);
// console.log(`${profile.fname} has ${profile.children.length} children name ${profile.children[0]} and ${profile.children[1]}`);

// const profile = {
//     fname:  'Athar',
//     lname:  'Naqvi',
//     age:    currentAge(1976),
//     job:    'Software Developer',
//     drivingLicence: false,
//     partner: 'Fizza Ali Naqvi',
//     children: ['Sakina Ali Syed', 'Mortaza Ali Syed'],
//     getSummary: function(){
//             return `${this.fname} is ${this.age} year old ${this.job}. His partner name is ${this.partner} and has ${this.children.length} children name \"${this.children[0]}\" and \"${this.children[1]}\". ${this.fname} has ${this.drivingLicence? 'a':'no'} driving licence`
//     }
// };

// console.log(profile.getSummary());

//  Coding Challenge 3 *************   >>>>>>>>>>>>>>>>

// function calcBMI(ms, length){
//     const result = ms/length**2;
//     return result
// }

// const mark = {
//     name:   'Mark Miller',
//     mass:   prompt('Enter Mass for John:'),
//     height: prompt('Enter Height for John:'),
//     calcBMI:  function(){
//         this.bmi = this.mass/ this.height **2;
//         return this.bmi;
//     }
// };
// mark.calcBMI();
// console.log(mark.bmi);

// const john = {
//     name:   'John Smith',
//     mass:   prompt('Enter Mass for John:'),
//     height: prompt('Enter Height for John:'),
//     calcBMI:    function(){
//         this.bmi = this.mass/this.height ** 2;
//         return this.bmi;
//     }
// };
// john.calcBMI();
// console.log(john.bmi);

// console.log(mark.bmi > john.bmi ? `Mark\'s BMI ${mark.bmi} is greater then John\'s BMI ${john.bmi}`: `John\'s BMI ${john.bmi} is greater then Mark\'s BMI ${mark.bmi}`);

// FOR Loops ***********************

// for (let rep = 0; rep <=10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️🏋️🏋️`);
// };

// const profile = [
//     'Athar',
//     'Naqvi',
//      46,
//     'Javascript Developer',
//     'Fizza Naqvi',
//     ['Sakina Ali Syed','Mortaza Ali Syed'],
//     true
// ];

// const types = []; //empty Array

// for(let i = 0; i < profile.length; i++){
//     //console.log(profile[i], typeof profile[i]);

//     //Filling types array
//     //types[i] = typeof profile[i];
//     types.push(typeof profile[i]);
// };

// console.log(types);

// function currentYear(){
//     const newDate = new Date();
//     const fullYear = newDate.getFullYear();
//     return fullYear;
// };

// const cYear = currentYear();

// const dobs = [];
// for(let i=0; i <= 3; i++){
//     dobs.push(prompt('Enter your date of birth'));
// }

// const ages = [];

// for(let i=0; i<dobs.length; i++){
//     ages.push(cYear-dobs[i]);
// }
// console.log(ages);

// const profile = [
//     'Athar',
//     'Naqvi',
//      46,
//     'Javascript Developer',
//     'Fizza Naqvi',
//     ['Sakina Ali Syed','Mortaza Ali Syed'],
//     true
// ];
// console.log(profile);

// console.log(`For Loops ---- CONTINUE while condition is true `);
// for(let i = 0; i < profile.length; i++){
//         if (typeof profile[i] !== 'string') continue; //Continue will exit the current itteration as soon as condition is true in this case Number or Boolean

//         console.log(profile[i], typeof profile[i]);
//         };

// console.log(`For Loops ---- Break while condition is true `);
// for(let i = 0; i < profile.length; i++){
//                 if (typeof profile[i] === 'number') break; //Continue will exit the current itteration as soon as condition is true in this case Number or Boolean

//                 console.log(profile[i], typeof profile[i]);
//                 };

// const profile = [
//     'Athar',
//     'Naqvi',
//      46,
//     'Javascript Developer',
//     'Fizza Naqvi',
//     ['Sakina Ali Syed','Mortaza Ali Syed'],
//     true
// ];
// console.log(profile);

// console.log(`Backward LOOP`);

// for(let i= profile.length - 1; i >= 0; i--){
//     console.log(i, profile[i]);
// }

// for (let rep =1; rep <= 10; rep++){
//     console.log(`------------ Starting rep ------------ ${rep}`);

// }

// console.log(`----------------- WHILE LOOP --------------------`);
// var rep = 1;
// while (rep <=10){
//     console.log(`Repetition of exercise ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random()*6)+1;
// console.log(dice);

// while (dice !== 6){
//     console.log(`You rolled a  ${dice}`);
//     dice = Math.trunc(Math.random()*6)+1;
//     if (dice === 6) console.log('Loop ends here as you rolled 6');
// }

// console.log('Codding Challenge')

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   function calcTip() {
//     if (bills[i] >= 50 && bills[i] <= 300) {
//       const tip = bills[i] * 0.15;
//       tips.push(tip);
//       totals.push(tip + bills[i]);
//       return;
//     } else {
//       const tip = bills[i] * 0.2;
//       tips.push(tip);
//       totals.push(tip + bills[i]);
//       return;
//     }
//   }
//   calcTip();
// }

// console.log(`Bills value: ${bills}`);
// console.log(`Tip calculation ${tips}`);
// console.log(`Total bill including tip ${totals}`);

// console.log("Codding Challenge to calculate Average of an Array");

// let sum = 0;

// const calcAverageFunction = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     //sum = sum + arr[i];
//     sum += bills[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverageFunction([2, 5, 6, 5, 2]));
// const avgBill = console.log(calcAverageFunction(bills));
// const avgTips = console.log(calcAverageFunction(tips));
// const avgTotal = console.log(calcAverageFunction(totals));

// const aa = 'aa'
// console.log();
// console.log("Athar")

// function multiply(a,b){
//   const c = a*b;
//   return c;
// }

// const result = multiply(2,4);
// console.log(result);

// const arrList = [1,-2,3,4,5];
// let sum = 0;

// function possitiveSum(arr){
//   for (let arr=0; arr < arrList.length; arr++){
//     if(arrList[arr] >= 0){
//       sum +=  arrList[arr];
//       }
//   };
  
//   return sum;
// };

// possitiveSum(arrList);

// console.log(sum);

// const valA = prompt("Enter value to create a table:");
// let valB = 0
// function multiplyCalculator(a){
//   for (let i=1; i <=10; i++){
//     valB = console.log(a +' x '+i+ ' = ' + a * i);
//   };
//   return valB;
 
// };

// multiplyCalculator(valA);

// const temperatures = [3, -2, -6, -1, 'error', 9,13,17,15,14,9,5];


// const calcMaxTempAmplitude = function(temps){
//   let max = temperatures[0];
//   for(let i=0; i<temps.length; i++){
//     if (temps[i] > max){
//       max = temps[i];
//     }
//   }
//   return max;
// };

// const maxTemp = calcMaxTempAmplitude(temperatures);

// console.log(maxTemp);

// const calcMinTempAmplitude = function(temps){
//   let min = temperatures[0];
//   for(let i=0; i<temps.length; i++){
//     if (temps[i] < min){
//       min = temps[i];
//     }
//   }
//   return min;
// };

// const minTemp = calcMinTempAmplitude(temperatures);
// console.log(minTemp);

// function calcTempAmplitude(){
//   const Amplitude = maxTemp - minTemp;
//   console.log(Amplitude);
//   // return Amplitude;
// };

// calcTempAmplitude();


//Merge two arrays

// const first6Months = ['Jan', 'Feb', 'March', 'April', 'May', 'June'];
// const second6Months = ['July','Aug','Sep','Oct','Nov','Dec'];
// const fullYear = first6Months.concat(second6Months);
// console.log(fullYear);

//Challenge***************************
//Problem
//-Calculate Amplitude collecting data from two arrays.
//Sub Problem
//--Concat two arrays
//--Find Max and Min values by ignoring anthing not numberical
//--Minus min from max
//--Print forecast





// const temperatures1 = [17, 21, 23];
// const temperatures2 = [12, 5, -5,1, 4];
// const temperatures = temperatures1.concat(temperatures2);
// let max = 0;
// let min = 0;
// console.log(temperatures);
// const calcTempAmplitude = function(temp){
//     for(let i=0; i<temperatures.length; i++){
//       const curTemp = temperatures[i];
//       if (typeof curTemp !== 'number') continue;
//       if (curTemp > max) max = curTemp;
//       if (curTemp < min) min = curTemp;
//       }
//       console.log(max, min);
//     };
//     const minMax = calcTempAmplitude(temperatures);
//     const Amplitude = max - min;
//     console.log(Amplitude);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5,1, 4];

//print forecast "...17°C in 1 days ... 21°C in 2days" ... 23°C in 3days"

const data3 = data1.concat(data2);

const forecast = function(value){
  let str = '';
  for (let data=0; data<value.length; data++){
    str += `...${value[data]}°C in ${data+1} days`;
  };
  console.log (str);
};
const result = forecast(data3);
