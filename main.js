let container = document.querySelector('.container');
let ballColors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'cyan'];

makeGrid();
let boxes = document.querySelectorAll('.box');
makeBalls(30);

function makeGrid() {
	let text = '';
	for (let i = 0; i < 100; i++) {
		text += `<div class="box" ></div>`.trim();
	}

	container.innerHTML = text;
}
