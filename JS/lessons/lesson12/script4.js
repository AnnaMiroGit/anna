"use strict";

let speed=[9.73, 9.68, 9.71, 9.74, 9.72, 9.75];

const sortSpeed = speed.sort ((a, b) => b - a);

console.log(sortSpeed);

const [max1, max2, max3, ...rest] = sortSpeed;

console.log(rest);

