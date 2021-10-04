"use strict";

function checkAge(age) {
if (age < 16) {
    alert('Вы ещё молоды!');
} else {
    alert('Добро пожаловать!');
}
}

const ageUser = +prompt('Сколько Вам лет?', 18);
const message = checkAge(ageUser);
alert(message);
