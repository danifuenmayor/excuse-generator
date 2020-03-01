let who = ['The dog', 'My granma', 'His turtle', 'My bird'];
let what = ['ate', 'pissed', 'crushed', 'broke'];
let when = ['before class', 'right on time', 'when I finished', 'during lunch', 'while I was praying'];

function generateExcuse(arr) {
    let number = Math.floor(Math.random() * arr.length);
    return arr[number];
}

function randomExcuse(a, b, c) {
    document.querySelector("#excuse").innerHTML = `${generateExcuse(a)} ${generateExcuse(b)} ${generateExcuse(c)}`
}

function execute() {
    randomExcuse(who, what, when);
}
