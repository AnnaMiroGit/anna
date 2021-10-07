"use strict";

const number = +prompt('Введите число', 100);


// Function Declaration
function calcFactorialDec(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    };
    return alert( `Факториал числа ${number} равен ${factorial}  dec`)
};

calcFactorialDec(number);
// end Function Declaration

// Function Expression
const calcFactorialEx = function (number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    };
    return alert( `Факториал числа ${number} равен ${factorial}  ex`)
};

calcFactorialEx(number);
// end Function Expression

// Arrow Functions (Функции-стрелки)
const calcFactorial = (number)  => {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    };
    return alert( `Факториал числа ${number} равен ${factorial}  =>`)
};

calcFactorial(number);
// end Arrow Functions (Функции-стрелки)