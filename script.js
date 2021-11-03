'use strict';
//Creamos un numero aleatorio entre 1-20
let number = Math.floor(Math.random() * 20) + 1;

//Valor inicial del Score
let score = Number(document.querySelector('.score').textContent);
//let highScore = Number(document.querySelector('.highscore').textContent);

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
    //document.querySelector('.highscore').textContent = score;
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
}

function initGame() {
  //Creamos un numero aleatorio entre 1-20
  number = Math.floor(Math.random() * 20) + 1;

  //Valor inicial del Score
  score = 20;

  //Color inicial del background
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';
}

/* 
Game Logic: 

- Crear un numero aleatorio el cual nosotros debemos adivinar 
- Comenzamos con una puntuacion inicial (score)
- Sí nombramos hacemos un guess incorrecto, se nos disminuye en 1 unidad el score
    Sí nuestro guess es muy alto entonces obtenemos un mensaje (Muy alto)
    Sí nuestro guess es muy bajo entonces obtenemos un mensaje (Muy bajo)
- Sí adivinamos correctamente el numero aleatorio:
    * La pantalla pasa a verde
    * El numero aleatorio aparece en pantalla
    * Obtenemos el mensaje, Numero correcto Felicitaciones
    * Tenemos un contador que nos mantiene el score mas alto (highscore)
- Tenemos un botón Again para reiniciar el juego




TIPS:
Manten el codigo DRY
Puedes utilizar funciones cuando lineas de codigo se repiten
*/
