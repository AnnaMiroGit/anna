"use strict";
const salary = {
    ivanov: 300,
    petrov: 360,
    sidorov: 580,
    sinicin: 350,
    snegirev: 680,
    korovin: 920,
    pilipenko: 850,
    zaicev: 1900,
    lisicin: 530,
    semenov: 2800,
}

const clone = Object.assign({}, salary);

let averageSalary = 0;
let quantity = 0;

for (let key in salary) {
    averageSalary = averageSalary + salary[key];
    quantity++;
}

const midleSalary = averageSalary / quantity;

salary.midleSalary = midleSalary;

alert( salary.midleSalary );

let luсky = 0;
for (let key in salary){
 if (salary[key] > midleSalary) {
    luсky++;
    }
}

salary.luсky = luсky;

alert( salary.luсky );