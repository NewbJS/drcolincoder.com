const wordText = document.getElementById('word')
const wonDiv = document.getElementById('youwon')
const guessText = document.getElementById('guesses')
const hangman = document.getElementById('hangman')
const allButtons = document.getElementById('all-buttons')
const playAgain = document.getElementById('play-again')
playAgain.disabled = true
const words = [
    'hello',
    'bro',
    'javascript',
    'python',
    'earth',
    'trump',
    'egypt',
    'corona',
    'programming',
    'chicken',
    'jupiter',
    'phone',
    'google',
    'apple',
    'biden',
    'browser',
    'rainbow',
    'fish',
    'shark',
    'tornado',
    'potatoe',
    'tomatoe',
    'present',
    'game',
    'shirt',
    'pants',
    'socks',
    'office',
    'java',
    'sharp',
    'saturn',
    'son',
    'sun',
    'saw',
    'zebra'
]
const HANGMANPICS = [`
  +---+
  |   |
      |
      |
      |
      |
=========`, `
  +---+
  |   |
  O   |
      |
      |
      |
=========`, `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`, `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`, `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`, `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`, `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`]


const letters = 'abcdefghijklmnopqrstuvwxyz'
let guesses = 5
let poorVariableName = []
let randomWord = words[Math.floor(Math.random() * words.length)]

function theOrder(array, string) {
    let newString = ''
    for (let n = 0; n < string.length; n++) {
        if (array.includes(string[n])) {
            newString = newString + string[n]
        } else {
            newString = newString + '_'
        }
    }
    return newString
}

function buttonHandler() {
    for (let i in letters) {
        const buttonElement = document.createElement('button')
        buttonElement.disabled = false
        buttonElement.innerHTML = letters[i]
        guessText.innerHTML = guesses + 1
        buttonElement.addEventListener('click', () => {
            buttonElement.disabled = true
            poorVariableName.push(letters[i])
            wordText.innerHTML = theOrder(poorVariableName, randomWord)
            if (!randomWord.includes(letters[i]) && guesses > 0) {
                hangman.innerHTML = HANGMANPICS[HANGMANPICS.length - 1 - guesses]
                guesses--
                guessText.innerHTML = guesses + 1
            } else if (guesses === 0) {
                playAgain.disabled = false
                wonDiv.innerHTML = 'You lost!'
                wordText.innerHTML = randomWord
                hangman.innerHTML = HANGMANPICS[6]
                guessText.innerHTML = '0'
                wonDiv.classList.add('red')
                while (allButtons.firstChild) {
                    allButtons.removeChild(allButtons.firstChild)
                }
            }
            if (theOrder(poorVariableName, randomWord) === randomWord) {
                playAgain.disabled = false
                wonDiv.innerHTML = 'You won!'
                wonDiv.classList.add('green')
                while (allButtons.firstChild) {
                    allButtons.removeChild(allButtons.firstChild)
                }

            }
        })
        allButtons.appendChild(buttonElement)
    }
}

function again() {
    playAgain.disabled = true
    guesses = 5
    poorVariableName = []
    wonDiv.innerHTML = ''
    wonDiv.classList.remove('red', 'green')
    randomWord = words[Math.floor(Math.random() * words.length)]
    wordText.innerHTML = theOrder(poorVariableName, randomWord)
    while (allButtons.firstChild) {
        allButtons.removeChild(allButtons.firstChild)
    }
    buttonHandler()
    hangman.innerHTML = HANGMANPICS[0]
}

wordText.innerHTML = theOrder(poorVariableName, randomWord)
buttonHandler()
hangman.innerHTML = HANGMANPICS[0]