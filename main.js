let container = document.querySelector('.container');
let ballColors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'cyan'];

makeGrid();
let boxes = document.querySelectorAll('.box');
boxes.forEach((box) => box.addEventListener('click', selectBall));
makeBalls(10);

function selectBall() {
	if (this.innerHTML !== '') {
		findAllPossiblePaths(this);
	} else {
		alert('Selection must be ball');
	}
}

function findAllPossiblePaths(selectedBall) {
	let boxId = parseInt(selectedBall.id);
	let leftBox = boxes[boxId - 1];
	let rightBox = boxes[boxId + 1];
	let topBox = boxes[boxId - 10];
	let bottomBox = boxes[boxId + 10];

	//left
	if (boxId % 10 !== 0 && leftBox.innerHTML === '') {
		leftBox.style.background = '#ddd';
	}

	//right
	if (boxId % 10 !== 9 && rightBox.innerHTML === '') {
		rightBox.style.background = '#ddd';
	}

	//top

	if (topBox && topBox.innerHTML === '') {
		topBox.style.background = '#ddd';
	}

	//bottom
	if (bottomBox && bottomBox.innerHTML === '') {
		bottomBox.style.background = '#ddd';
	}
}

function makeGrid() {
	let text = '';
	for (let i = 0; i < 100; i++) {
		text += `<div class="box" id="${i}"></div>`.trim();
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
