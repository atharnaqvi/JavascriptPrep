odds = {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
};

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
  odds,
  allPlayAbles() {
    console.log(this.players);
  },
  myBest: {
    firstName: 'Athar',
    lastName: 'Naqvi',
    friend1: 'Kimmich',
    friend2: 'Goretzka',
  },
};

game.allPlayAbles();
const [player1, player2] = game.players;
// console.log(player1, player2);

const allPlayers = [...player1, ...player2];
//console.log(allPlayers);

for (const [i, el] of allPlayers.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// object literals
// console.log(game);

// Optional Chaining Functions

//old way

console.log(game.myBest?.firstName);

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const openingHours = {
  Mon: {
    open: 8,
    closed: 14,
  },
  Wed: {
    open: 12,
    closed: 24,
  },
  Fri: {
    open: 0,
    closed: 23,
  },
};
console.log(openingHours);

for (const day of days) {
  const open = openingHours[day]?.open ?? 'clossed';
  console.log(`On ${day} we are ${open}`);
}

//for Methods

console.log(openingHours.Tue?.open ?? 0);

//for Arrays

const users = [
  {
    user1: 'John',
    user2: 'Tim',
    user3: 'Farian',
  },
];
console.log(users[0]?.user2 ?? 'users does not exist');

const openDays = Object.keys(openingHours);
let openStr = `We are open ${openDays.length} days!!!`;

for (const open of openDays) {
  openStr += ` ${open} `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(`Keys and values of an object`);
console.log(entries);

//for (const [keys, values] of object){}
// if values are an object then use {name of the values and in this case its' open and closed}
for (const [openDays, { open, closed }] of entries) {
  console.log(`On ${openDays} we open at ${open} and closes at ${closed}`);
}
