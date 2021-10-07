"use strict";

let number = +prompt('Введите число:');
let degree = +prompt('Введите степень, в которую нужно возвести число:');
let result = (number ** degree);

if (number < 1) {
    alert(`Поддерживаются только натуральные значения n`);
}

function pow(number, degree) {
    if (degree == 1) {
        return number;
    } else {
        return result;
    }
}

alert(pow(number, degree));
