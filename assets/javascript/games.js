// Identify computer choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// Set values for #scoreboard
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


document.getElementById("userWins").textContent = wins;
document.getElementById("userLosses").textContent = losses;
document.getElementById("guessesLeft").textContent = guessesLeft;

var reset = function () {
    guessesLeft = 9;
    document.getElementById("guessesLeft").textContent = guessesLeft;
    guessesSoFar = [];
    document.getElementById("userGuesses").textContent = guessesSoFar;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// var reset = function() {
//     document.getElementById("guessesLeft").innerHTML = 9;
//     document.getElementById("userGuesses").innerHTML = " ";
// }


document.onkeyup = function (event) {
    
    // var userGuess = event.key;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // guessesSoFar.push(userGuess);
    // document.getElementById("userGuesses").textContent = guessesSoFar;

    if (guessesSoFar.includes(userGuess)) {
        alert("You have already guessed that character. Please try again!")
    } else {
        guessesSoFar.push(userGuess);
        document.getElementById("userGuesses").textContent = guessesSoFar;
        guessesLeft--;
        document.querySelector("#guessesLeft").textContent = guessesLeft;
    }
    
    
    
    // for (i = 0; i < guessesSoFar; i++) {
    //     if (userGuess === guessesSoFar[i]) {
    //         alert("Cannot use duplicate characters! Please try again.")
    //     }
    // }

    

    if (guessesLeft > 0) {
        if ((userGuess) === (computerGuess)) {
            wins++;
            document.querySelector("#userWins").innerHTML = wins;
            reset();
            alert("You are Psychic!");
        }
    } else {
        losses++;
        document.querySelector("#userLosses").innerHTML = losses;
        reset();
        alert("You are not Psychic! Try again?")
    }


};
























