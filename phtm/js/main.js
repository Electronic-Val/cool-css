let led = document.getElementById("led");
let buttonx = document.getElementById("buttonx");
let screens = document.getElementById("screens");

speaker.addEventListener("click", tell);
led.addEventListener("click", tell2);
buttonx.addEventListener("click", tell3);
sensor.addEventListener("click", tell4);

function tell(e) {
  screens.innerHTML = "That is the speaker!";
}
function tell2(e) {
  screens.innerHTML = "That is the LED notification light!";
}
function tell3(e) {
  screens.innerHTML = "That is the home button!";
}
function tell4(e) {
  screens.innerHTML = "That is the proximity sensor!";
}

// MOVABLE BOX

let big = document.getElementById("contain");
let small = document.getElementById("box");

small.addEventListener("click", move);

function move(e) {
  small.style.left = "200px";
  small.style.backgroundColor = "background: linear-gradient(225deg, #311136 0%,#07063b 100%)";
}

/* CALCULATOR */
let paper = document.getElementById('answer');
let key = document.getElementById('submit');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num1');
let answer = num1+num2;

key.addEventListener('click', solve);

function solve(e) {
  e.preventDefault();
  paper.innerHTML = num1.value + num2.value;
}

//DOM MANIPULATIOM

var domMan = document.querySelector('#android');

console.log(domMan);