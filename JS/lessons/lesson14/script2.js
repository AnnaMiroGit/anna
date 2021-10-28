"use strict";

const firstBlock = document.querySelector("#first");
firstBlock.style.backgroundColor = "red";

const secondBlock = document.querySelector("#second");
secondBlock.style.backgroundColor = "blue";

const yellowBlocks = document.querySelectorAll(".yellow");

yellowBlocks[0].style.backgroundColor = "yellow";
yellowBlocks[yellowBlocks.length - 1].style.backgroundColor = "yellow";

const blocks = document.body.children;
blocks[3].style.backgroundColor = "green";