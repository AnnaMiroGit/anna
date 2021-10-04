"use strict";

// Function Declaration
const deg = +prompt('Введите значение угла в градусах', 180);
function calcRadDec(deg) {
    alert((deg * 3.14) / 180);
}
calcRadDec(deg);
// end Function Declaration


// Function Expression
const calcRadEx = function (deg) {
    const rad = (deg * 3.14) / 180;
    return alert(`Значение ${deg} градусов = ${rad} радиан  ex`);
};

calcRadEx(deg);
// end Function Expression

// Arrow Functions (Функции-стрелки)
const calcRad =  (deg) =>
     alert(`Значение ${deg} градусов = ${(deg * 3.14) / 180} радиан  =>`);

calcRad(deg);
// end Arrow Functions (Функции-стрелки)