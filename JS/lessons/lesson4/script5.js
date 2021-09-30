"use strict";
const num1 = +prompt("Введите первое число!");
const num2 = +prompt("Введите второе число!");
const num3 = +prompt("Введите третье число!");

if (num1 === num2 && num1 === num3) {
 alert("Все числа равны");
} else {
    if(num1 === num2) {
        if(num1 > num3) {
            alert(`Самое большие числа первое и второе: ${num1}`);  
    } else {
        alert(`Самое большое третье число ${num3}`);
    }

} else if(num2 === num3){
    if(num1 > num2){
        alert(`Самое большое первое число ${num1}`);
    } else {
        alert(`Самое большие числа второе и третье: ${num2}`);
    }
} else if(num1 > num2) {
    if(num1 > num3){
        alert(`Самое большое первое число ${num1}`);
    } else {
        alert(`Самое большое третье число ${num3}`);
    }
} else {
    if(num2 < num3) {
        alert(`Самое большое третье число ${num3}`);
    } else {
        alert(`Самое большое второе число ${num2}`);

    }
}



  


