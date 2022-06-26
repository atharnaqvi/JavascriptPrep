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
    team1: 12.33,
    x: 3.25,
    team2: 6.5,
  },
};

// ------------------------TASKS:------------------------------------
console.log(
  "1. Create one player array for each team (variables 'players1' and 'players2"
);
console.log(
  `----------------------------------------------------------------------`
);

// const player1 = game.players[0];  // Old method
// const player2 = game.players[1];     //Old method
// console.log(`Player 1 = ${player1}`);
// console.log(`Player 2 = ${player2}`);
//Destructuering method
const [players1, players2] = game.players;
console.log(players1, players2);
console.log(` `);
console.log(
  '/////////////////////////////\\\\\\\\\\\\//////////////////////////////////'
);
console.log(` `);

console.log(`2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players`);
console.log(
  `----------------------------------------------------------------------`
);

const [gk1, ...feildPlayers1] = players1;
console.log(
  `${game.team1}- Goal Keeper ${gk1}, and feild players are: ${feildPlayers1}`
);

const [gk2, ...feildPlayers2] = players2;
console.log(
  `${game.team2}- Goal Keeper ${gk2}, and feild players are: ${feildPlayers2}`
);
console.log(` `);
console.log(
  '/////////////////////////////\\\\\\\\\\\\//////////////////////////////////'
);
console.log(` `);

console.log(`3. Create an array 'allPlayers' containing all players of both teams (22
    players)`);
console.log(
  `----------------------------------------------------------------------`
);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);
console.log(` `);
console.log(
  '/////////////////////////////\\\\\\\\\\\\//////////////////////////////////'
);
console.log(` `);

console.log(`4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'`);

console.log(
  `----------------------------------------------------------------------`
);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(
  `${game.team1} used 3 substitute players so the final playing team is: ${players1Final}`
);
console.log(` `);
console.log(
  '/////////////////////////////\\\\\\\\\\\\//////////////////////////////////'
);
console.log(` `);

console.log(`5. Based on the game.odds object, create one variable for each odd (called
    'team1', 'draw' and 'team2')`);

console.log(
  `----------------------------------------------------------------------`
);

// const { team1 } = game.odds.team1; //Old style
// const draw = game.odds.x;   //Old style
// const team2 = game.odds.team2;   //Old style
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// console.log(`Team 1: ${team1}`);
// console.log(`Draw: ${draw}`);
// console.log(`Team 2: ${team2}`);

console.log(` `);
console.log(
  '/////////////////////////////\\\\\\\\\\\\//////////////////////////////////'
);
console.log(` `);

console.log(`6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)`);

console.log(
  `----------------------------------------------------------------------`
);

function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

console.log(` `);
console.log(
  '/////////////////////////////\\\\\\\\\\\\//////////////////////////////////'
);
console.log(` `);

console.log(`7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.`);
console.log(` `);

(team1 < team2 && console.log(`${game.team1} is likely to win`)) ||
  (team2 < team1 && console.log(`${game.team2} is likely to win`));

////-----------------FOR-OF LOOP for Looping an Array----------------------//

// Old menthod to go through all the palyers in the Array and print them one by one
// for (let i = 0; i < allPlayers.length; i++) {
//   console.log(allPlayers[i]);
// }

//ES6 new way to use FOR-OF Loop to do the same as above
// for (let playerList of allPlayers) console.log(playerList);

// for (const playerList of allPlayers.entries()) {
//   console.log(`${playerList[0] + 1}: ${playerList[1]}`);
// }

//Destructuering loop of array by starting at 1 instead of zero

for (const [i, pl] of allPlayers.entries()) {
  console.log(`${i + 1}: ${pl}`);
}
// console.log([...allPlayers.entries()]);
