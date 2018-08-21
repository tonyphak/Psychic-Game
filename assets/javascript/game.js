//create var array of all the letters 
var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

//create JS for computer to randomly choose letter

var computerGuesses = computerChoices [Math.floor(Math.random() * computerChoices.length)];

//create code to display wins, losses, guesses left, and your guess so far
var yourGuess = document.getElementById("your-guess");
var winsText = document.getElementById("wins-text");
var lossText = document.getElementById("losses-text");
var guessLeft = document.getElementById("guesses-left");



//create var for wins, losses, guesses left, and guesses so far
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = 0;

//start js on enter keypress
document.onkeypress = function(event){
    var userGuess = event.key;
    var computerGuesses = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuesses);
    console.log(userGuess);
    if(userGuess === computerGuesses){
        wins++;
        guessesLeft = 9;

//if user does not guess computer's guess then guessesLeft goes down by 1
    } else if(guessesLeft--);    
//when guessesLeft = 0 then losses are added by 1 then guessesLeft equal to 9
    if(guessesLeft === 0){
       losses++;
       guessesLeft = 9;
       yourGuess = "";
    }


    winsText.textContent = "Wins: " + wins;
    lossText.textContent = "Losses: " + losses;
    guessLeft.textContent = "Guesses Left: " +guessesLeft;
    yourGuess.textContent = "Your guesses so far: " + yourGuess;


}


