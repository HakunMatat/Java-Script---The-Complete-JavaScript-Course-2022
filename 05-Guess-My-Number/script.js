'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.ceil(Math.random() * 20);

// Check! - Button
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    let score = document.querySelector('.score').textContent;

    // When player doesn't provide an input.
    if (guess < 0 || guess > 20 || !guess) {
        document.querySelector('.message').textContent =
            'Please enter a number between 1 and 20';

        // When player wins.
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // When player's number is too high.
    } else if (guess > secretNumber && !(guess < 0) && !(guess > 20)) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent =
                'Number is too high!';
        } else {
            document.querySelector('.message').textContent =
                'You lost the game!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#8b0000';
        }

        // When player's number is too low.
    } else if (guess < secretNumber && !(guess < 0) && !(guess > 20)) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent =
                'Number is too low!';
        } else {
            document.querySelector('.message').textContent =
                'You lost the game!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#8b0000';
        }
    }
});

// Again! - Button
document.querySelector('.again').addEventListener('click', function () {
    let score = 20;
    secretNumber = Math.ceil(Math.random() * 20);
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});
