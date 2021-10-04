"use strict";


function checkNumber(number) {
if (number < 10) return number * number;
if(number === 8 || number === 9) return number - 1;
if(number <= 7) return "Число меньше или равно 7";
}

const number = +prompt('Введите число?', '');
const message = checkNumber(number);
alert(message);
