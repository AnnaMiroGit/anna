"use strict";

const cost = +prompt("Введите стоимость покупки");
const sum = +prompt("Введите сумму внесённую в кассу");

const calcChange = (cost,sum) => sum - cost;
const calcBuy = (cost,sum,calcChange) => {
    if(cost < sum) {
        return alert(`Ваша сдача = ${calcChange(cost,sum)} `);
    } else {
        return alert('Недостаточно средств для покупки');
    };
};
calcBuy(cost,sum,calcChange);