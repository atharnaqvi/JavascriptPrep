'use strict';
/*
CODING CHALLENGE #3 
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
    1. Calculate the average score for each team, using the test data below
    2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
    3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
    4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

let result = 0;
let matchScores = [];
const avgScore = function (matchScores) {
  let totalScore = 0;
  for (let i = 0; i < matchScores.length; i++) {
    totalScore = Number(totalScore) + matchScores[i];
    result = Number(totalScore / matchScores.length);
  }
  return result;
};

let dolphinsScores = [97, 112, 101];
matchScores = dolphinsScores;
let dolphin = avgScore(matchScores);
dolphin = Math.floor(dolphin);
console.log(`Dolphins Average score is: ${dolphin}`);

let koalasScores = [109, 95, 106];

matchScores = koalasScores;
let koalas = avgScore(matchScores);
koalas = Math.floor(koalas);
console.log(`Koalas Average score is: ${koalas}`);

if (dolphin > koalas && dolphin >= 100) {
  console.log(`Dolphins Win the match with Average score: ${dolphin}`);
} else if (koalas > dolphin && koalas >= 100) {
  console.log(`Koalas Win the match with Average score: ${koalas}`);
} else if (koalas === dolphin && koalas >= 100) {
  console.log(
    `Koalas and Dolphins both score equal ${koalas} so the match is a Draw`
  );
} else {
  console.log(
    `Koalas Average score ${koalas} and Dolphins Average score ${dolphin} score less than 100 so no one wins`
  );
}
