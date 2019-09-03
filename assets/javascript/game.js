let wins = 0;
let losses = 0;
let guessesLeft = [10];
let guessesSoFar = "";

let userGuessArray = [];
let randomLetterArray = [];
let userKey;
let randomLetter;



//initial display and score counts
const displayWins = document.getElementById("wins");
displayWins.textContent = wins;

const displayLosses = document.getElementById("losses");
displayLosses.textContent = losses;

const displayGuessesLeft = document.getElementById("guesses-left");
displayGuessesLeft.textContent = guessesLeft;

const displayGuessesSoFar = document.getElementById("guesses-so-far");
displayGuessesSoFar.textContent = guessesSoFar;



//game init to randomly choose letter and set guessesLeft to 10
function init() {
    guessesLeft = [10];
    userGuessArray = [];
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    randomLetter = alphabet[Math.floor((Math.random() * alphabet.length))]
    console.log("random letter: " + randomLetter);


    randomLetterArray[0] = randomLetter;
    console.log(randomLetterArray);
}

init();


document.onkeyup = function () {

    userKey = event.key;

    //stores keys pressed in array
    userGuessArray.push(" " + userKey);

    //prints keys pressed
    displayGuessesSoFar.textContent =  userGuessArray;

    guessesLeft = guessesLeft - 1;
    displayGuessesLeft.textContent = guessesLeft;

    //compares user key press to random letter
    if (randomLetter === userKey) {
        wins++;
        displayWins.textContent = wins;
        init();
    }
    else {
        console.log("different letter")
    }


    if (guessesLeft === 0) {
        init();
        alert("end")
        losses++;
        displayLosses.textContent = losses;
    }
    
    

}