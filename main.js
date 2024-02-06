let container = document.querySelector('.container');
let ballColors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'cyan'];

makeGrid();
let boxes = document.querySelectorAll('.box');
makeBalls(10);

function makeGrid() {
	let text = '';
	for (let i = 0; i < 100; i++) {
		text += `<div class="box" ></div>`.trim();
	}

	container.innerHTML = text;
}

// function makeBalls(ballNumber) {
// 	let loop = true;
// 	while (loop) {
// 		let rand = Math.floor(Math.random() * boxes.length);
// 		let rand2 = Math.floor(Math.random() * ballColors.length);
// 		let randColor = ballColors[rand2];
// 		let randBox = boxes[rand];
// 		if (randBox.innerHTML === '') {
// 			randBox.innerHTML = `<div class="ball" style="background:${randColor}">${ballNumber}</div>`;
// 			ballNumber--;
// 		}
// 		ballNumber === 0 ? (loop = false) : (loop = true);
// 	}
// }

function makeBalls(ballNumber) {
	let rand = Math.floor(Math.random() * boxes.length);
	let rand2 = Math.floor(Math.random() * ballColors.length);
	let randColor = ballColors[rand2];
	let randBox = boxes[rand];
	if (randBox.innerHTML === '') {
		randBox.innerHTML = `<div class="ball" style="background:${randColor}">${ballNumber}</div>`;
		ballNumber--;
	}

	ballNumber === 0 ? null : makeBalls(ballNumber);
}
