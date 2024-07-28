import { WORDS } from "./it_words.js"

const NUMBER_OF_GUESSES = 6
let guessesRemaining = NUMBER_OF_GUESSES
let currentGuess = []
let nextLetter = 0
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
function game() {
    let board = document.getElementById('board')
    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        let row = document.createElement('div')
        row.className = 'word'

        for (let j = 0; j < 5; j++) {
            let box = document.createElement('div')
            box.className = 'letter'
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}

game();

document.addEventListener("keyup", (press) => {
    if (guessesRemaining === 0) {
        return
    }
    let pressedKey = String(press.key)

    if (pressedKey === "Backspace" && nextLetter == 0) {
        return
    }
    if (pressedKey === "Backspace" && nextLetter !== 0) {
        press.preventDefault();
        deletePrev();
        return;
    }
    if (pressedKey === "Enter") {
        checkGuess();
        return
    }
    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) {
        return
    } else {
        insertKey(pressedKey)
    }
})

function insertKey(pressedKey) {
    if (nextLetter === 5) {
        return
    }
    pressedKey = pressedKey.toLowerCase()
    let row = document.getElementsByClassName("word")[6 - guessesRemaining]
    let box = row.children[nextLetter]
    box.textContent = pressedKey
    box.classList.add("key")
    currentGuess.push(pressedKey)
    nextLetter += 1
}

function deletePrev() {
    let row = document.getElementsByClassName("word")[6 - guessesRemaining]
    let box = row.children[nextLetter - 1]
    box.textContent = ""
    box.classList.remove("key")
    currentGuess.pop()
    nextLetter -= 1
}

function checkGuess() {
    let row = document.getElementsByClassName("word")[6 - guessesRemaining]
    let guessString = ''
    let rightGuess = Array.from(rightGuessString)

    for (const val of currentGuess) {
        guessString += val
    }

    if (guessString.length != 5) {
        alert("Not enough letters!")
        alert(guessString)
        alert(rightGuess)

        return
    }

    if (!WORDS.includes(guessString)) {
        alert("Word not in list!")
        return
    }

    for (let i = 0; i < 5; i++) {
        let color = ''
        let letter = row.children[i]
        let rightLetter = currentGuess[i]

        let letterPosition = rightGuess.indexOf(currentGuess[i])
        if (currentGuess[i] === rightGuess[i]) {
            color = '#6aaa64'
        } else if (currentGuess[i] < rightGuess[i]) {
            color = '#fb9b00'
        }
        else {
            color = '#f7da21'
        }
            rightGuess[letterPosition] = "#"
        let delay = 250 * i
        setTimeout(() => {
            letter.style.backgroundColor = color
            letter.style.color = 'white'
        }, delay)
    }
    if (guessString === rightGuessString) {
        alert("You guessed right!")
        addGameResult(guessesRemaining);
        guessesRemaining = 0
        return
    } else {
        guessesRemaining -= 1;
        currentGuess = [];
        nextLetter = 0;

        if (guessesRemaining === 0) {
            addGameResult(0);
            alert("You've run out of guesses! Game over!")
            alert(`The right word was: "${rightGuessString}"`)
        }
    }
}



document.querySelectorAll('.keyboard-button').forEach(button => {
    button.addEventListener('click', function(event) {
        const key = event.target.textContent.trim();

        let keyValue = key;
        if (key === 'Del') {
            keyValue = 'Backspace';
        } 
        const keyupEvent = new KeyboardEvent('keyup', {
            key: keyValue,
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(keyupEvent);
    });
});
