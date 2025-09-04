'use strict';

const buttonStartElement = document.getElementById('buttonStart');
const minutesElement = document.getElementById('minutes');
const secundomerElement = document.getElementById('secundomer');
const buttonStopElement = document.getElementById('buttonStop');

secundomerElement.textContent = 0;
minutesElement.textContent = 0;

let timer = 0;
let myInterval = null;

function changeSec() {
	timer++;
	secundomerElement.textContent = timer % 60;
	minutesElement.textContent = Math.floor(timer / 60);
}

function startSecundomer() {
	if (myInterval !== null) return;
	myInterval = setInterval(changeSec, 1000);
}

function stopSecundomer() {
	if (myInterval === null) return;
	clearInterval(myInterval);
	myInterval = null;
	timer = 0;
	secundomerElement.textContent = 0;
	minutesElement.textContent = 0;
}

buttonStartElement.addEventListener('click', startSecundomer);
buttonStopElement.addEventListener('click', stopSecundomer);
