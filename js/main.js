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

function typeMssg(msg) {
  firstAnswer.innerHTML = msg;
}

function rightNumber() {
  const number = parseInt(inputNumber.value);
  if (isNaN(number)) {
    typeMssg('Debe introducir un Número');
  } else if (number < 1 || number > 100) {
    typeMssg('Número debe estar entre 1 y 100');
  } else if (number >= predefNumber) {
    typeMssg('Número demasiado Alto');
  } else if (number <= predefNumber) {
    typeMssg('Número demasiado Bajo');
  } else {
    typeMssg('Has Ganado Campeona!!!');
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
