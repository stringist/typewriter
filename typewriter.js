"use strict";
const max = 23;
let i = 0;

init()

function init() {
    loop();
}

function loop() {
    console.log("iteration ", i)
    i++;
    if (i < max) {
        setTimeout(loop, 100)
    }
}