//create var array of all the letters 
var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];


//create var for wins, losses, guesses left, and guesses so far
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = [];

var winDiv = document.getElementById("wins-text");
var lossDiv = document.getElementById("losses-text");
var guessDiv = document.getElementById("guesses-left");
var yourDiv = document.getElementById("your-guess");



//start JS on key press
document.onkeypress = function(event){
    var userGuess = event.key.toLowerCase();
 
//create JS for computer to randomly choose letter
    var computerGuesses = computerChoices[Math.floor(Math.random() * computerChoices.length)];
   
//Logic for when the user guesses correctly and "Your guess so far" resets. Also, alerts user to winning    
    console.log(userGuess);
    if(userGuess === computerGuesses){
        wins++;
        alert("You Won!");
        guessesLeft = 9;
        yourGuess = [];
    }
//if user does not guess computer's letter correctly then guessesLeft goes down by 1 and guessed letter is entered in "Your guess so far"
    else {
        guessesLeft--; 
        yourGuess.push(userGuess);
    }
    
//when guessesLeft = 0 then losses are added by 1 then guessesLeft equal to 9 and yourGuess is resetted. Alerts user to losing
    if(guessesLeft === 0){
       losses++;
       alert("You lost :(");
       guessesLeft = 9;
       yourGuess = [];
    }
//create code to display scores and guess on html

winDiv.textContent = "Wins: " + wins;
lossDiv.textContent = "Losses: " + losses;
guessDiv.textContent = "Guesses Left: " + guessesLeft;
yourDiv.textContent = "Your Guesses so far: " + yourGuess.join(', ');  
}


