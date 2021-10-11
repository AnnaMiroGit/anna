"use strict";

const square = {
    width: 100,
    height: 100,
    area() {
        alert( this.width * this.height )
    },
    perimetr() {
        alert( (this.width + this.height) * 2 )
    }
};

square.area();

square.perimetr();

