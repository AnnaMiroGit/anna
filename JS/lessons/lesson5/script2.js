"use strict";
let number = +prompt("Введите число", 0);

nextPrime:
for (let n = 1; n <= number; n++) {

    for (let h = 1; h < n; h++) {
        if (n % 5 == 0) continue nextPrime;
    }
    alert(n * 2);
}
