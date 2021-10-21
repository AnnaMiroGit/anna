"use strict";

const frontendGroup = {
    student1: "Yana",
    student2: "Igor",
    student3: "Anna",
    student4: "Sergey",
};

const arrKeys = Object.keys(frontendGroup);

console.log(arrKeys);

const arrValues = Object.value(frontendGroup);

console.log(arrValues);

const arrPare = Object.entries(frontendGroup);

console.log(arrPare);

const student = arrValues.find((item, index) => index === 3);

console.log(student);


