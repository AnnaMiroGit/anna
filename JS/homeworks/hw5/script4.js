"use strict";
let sum = 0;
let n = +prompt("Введите натуральное число", '');
let i = 0;
while (i < n) {
    ++i;
    sum += i;
}
alert(`Сумма чисел от 0 до ${n} = ` + sum);