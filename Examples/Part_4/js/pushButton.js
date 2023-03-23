"use strict";
let counter = 1;

function changeText() {
    document.querySelector('p').innerHTML =
        "The button has been pressed! (" + counter + "x)";
    counter++;
}