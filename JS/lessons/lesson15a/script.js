"use strict";

let arr = [];
let listItem;

do {
    listItem = prompt("Введите пункты меню");
    if (listItem) arr.push(listItem);

} while (listItem);

console.log(arr);

const ul = document.createElement("ul");

arr.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    ul.append(li);
    // document.body.insertAdjacentHTML(
    //     "beforeend", 
    //     `<ul> <li> ${listItem} </li> </ul>`
    // );  
});

document.body.append(ul);





