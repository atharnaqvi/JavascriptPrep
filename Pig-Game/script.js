'use strict';
// Elements defined

const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const currentEl0 = document.querySelector('#current--0');
const currentEl1 = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const playerSec1 = document.querySelector('.player--0');
const playerSec2 = document.querySelector('.player--1');

let currentScore, activePlayer, scores, playing;

// Reset Game Function
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score1El.textContent = 0;
  score2El.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;

  diceEl.classList.add('hidden');
  playerSec1.classList.remove('player--winner');
  playerSec2.classList.remove('player--winner');
  playerSec1.classList.add('player--active');
  playerSec2.classList.remove('player--active');
};
init();

//Switch Player Function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  playerSec1.classList.toggle('player--active');
  playerSec2.classList.toggle('player--active');

  // currentScore += dice;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
};

// Roll A Dice Button Event
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
});

//Save the score when Hold button is clicked
btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  if (playing) {
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      // btnRoll.classList.add('hidden');
      // btnHold.classList.add('hidden');
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      playerSec1.classList.add('player--active');
      playerSec2.classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// New Game button Event
btnNew.addEventListener('click', init);
