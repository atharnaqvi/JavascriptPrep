'use strict';

/*****************CODING CHALLENGE #5
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
    1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
    2. Use the function to calculate the average for both teams
    3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
    4. Use the 'checkWinner' function to determine the winner for both Data 1 and

    Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
*/
let teamAvg = 0;
//Calculate the team average
let calcAverage = ([...scoreArr]) => {
  let totalScore = 0;
  for (let i = 0; i < scoreArr.length; i++) {
    teamAvg = (totalScore += scoreArr[i]) / scoreArr.length;
  }
  return teamAvg;
};
//Mach 1
let dolphin1 = [44, 46, 78];
let koalas1 = [65, 54, 49];

let dolphin1Avg = calcAverage(dolphin1);
console.log(`Dolphin's Match 1 Average: ${dolphin1Avg}`);

let koalas1Avg = calcAverage(koalas1);
console.log(`Koalas's Match 1 Average: ${koalas1Avg}`);

//Match 2
let dolphin2 = [85, 54, 41];
let koalas2 = [23, 34, 27];

let dolphin2Avg = calcAverage(dolphin2);
console.log(`Dolphin's Match 2 Average: ${dolphin2Avg}`);

let koalas2Avg = calcAverage(koalas2);
console.log(`Koalas's Match 2 Average: ${koalas2Avg}`);

//Check winner function
let checkWinner = (team1, team2, match) => {
  if (team1 > team2 * 2) {
    console.log(
      `${match}: Dolphin's won the match with average score: ${team1}`
    );
  } else if (team2 > team1 * 2) {
    console.log(`${match}: Koala's won the match with average score: ${team2}`);
  } else if (team1 === team2) {
    console.log(
      `${match}: The match is a draw between Team 1 and Team 2 with aveerage score: ${team2}`
    );
  } else {
    console.log(`${match}: No one wins`);
  }
};

checkWinner(dolphin1Avg, koalas1Avg, 'Match1');
checkWinner(dolphin2Avg, koalas2Avg, 'Match2');
