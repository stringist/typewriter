"use strict";

// init loop
// const max = 23;
// let i = 0;

// init()

// function init() {
//     loop();
// }

// function loop() {
//     console.log("iteration ", i)
//     i++;
//     if (i < max) {
//         setTimeout(loop, 100)
//     }
// }

window.addEventListener("load", setUp);

// const dqs = document.querySelector;
let typeWriter = document.querySelector(".typewritten");
let typedText = typeWriter.innerHTML;

const max = typedText.length + 1;
let i = -1;

function setUp() {
    console.log("setup", typedText);
    // typedText = "";
    //  typedText.classList.add(".hidden");
    init();
}

function init() {
    loop();
}

function loop() {
    console.log(i);
    let newString = typedText.substring(0, i);
    // typedText.charAt(i)
    console.log(newString);
    document.querySelector("#typewriter").innerHTML = newString;
    i++;
    // typedText = letter;

    playSound();

    if (i < max) {
        setTimeout(loop, 100);
    }
}

function playSound() {
    const typekey1 = document.querySelector("#typekey1");
    const typekey2 = document.querySelector("#typekey2");
    const typespace = document.querySelector("#typespace");
    const typelast = document.querySelector("#typelast");
    const typereturn = document.querySelector("#typereturn");

    const soundArr = {
        typekey1,
        typekey2,
        typespace,
        typelast,
        typereturn,
    };
    let randomSound = soundArr[(Math.floor((Math.random() * soundArr.length) + 1))];
    typekey1.play();
    let beat = new Audio('/path/to/my/beat.mp3');

}

// get html content, length of string is max iteration .typewritten