"use strict";



function circle(r) {
   return r * 2 * Math.PI;
}
let r = +prompt('Введите радиус окружности:');
const message = circle(r);
alert(message);
