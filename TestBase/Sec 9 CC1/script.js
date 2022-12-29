'use strict';

/*****************CODING CHALLENGE #7
Let's continue with our football betting app! Keep using the 'game' variable from
before.

Your tasks:
    1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
    2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
    3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
        Get the team names directly from the game object, don't hardcode them
        (except for "draw"). Hint: Note how the odds and the game objects have the
        same property names 😉
    4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:

{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


/* 1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")*/
for (let i = 0; i < game.scored.length; i++){
  console.log(`Goal ${i+1}: ${game.scored[i]}`);
};


/*
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
*/
console.log('hello');
let {team1, x, team2} = game.odds;
let avgArray = [];
avgArray.push(team1,x,team2);
let avg, sum = 0

function add(...args){
  let total = 0;
  for(let arg of args){
    total += arg
  }
  return total;
};
sum = add(team1, x, team2);
// console.log(sum);
console.log(avgArray);
avg = (sum/avgArray.length).toFixed(2);
console.log(`Average of Odds are: ${avg}`);

//3. Print the list of all players
let [player1, player2] = game.players;
console.log(player1, player2);

//4. Print the first player as Goal Keeper and rest at Field Players for player1
let [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

//5 All the players in a single array
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//6 create 3 new players for player1
const players1Final = ['Thiago', 'Coutinho','Perisic', ...player1 ]
console.log(players1Final);

//7 Create 3 new variables for the Odds called team1, draw, team2
// const {team11, x:draw, team12} = {...game.odds};
// console.log(`Team 1 chances: ${team1}, Draw Chances: ${draw}, Team 2 chances: ${team2}`);
//better way of doing this
const {odds: {team1:Team1, x:Draw, team2:Team2}} = game;
console.log(`Team 1 chances: ${Team1}, Draw Chances: ${Draw}, Team 2 chances: ${Team2}`);

//8 which team is more likely to win ( do not use if or ternary operators)

Team1 < Team2 && console.log('Team 1 is more likely to win');
Team2 < Team1 && console.log('Team 2 is more likely to win');

/*
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
        Get the team names directly from the game object, don't hardcode them
        (except for "draw"). Hint: Note how the odds and the game objects have the
        same property names 😉
*/



/*
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:

{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/
