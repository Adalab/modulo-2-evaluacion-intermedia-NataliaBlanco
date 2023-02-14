'use strict';
/*  1.declarar todas las constantes trayendo todos los 
elementos del HTML
2. escuchar el evento sobre botón prueba una vez se introduce el número
3. recoger los values de los inputs
4 despues de el addevent listener, pintar 


*/

const inputNumber = document.querySelector('.js-input-number');
const btn = document.querySelector('.js-test-button');
const firstAnswer = document.querySelector('.js-answer-1');
const secondAnswer = document.querySelector('.js-answer-2');
const predefNumber = getRandomNumber(100);
let trialNumber = 0;

//funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function rightNumber() {
  const number = inputNumber.value;
  if (number >= predefNumber && number <= 101) {
    firstAnswer.innerHTML = 'Número demasiado Alto';
  } else if (number <= predefNumber) {
    firstAnswer.innerHTML = 'Número demasiado Bajo';
  } else if (number === predefNumber) {
    firstAnswer.innerHTML = 'Has Ganado Campeona!!!';
  } else if (number >= 101) {
    firstAnswer.innerHTML = 'Introduce un número correcto';
  }
}
function cumMessage() {
  trialNumber = trialNumber + 1;
  secondAnswer.innerHTML = `Número de Intentos ${trialNumber}`;
}
console.log(trialNumber);

function handleClick(ev) {
  ev.preventDefault();
  rightNumber();
  cumMessage();
}

//eventos
btn.addEventListener('click', handleClick);
