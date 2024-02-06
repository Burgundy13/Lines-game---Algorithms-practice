let container = document.querySelector('.container');
let ballColors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'cyan'];
let selected = 'ball';
let twoClicks = [];
let found = false;

makeGrid();
let boxes = document.querySelectorAll('.box');
boxes.forEach((box) => box.addEventListener('click', selectBall));
makeBalls(10);

function selectBall() {
	if (selected === 'ball') {
		//from
		if (this.innerHTML !== '') {
			selected = null;
			twoClicks[0] = this;
		} else {
			alert('select');
		}
	} else {
		//to
		if (this.innerHTML === '') {
			selected = 'ball';
			twoClicks[1] = this;
			this.classList.add('newPos');
			findAllPossiblePaths(twoClicks[0]);
		} else {
			alert('ball');
		}
		if (twoClicks.length === 2 && found) {
			twoClicks[1].innerHTML = twoClicks[0].innerHTML;
			twoClicks[0].innerHTML = '';
			twoClicks.length = 0;
			resetAll();
			makeBalls(3);
			checkWins();
		} else {
			alert('There no free path');
			resetAll();
		}
	}
}

function checkWins() {
	let lines = [
		[1, 2, 3, 4],
		[-1, -2, -3, -4],
		[10, 20, 30, 40],
		[-10, -20, -30, -40],
		[11, 22, 33, 44],
		[-11, -22, -33, -44],
		[9, 18, 27, 36],
		[-9, -18, -27, -36],
	];
	boxes.forEach((box) => {
		let boxId = parseInt(box.id);
		let boxInner = box.innerHTML;
		lines.forEach((line) => {
			let boxOne = boxes[boxId + line[0]];
			let boxTwo = boxes[boxId + line[1]];
			let boxThree = boxes[boxId + line[2]];
			let boxFour = boxes[boxId + line[3]];

			if (
				boxOne &&
				boxTwo &&
				boxThree &&
				boxFour &&
				boxInner === boxOne.innerHTML &&
				boxInner === boxTwo.innerHTML &&
				boxInner === boxThree.innerHTML &&
				boxInner === boxFour.innerHTML &&
				boxInner !== ''
			) {
				box.style.background = 'red';
				boxOne.style.background = 'red';
				boxTwo.style.background = 'red';
				boxThree.style.background = 'red';
				boxFour.style.background = 'red';
				setTimeout(() => {
					box.innerHTML = '';
					boxOne.innerHTML = '';
					boxTwo.innerHTML = '';
					boxThree.innerHTML = '';
					boxFour.innerHTML = '';
					box.style.background = '';
					boxOne.style.background = '';
					boxTwo.style.background = '';
					boxThree.style.background = '';
					boxFour.style.background = '';
				}, 1000);
			}
		});
	});
}

function findAllPossiblePaths(selectedBall) {
	selectedBall.setAttribute('data-id', 'parent');
	let boxId = parseInt(selectedBall.id);
	let leftBox = boxes[boxId - 1];
	let rightBox = boxes[boxId + 1];
	let topBox = boxes[boxId - 10];
	let bottomBox = boxes[boxId + 10];

	let possiblePaths = [];

	//left
	if (
		boxId % 10 !== 0 &&
		leftBox.innerHTML === '' &&
		leftBox.getAttribute('data-id') !== 'parent'
	) {
		possiblePaths.push(leftBox);
	}

	//right
	if (
		boxId % 10 !== 9 &&
		rightBox.innerHTML === '' &&
		rightBox.getAttribute('data-id') !== 'parent'
	) {
		possiblePaths.push(rightBox);
	}

	//top

	if (
		topBox &&
		topBox.innerHTML === '' &&
		topBox.getAttribute('data-id') !== 'parent'
	) {
		possiblePaths.push(topBox);
	}

	//bottom
	if (
		bottomBox &&
		bottomBox.innerHTML === '' &&
		bottomBox.getAttribute('data-id') !== 'parent'
	) {
		possiblePaths.push(bottomBox);
	}

	possiblePaths.forEach((box) => {
		if (!box.classList.contains('newPos')) {
			findAllPossiblePaths(box);
		} else {
			found = true;
		}
	});
}

function resetAll() {
	found = false;
	boxes.forEach((box) => {
		box.style.background = '';
		box.classList.remove('newPos');
		box.removeAttribute('data-id');
	});
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
		randBox.innerHTML = `<div class="ball" style="background:${randColor}"></div>`;
		ballNumber--;
	}

	ballNumber === 0 ? null : makeBalls(ballNumber);
}
