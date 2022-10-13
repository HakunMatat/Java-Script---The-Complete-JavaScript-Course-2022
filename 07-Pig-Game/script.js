'use strict';

let dice = Math.ceil(Math.random() * 6);
document.querySelector('.dice').textContent = dice;

let score1 = (document.querySelectorAll('.score', 'score--0').textContent = 0);
let score2 = document.querySelectorAll('.score, score--1').textContent;

console.log(score1, score2);

if (dice > 1) {
    document.querySelector('.score').textContent = score1 + dice;
} else {
}
