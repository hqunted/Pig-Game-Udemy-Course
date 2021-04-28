'use strict';
// Selecting elements
const player1El = document.querySelector('.player--1');
const player0El = document.querySelector('.player--0');
const current0El = document.querySelector('#score--0');
const current1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Setting functions
const scoreReset = function () {
  current0El.textContent = 0;
  current1El.textContent = 0;
};
//Starting conditions
current0El.textContent = 0;
current1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Rolling dice funcitonality

    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    console.log('Hold Button');
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  scoreReset();
  player0El.classList.remove('player-winner');
  player1El.classList.remove('player-winner');
  player0El.classList.remove('player-active');
  player1El.classList.remove('player-active');
});
