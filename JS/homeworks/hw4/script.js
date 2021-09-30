"use strict";
const result = +prompt("Введите номер месяца (1 - январь или 2 - февраль и т.д.)", "");
if (result == 12 || result == 1 || result == 2) {
    alert('Зимний месяц!');
} else if (result == 3 || result == 4 || result == 5) {
    alert('Весна!');
} else if (result == 6 || result == 7 || result == 8) {
    alert('Ура! Лето!!!');
} else if (result == 9 || result == 10 || result == 11) {
    alert('Осень!');
}