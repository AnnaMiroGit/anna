"use strict";
const date = new Date();
const h = date.getHours();
const userName = prompt("Как Вас зовут?", "Анна");
if (h >= 4 && h <= 12) {
    alert(`Доброе утро, ${userName}!`);
} else if (h >= 13 && h <= 18)  {
    alert(`Бодрый день, ${userName}!`);
} else if (h >= 19 || h === 0) {
    alert(`Добрый вечер, ${userName}!`);
} else if (h >= 1 && h <= 3)  {
    alert(`Доброй ночи, ${userName}!`);
} else {
    alert("Такого быть не может!");
}