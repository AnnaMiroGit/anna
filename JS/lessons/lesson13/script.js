"use strict";

const obj = {
    fullName: "Иванов Иван Иванович",
    age: 33,
    med: true, 
};

const objJSON = JSON.stringify(obj);
console.log(objJSON);
const objectJSON = JSON.parse(obj);
console.log(objectJSON);

