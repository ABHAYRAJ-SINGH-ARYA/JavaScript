const randomNumber = parseInt(Math.random()*10 +1)

const  userInput = document.querySelector('guessField')
const submit = document.querySelector('subt')
const guessSlot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')

    }else if(guess < 1){
        alert('Please guess a number greater than 1')
    }else if(guess > 100){
        alert('Please guess a number less than 100')
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`game over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`congrats you won!`)
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is Too high`)
    }
}


function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}<h2>`
}

function displayGuess(guess){
    userInput.value =''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function newGame(){
    const newGameButton = document.querySelector('newGame')
}

function endGame(){
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML ='<h2 id="newGame">Start New Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame();
}