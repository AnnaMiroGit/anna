"use strict";


function calcMin(min1, min2, min3) {
 const minNumber = min1;
    if (minNumber > min2) {
        minNumber = min2;
    }
    if (minNumber > min3) {
        minNumber = min3;
    }
    return minNumber;
}

const number1 = +prompt('Введите первое число');
const number2 = +prompt('Введите второе число');
const number3 = +prompt('Введите третье число');

const min = calcMin(number1, number2, number3);
 alert(min);
