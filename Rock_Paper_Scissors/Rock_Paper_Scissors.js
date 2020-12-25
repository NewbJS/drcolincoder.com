let allOptions = document.querySelector('.options')
let option = document.querySelector('.option')
let rockMove = document.getElementById('r')
let paperMove = document.getElementById('p')
let scissorMove = document.getElementById('s')
let playerScore = document.getElementById('player-score')
let compScore = document.getElementById('computer-score')
let results = document.querySelector('.result')
let playerStreakDiv = document.querySelector('.win-streak')
let timer = document.getElementById('timer')
let drawElement = document.getElementById('draws')
let myScore = 0
let computerScore = 0
let winStreak = 0
let draws = 0
let timeLeft = 30

setTimeout(() => {
    let xhttp = new XMLHttpRequest()
    xhttp.open('POST', '/highscore/score/3/submitscore', false)
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    let name = window.prompt('Type in your name.')
    xhttp.send('score=' + myScore + '&playerName=' + name)
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/highscore/score/3/topscore?playerName=' + name, false)
    xhr.onload = function () {
        let parseJson = JSON.parse(xhr.responseText)
        if (computerScore > myScore) {
            allOptions.innerHTML = ''
            results.innerHTML = 'The computer is now the champion! Your highscore is ' + parseJson.score
        } else if (myScore > computerScore) {
            allOptions.innerHTML = ''
            results.innerHTML = 'Congratulations! You are the champion! Your highscore is ' + parseJson.score
        } else {
            allOptions.innerHTML = ''
            results.innerHTML = 'It\'s a tie! There is no new champion! Your highscore is ' + parseJson.score
        }
    }
    xhr.send(null)
}, 31000);


setInterval(() => {
    timeLeft--
    timer.innerHTML = 'You have: ' + timeLeft + 's left!'
    if (timeLeft < 0) {
        timer.innerHTML = 'Time\'s up!'
    }
}, 1000)


function computerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor']
    let randomComputerChoice = Math.floor(Math.random() * 3)
    return choices[randomComputerChoice]
}

function convertToEmoji(word) {
    if (word === 'Rock') return '✊'

    else if (word === 'Paper') return '✋'

    else if (word === 'Scissor') return '✌️'
}

function win(playerChoice, computerChoice) {
    myScore++
    playerScore.innerHTML = myScore
    winStreak++
    if (winStreak >= 3) {
        playerStreakDiv.innerHTML = 'Your win streak is: ' + winStreak + '! You\'re on fire! 🔥'
    } else {
        playerStreakDiv.innerHTML = 'Your win streak is: ' + winStreak
    }
    results.innerHTML = convertToEmoji(playerChoice) + ' beats ' + convertToEmoji(computerChoice) + '! You won and gained 1 point!'
}

function lose(playerChoice, computerChoice) {
    computerScore++
    compScore.innerHTML = computerScore
    winStreak = 0
    playerStreakDiv.innerHTML = 'Your win streak is : ' + winStreak
    results.innerHTML = convertToEmoji(playerChoice) + ' loses against ' + convertToEmoji(computerChoice) + '! You lost and the computer gained 1 point!'
}

function draw() {
    winStreak = 0
    draws++
    drawElement.innerHTML = 'Draws: ' + draws
    playerStreakDiv.innerHTML = 'Your win streak is : ' + winStreak
    results.innerHTML = 'It\'s a draw! Both scores stay the same!'
}


function game(playerChoice) {
    let compChoice = computerChoice()
    switch (playerChoice + compChoice) {
        case 'RockScissor':
        case 'PaperRock':
        case 'ScissorPaper':
            win(playerChoice, compChoice)
            break
        case 'ScissorRock':
        case 'RockPaper':
        case 'PaperScissor':
            lose(playerChoice, compChoice)
            break
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorScissor':
            draw()
            break
    }
}

function gameMoves() {
    rockMove.addEventListener('click', () => {
        game('Rock')
    })

    paperMove.addEventListener('click', () => {
        game('Paper')
    })

    scissorMove.addEventListener('click', () => {
        game('Scissor')
    })
}

gameMoves()