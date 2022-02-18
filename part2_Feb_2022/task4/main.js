"use strict";

let text = "Hello World! ";
let rotateCw = true;
const tagId = "animation";

function rotate(clockwise = rotateCw, str = text) {
    if (clockwise) {
        return str.slice(-1) + str.slice(0, -1);
    } else {
        return str.slice(1) + str.slice(0, 1);
    }
}

// reads and changes HTML tag
function insertTextToHtml(str = text, id = tagId) {
    let element = document.getElementById(id);
    element.innerText = str;
}

// changes global variable (rotateCw) INPLACE
function changeDirection() {
    rotateCw = !rotateCw;
}

// reads and changes HTML tag
function initializePage() {
    insertTextToHtml();
    let element = document.getElementById(tagId);
    element.onclick = changeDirection;
}

// changes global variable (text) INPLACE
function animateSingleFrame() {
    text = rotate();
    insertTextToHtml();
}

initializePage();

setInterval(() => {
    animateSingleFrame();
}, 300);
