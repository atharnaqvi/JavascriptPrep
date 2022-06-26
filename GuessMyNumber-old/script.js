'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

document.querySelector('.bgColYellow').addEventListener('click', function () {
  document.body.style.backgroundColor = 'yellow';
});
document.querySelector('.bgColGreen').addEventListener('click', function () {
  document.body.style.backgroundColor = 'green';
});
document.querySelector('.bgColBlack').addEventListener('click', function () {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
});
document.querySelector('.bgColWhite').addEventListener('click', function () {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
});

document.querySelector('.again').addEventListener('click', function () {
  window.location.reload();
});

let value1 = Math.trunc(Math.random() * 100) + 1;
console.log(value1);

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number Entered!';
  } else if (value1 === guess) {
    console.log(value1);
    document.querySelector('.number').textContent = value1;
    document.body.style.backgroundColor = 'green';
    let playerScore = Number(document.querySelector('.score').textContent);
    document.querySelector('.score').textContent = playerScore + 1;
    console.log(playerScore);
    console.log(typeof playerScore);
    document.querySelector('.message').textContent = '🎉🎉🎉Correct Number';
  } else if (value1 < guess) {
    document.querySelector('.number').textContent = value1;
    document.body.style.backgroundColor = 'red';
    document.querySelector('.message').textContent =
      '😥😥😥 The number is too high';
    document.querySelector('.score').textContent -= 1;
  } else {
    document.querySelector('.number').textContent = value1;
    document.body.style.backgroundColor = 'red';
    document.querySelector('.message').textContent =
      '😥😥😥 The number is too low';
    document.querySelector('.score').textContent -= 1;
  }
});
