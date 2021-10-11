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

    calcMiddleSalary() {
        let sum = 0;
        let quantiti = 0;
        for (let key in this) {
            if (key !== "calcMiddleSalary" ){
        quantiti ++;
        sum = sum + this[key];
            }
        }
        alert( sum / quantiti );
    },
};

salary.calcMiddleSalary();
