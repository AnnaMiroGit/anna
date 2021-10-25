"use strict";

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
  }
  
  const date = new Date(1990, 5, 9); // 9 июня 1990 года
  alert( getWeekDay(date) ); // СБ

  const dateBirthdayNow = new Date(2021, 9, 25); 
  alert( getWeekDay(dateBirthdayNow) );

  const ageNow = new Date(2021, 9, 25) - new Date(1990, 5, 9);
  console.log(Math.trunc(ageNow/31536000000));
