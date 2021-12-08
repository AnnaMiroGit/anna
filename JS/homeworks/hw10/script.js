"use strict";

const calcSm = (number) => {
    const numberSm = +number * 2.54;
    alert( +numberSm.toFixed(2) )
};

let printNumber = prompt("Введите число", 0);

while (isNaN(+printNumber) && (!printNumber ));


