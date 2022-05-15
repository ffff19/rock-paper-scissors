let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let playerSelection;
let round;
let playerScore = 0, computerScore = 0;
let roundMessage = document.querySelector('#roundMessage');
let player = document.querySelector('#player');
let computer = document.querySelector('#computer');

function start() {
	round = 1;
	if (playerScore > 0 || computerScore > 0) {
		let playerscore = player.children[1]
		player.removeChild(playerscore)
		let computerscore = computer.children[1]
		computer.removeChild(computerscore)
		playerScore = 0;
		computerScore = 0;
	}

	rock.addEventListener('click', e => {
		playerSelection = 'rock';
		game();
	});
	paper.addEventListener('click', e => {
		playerSelection = 'paper';
		game();
	});
	scissors.addEventListener('click', e => {
		playerSelection = 'scissors';
		game();
	});
}


function createLiRoundResult(result) {
	let roundResult = document.createElement('roundResult');
		roundResult.classList.add('roundResult');
		roundResult.textContent = result;

		roundMessage.appendChild(roundResult);
}

function computerPlay() {
	let random_number = parseInt(Math.random() * (4 - 1) + 1);
	let computerRps;
	switch (random_number) {
		case 1:
			computerRps = 'rock';
			break;
		case 2:
			computerRps = 'paper';
			break;
		case 3:
			computerRps = 'scissors';
			break;
	}
	return computerRps;
}

function playRound(playerSelection, computerSelection) {
	let result = `Round ${round}: `;

	if (computerSelection === 'rock') {
		if (playerSelection === 'paper') {
			result += "You Win! Paper beats Rock";
		} else if (playerSelection === 'scissors') {
				result += "You Lose! Rock beats Scissors";
		} else {
				result += "Draw!";
		}
	} else if (computerSelection === 'paper') {
		if (playerSelection === 'Scissors') {
			result +=  "You Win! Scissors beats Paper";
		} else if (playerSelection === 'rock') {
				result += "You Lose! Paper beats Rock";
		} else {
				result += "Draw!";
		}
	} else if (computerSelection === 'scissors') {
		if (playerSelection === 'rock') {
			result += "You Win! Rock beats Scissors";
		} else if (playerSelection === 'paper') {
				result += "You Lose! Scissors beats Paper";
		} else {
				result += "Draw!";
		}
	}
	return result;
}

function game() {
	let roundResult;
	let computerSelection = computerPlay();

	roundResult = playRound(playerSelection, computerSelection);

	if (round > 1) {
		console.log('a');
		if (roundMessage.children.length) {
			let firstNode = roundMessage.children[0]
			roundMessage.removeChild(firstNode)
		}
		let playerscore = player.children[1]
		player.removeChild(playerscore)
		let computerscore = computer.children[1]
		computer.removeChild(computerscore)
	}

	createLiRoundResult(roundResult);
	if (roundResult[13] === 'W') {
		playerScore++;
	} else if (roundResult[13] === 'L') {
		computerScore++;
	}

	let pScore = document.createElement('pScore');
	pScore.classList.add('pScore');
	pScore.textContent = playerScore;
	player.appendChild(pScore);
	
	let cScore = document.createElement('cScore');
	cScore.classList.add('cScore');
	cScore.textContent = computerScore;
	computer.appendChild(cScore);

	if (round < 5) {
		console.log(`Current score\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
	} else {
		let finalWinner;
		if (playerScore > computerScore) {
			finalWinner = 'Player wins!';
		} else if (playerScore < computerScore) {
			finalWinner = 'Computer wins!';
		} else {
			finalWinner = "It's a draw!";
		}
		let finalResult = document.createElement('finalResult');
		finalResult.classList.add('finalResult');
		finalResult.textContent = finalWinner;

		finalResultMessage.appendChild(finalResult);
		let playAgain = "Play again? ('yes' or 'no')";
		answerPlayAgain = window.prompt(playAgain);
		if (answerPlayAgain == 'yes') {
			window.location = 'index.html';
		} else {
			window.location = 'https://google.com';
		}
	}

	round++;
}

start();
