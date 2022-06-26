'use strict';

//Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let highScore = 0;
let score = 20;

//Refactoring repetitive code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const numbering = function (number) {
  document.querySelector('.number').textContent = number;
};
const scoring = function (score) {
  document.querySelector('.score').textContent = score;
};

//Event Handler for Check Button to run the guess game
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input

  if (!guess) {
    displayMessage('⛔ No Number');
  }

  //When number matches
  else if (guess === secretNumber) {
    displayMessage('🎉 You got it!');
    numbering(guess);

    //Manipulating CSS Styles

    //Implementing the Hish Score when it
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.getElementById('checks').disabled = true;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.guess').value = '';
  }

  //when Guess is incorrect
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');

      score--;
      scoring(score);
    } else {
      displayMessage('💥 YOU LOST THE GAME!');
      scoring(0);
    }
  }
});

//To re-start the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.backgroundColor = 'white';
  document.querySelector('.number').style.width = '15rem';
  numbering('?');
  scoring(score);
  document.querySelector('.message').textContent = 'Start guessing!';
  document.querySelector('.guess').value = '';

  document.getElementById('checks').disabled = false;
});
