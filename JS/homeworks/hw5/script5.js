"use strict";
let n = +prompt("Введите натуральное число", '');

nextPrime:
for (let i = 1; i <= n; ++i) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert(`Натуральный делитель числа ${n}: ` + i); // простое число
}
alert(`Натуральный делитель числа ${n}: ` + n);