// This code runs immediately when the script loads, which means:

// It just logs the initial value of the input (probably an empty string "").

// It doesn’t wait for the user to type or click Submit.

// Solution:
//  .value should be accessed inside an event listener — typically a button click or form submit.

// const userInput = document.getElementById('guess');
// console.log(userInput.value);

const randomNumber = Math.floor(Math.random() * 100 + 1);
// console.log(randomNumber)
let attempts = 10;

const userInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const result = document.getElementById("message");
const resetButton = document.getElementById("reset");
let guesshistory = [];

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  const userGuess = parseInt(userInput.value);
  // console.log(userGuess)
  validateGuess(userGuess);
});

function validateGuess(guess) {
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    result.innerText = "Please enter a number between 1 and 100";
    return false;
  } else {
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  attempts--;
  guesshistory.push(guess); 
  document.getElementById("guess-history").innerText =
  "Your Guesses: " + guesshistory.join(", ");
  document.getElementById("attempts-left").innerText = "Attempts Left: " + attempts;
  if (guess === randomNumber) {
    result.innerText = "Congratualtions you won!";
  }else if(guess < randomNumber) {
    result.innerText = "Your guess is too low";
  }else if(guess > randomNumber){
      result.innerText = "Your guess is too high";
  }else if (attempts === 0) {
  result.innerText = "Game Over! The number was " + randomNumber;
  endGame();
}
}

function endGame(){
  userInput.disaled = true;
  subbmitButton.disabled= true;
  resetButton.style.display = 'inline';
}

resetButton.addEventListener('click',function(e){
  attempts=10;
  guesshistory = [];
  userInput.disabled = false;
  submitButton.disabled = false;
  userInput.value = '';
  result.innerText = '';
  document.getElementById("guess-history").innerText = "Your Guesses: ";
  document.getElementById("attempts-left").innerText = "Attempts Left: " + attempts;
  randomNumber = Math.floor(Math.random() * 100 + 1);
  resetButton.style.display = 'none';
})

