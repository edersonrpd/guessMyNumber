'use strict';

/*document.querySelector('.message').textContent = '🎉 Correct Number';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// gerando número aleatório entre 1 e 20 e gravando em variavel
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
	//convertendo o que foi digitado no input em numero e gravando em uma variavel
	const guess = Number(document.querySelector('.guess').value);

	// guess retornar como false retorne a mensagem que não possui numero
	if (!guess) {
		document.querySelector('.message').textContent = '🤷‍♀️ No number !';
	}
	// Quando o jogador vencer
	else if (guess === secretNumber) {
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('.message').textContent = '🎉 Correct Number';
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		document.querySelector('.score').textContent = score;

		//Sempre que score for maior que highScore gravar na variavel
		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}

		//Quando guess for maior que o secretNumber
	} else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '😐 Too high!';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent =
				'😫 You lost the game';
			document.querySelector('.score').textContent = 0;
		}

		//Quando guess for menor que o secretNumber
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '😐 Too low!';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent =
				'😫 You lost the game';
			document.querySelector('.score').textContent = 0;
		}
	}
});

document.querySelector('.again').addEventListener('click', () => {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
});
