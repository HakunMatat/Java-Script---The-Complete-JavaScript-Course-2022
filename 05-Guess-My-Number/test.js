const secretNumber = Math.ceil(Math.random() * 20);

document.querySelector('.check').addEventListener('click', function(){}
let guess = Number(document.querySelector('.guess').value);
let score = document.querySelector('.score').textContent;
// When player doesn't provide an input.
if (guess < 0 || guess > 20 || !guess) {
    document.querySelector('.message').textContent = 'Please enter a number between 1 and 20';
    // When player wins.
} else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    // When player's number is too high.
} else if (guess > secretNumber && !(guess < 0) && !(guess > 20)) {
    if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Number is too high!';
    } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
    }
    // When player's number is too low.
} else if (guess < secretNumber && !(guess < 0) && !(guess > 20)) {
    if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Number is too low!';
    } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
    }
    // When player's number is not between 1 to 20.
} else if (guess < 0 || guess > 20) {
    document.querySelector('.message').textContent = 'Please enter a number between 1 and 20';
}
