"use strict";
const num1 = +prompt("Введите первое число!");
const num2 = +prompt("Введите второе число!");

let answer
answer = num1 > num2 ? 1 : num1 < num2 ? 2 : num1 === num2 ? 0 : "Ерунда!";
alert(answer);
