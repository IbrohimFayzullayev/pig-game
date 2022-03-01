"use strict";
let randomNum;
let score1 = 0;
let scor1 = document.querySelector("#score--0").textContent;
document.querySelector(".btn--roll").addEventListener("click", function () {
  randomNum = Math.trunc(Math.random() * 6) + 1;
  document.querySelector(".dice").src = `dice-${randomNum}.png`;
  if (randomNum == 1) {
    score1 = 0;
    document.querySelector("#score--0").textContent = score1;
  } else {
    score1 += randomNum;
    document.querySelector("#score--0").textContent = score1;
  }
});
let player1;
let player2;
let ball = score1;
document.querySelector(".btn--hold").addEventListener("click", function () {
  ball += score1;
  document.querySelector("#current--0").textContent = ball;
  document.querySelector("#score--0").textContent = 0;
  score1 = 0;
});
