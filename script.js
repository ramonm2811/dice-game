'use strict';
//Creamos un numero aleatorio entre 1-20
const number = Math.floor(Math.random() * 20) + 1;

//Valor inicial del Score
let score = Number(document.querySelector('.score').textContent);

//Agregamos el Event Listener del boton check
document.querySelector('.check').addEventListener('click', checkNumber);

//Event listener para el boton Again!
document.querySelector('.again').addEventListener('click', initGame);

//Funcion que evalua diferentes escenarios
function checkNumber() {
  const guess = Number(document.querySelector('.guess').value);

  //Que pasa si NO hay valor en Guess
  if (!guess) {
    document.querySelector('.message').textContent = 'Agregar Numero';
    decreaseScore();
  } //Que pasa sí Guess no esta en el rango del juego
  else if (guess < 0 || guess > 20) {
    alert('Debe ser un número entre 1 - 20');
    //Que pasa sí Guess === Number
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = 'Haz ganado el juego';
    document.querySelector('body').style.backgroundColor = '#60b347';
    //Que pasa si Guess esta muy alejada de Number
  } else if (guess > number + 5 || guess < number - 5) {
    document.querySelector('.message').textContent =
      'Estas FRIO, sigue intentando';
    decreaseScore();
    //Que pasa sí Guess esta cerca de Number
  } else if (guess < number + 5 || guess > number - 5) {
    document.querySelector('.message').textContent =
      'Estas TIBIO, sigue intentando';
    decreaseScore();
  }
}

//Funcion que disminuye el Score del juego
function decreaseScore() {
  score--;
  document.querySelector('.score').textContent = score;
  score;
}

function initGame() {
  //Creamos un numero aleatorio entre 1-20
  number = Math.floor(Math.random() * 20) + 1;

  //Valor inicial del Score
  score = Number(document.querySelector('.score').textContent);

  //Color inicial del background
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';
}

/* 
Game Logic: 

- 
*/
