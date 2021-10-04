"use strict";

const number1 = +prompt('Введите первое число', 100);
const number2 = +prompt('Введите второе число', 180);


// Function Declaration
function calcSumDec(number1, number2) {
    let sum = 0;
    for (let i = number1; i <= number2; i++) {
        sum = sum + i;
    };
    return alert( `Сумма чисел равна ${sum}  dec`)
};

calcSumDec(number1, number2);
// end Function Declaration

// Function Expression
const calcSumEx = function (number1, number2) {
    let sum = 0;
    for (let i = number1; i <= number2; i++) {
        sum = sum + i;
    };
    return alert( `Сумма чисел равна ${sum}  ex`)
};

calcSumEx(number1, number2);
// end Function Expression

// Arrow Functions (Функции-стрелки)
const calcSum = (number1, number2)  => {
    let sum = 0;
    for (let i = number1; i <= number2; i++) {
        sum = sum + i;
    };
    return alert( `Сумма чисел равна ${sum}  =>`)
};

calcSum(number1, number2);
// end Arrow Functions (Функции-стрелки)