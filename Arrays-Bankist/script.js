'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
  
  <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html); // to show the list in decending order
    // containerMovements.insertAdjacentHTML('beforeend', html); // to show in the ascending order
    // containerMovements.insertAdjacentHTML('afterend', html); // to show the list outside of the container 'movements'
    // containerMovements.insertAdjacentHTML('beforestart', html); // to show the list outside of the container 'movements'
  });

  const depositTotal = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${depositTotal} EUR`;

  const withDrawalTotal = Math.abs(
    movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  );
  labelSumOut.textContent = `${withDrawalTotal} EUR`;

  // const interestRate = 1.2; // in percentage on each deposit
  const calcInterest = movements
    .filter(deposit => deposit > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((interest, i, arr) => {
      console.log(arr);
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${calcInterest} EUR`;
}; // end of main function

const calcDisplayBallance = function (mov) {
  const balance = mov.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  labelBalance.textContent = `${balance} EUR`;
};

const movementDescriptions = account1.movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov} amount`;
  } else {
    return `Movement ${i + 1}: You withdraw ${Math.abs(mov)} amount`;
  }
});

console.log(movementDescriptions);

//console.log(containerMovements.innerHTML);

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);

console.log(accounts);

//Login Functionality

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //Prevent from default submitting
  e.preventDefault(); // Default behavior for submit button to reload the page
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  //Optional Chaning  used below to simplyfy the condition to check if it exit then only look for pin
  // it is the short form of if(currentAccount && curentAccount.pin === currentAccount.pin).
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    //Display main area
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Populate Movements,
    displayMovements(currentAccount.movements);
    //current balance,
    calcDisplayBallance(currentAccount.movements);
    // summary,

    //interest

    console.log('Login Successfull');
  } else {
    console.log('Login Failed');
  }
});
console.log(currentAccount);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
