'use strict';
// Elements defined
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const currentScoreEl0 = document.getElementById('current--0');
const currentScoreEl1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const NewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//Starting Conditions

const init = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  currentScoreEl0.textContent = 0;
  currentScoreEl1.textContent = 0;
  diceEl.classList.add('hidden');
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
  playing = true;
};

init();
//Function to set the current score to 0 and change the active player
const changeActivePlayer = function () {
  //if true then switch the player
  // set the current score for previous player to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //check who is the active player if 0 then change it 1 or wiseversa
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};

//Roll a Dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generate random number between 1 - 6
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    //Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //Check for dice = 1
    if (dice !== 1) {
      //Add the score the currentScore
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;

      // currentScoreEl0.textContent = currentScore;
    } else {
      changeActivePlayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    //Add the score to exisiting total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //Check if the total score is => 100 then end the game

    if (scores[activePlayer] >= 30) {
      //Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      // btnRoll.classList.add('hidden');
      // btnhold.classList.add('hidden');
      let ActivePlayerName = document.getElementById(`name--${activePlayer}`).textContent;
      alert(`Wonderfull, ${ActivePlayerName} you have won the game`);
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      //shift the active player
      changeActivePlayer();
    }
  }
});

// Click on the new GAME button to reset the scores
NewGame.addEventListener('click', init);
