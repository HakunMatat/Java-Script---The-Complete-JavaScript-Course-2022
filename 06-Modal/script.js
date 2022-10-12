'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');

let btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
