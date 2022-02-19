game();

function computerPlay() {
	let random_number = parseInt(Math.random() * (4 - 1) + 1);
	let rock_paper_scissors;
	switch (random_number) {
		case 1:
			rock_paper_scissors = 'rock';
			break;
		case 2:
			rock_paper_scissors = 'paper';
			break;
		case 3:
			rock_paper_scissors = 'scissors';
			break;
	}
	return rock_paper_scissors;
}

function playRound(playerSelection, computerSelection) {
	let result;
	if (computerSelection === 'rock') {
		if (playerSelection === 'paper')
			result = "You Win! Paper beats Rock";
		else if (playerSelection === 'scissors')
				result = "You Lose! Rock beats Scissors";
		else
				result = "Draw!";
	} else if (computerSelection === 'paper') {
		if (playerSelection === 'Scissors')
			result = "You Win! Scissors beats Paper";
		else if (playerSelection === 'rock')
				result = "You Lose! Paper beats Rock";
		else
				result = "Draw!";
	} else if (computerSelection === 'scissors') {
		if (playerSelection === 'rock')
			result = "You Win! Rock beats Scissors";
		else if (playerSelection === 'paper')
				result = "You Lose! Scissors beats Paper";
		else
				result = "Draw!";
	}

	return result;
}

function game() {
	console.log("Let's play \"Rock, Paper, Scissors\", the best of 5 wins!");
	let playerScore = 0, computerScore = 0;
	for (let i = 0; i < 5; i++) {
		let roundResult;
		let playerSelection = prompt("Choose (rock, paper, scissors): ").toLowerCase();
		let computerSelection = computerPlay();
		roundResult = playRound(playerSelection, computerSelection);
		console.log(roundResult);
		if (roundResult[4] === 'W') {
			playerScore++;
		} else if (roundResult[4] === 'L') {
			computerScore++;
		}
		if (i < 4)
			console.log(`Current score\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
	}
	console.log(`Final score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
}
