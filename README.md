# Word-Guess-Game

This is a project from a bootcamp in which I am currently participating. I was instructed not to use any jQuery.
   
Here is a copy of the pseudo-code with which I started the project.
   
SET GLOBAL VARIABLES
	declare list of words array and assign values
	other variables

SET UP GAME
	generate a random index number for the words array
	use random index to declare and assign a variable for target word
	print target word length to the window for player
	generate divs to display guessed letters by length of target word

RUN GAME
	listen for player's keyup
	compare player's guess to target word
		count wrong guesses
		count correct guesses
	display correct answers to window
	reflect losses
		add and change body images
	generate and display feedback messages
	check for winning or losing condition
		compare wrong guesses to loss target (6 wrong guesses)
		compare correct guesses to win condition (goal.length)
   



