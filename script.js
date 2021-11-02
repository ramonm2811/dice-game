'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 54;
 */

document.querySelector('.check').addEventListener('click', checkNumber);

function checkNumber() {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = !guess
    ? 'Agregar un Numero'
    : '';
}
