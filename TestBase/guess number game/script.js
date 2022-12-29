'use strict';

// let message = document.querySelector('.message').textContent;
// console.log(message);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

function secretNumber() {
  let guessNumber = Math.trunc(Math.random() * 20) + 1;
  return guessNumber;
}
let newGameNumber = secretNumber();
console.log(newGameNumber);

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let gameScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let totalScore = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);
  if (!guessNumber) {
    displayMessage('No Number found'); //calls the function on above
  } else if (guessNumber !== newGameNumber) {
    if (totalScore > 1) {
      totalScore--;
      displayMessage(
        guessNumber < newGameNumber ? 'Too less...' : 'Too big...'
      );
      gameScore(totalScore);
    } else {
      displayMessage('You have lost the game!!!');
      gameScore(0);
    }
  } else if (guessNumber === newGameNumber) {
    displayMessage('Contratulations!');
    document.querySelector('body').style.backgroundColor = 'rgb(113, 249, 113)';
    document.querySelector('.result').textContent = guessNumber;
    document.querySelector('.result').style.width = '150px';
    document.querySelector('.guess').value = '';
    if (totalScore > highscore) {
      highscore = totalScore;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  newGameNumber = secretNumber();
  console.log(newGameNumber);
  displayMessage('Start guessing....');
  //   document.querySelector('.score').textContent = 20;
  gameScore(20);
  document.querySelector('.result').textContent = '?';
  document.querySelector('.result').style.width = '50px';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'white';
  console.log(totalScore);
  totalScore = 20;
});

document.querySelector('.reset').addEventListener('click', function () {
  displayMessage('Start guessing....');
  gameScore(20);
  document.querySelector('.guess').value = '';
  totalScore = 20;
});
