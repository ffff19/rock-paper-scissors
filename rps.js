function computerPlay() {
	let random_number = parseInt(Math.random() * (4.0 - 1.0) + 1.0);
	let rock_paper_scissors;
	switch (random_number) {
		case 1:
			rock_paper_scissors = 'Rock';
			break;
		case 2:
			rock_paper_scissors = 'Paper';
			break;
		case 3:
			rock_paper_scissors = 'Scissors';
			break;
	}
	return rock_paper_scissors;
}

console.log(computerPlay());
