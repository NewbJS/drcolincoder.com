function ranNum(length) {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

let questions = ['s', ranNum(2), ranNum(3), ranNum(4), ranNum(5), ranNum(6), ranNum(6)]
let questionIndex = 0
let questionstRightNum = 0
let questionsRight = []
let questionsWrong = []

function startGame() {
    questions[questionIndex]
}

function inputText() {
    const inputValue = document.getElementById('inp').value
    const headerValue = document.getElementById('header')
    let divText = document.getElementById('divtext')
    if (inputValue === questions[questionIndex]) {
        questionsRight.push(questions[questionIndex])
        headerValue.innerText = 'Correct!'
        questionstRightNum++
        questionIndex++

    } else {
        questionsWrong.push(inputValue)
        headerValue.innerText = 'Incorrect!'
        questionIndex++
    }

    divText.innerHTML = 'Type in ' + questions[questionIndex]

    if (questionIndex === questions.length) {
        let xhttp = new XMLHttpRequest()
        xhttp.open('POST', '/highscore/score/4/submitscore', false)
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        let name = window.prompt('Type in your name.')
        xhttp.send('score=' + questionstRightNum + '&playerName=' + name)
        let xhr = new XMLHttpRequest()
        xhr.open('GET', '/highscore/score/4/topscore?playerName=' + name, false)
        xhr.onload = function () {
            let parseJson = JSON.parse(xhr.responseText)
            divText.innerHTML = 'Game over! You got ' + questionsRight.join(', ') +
                ' correct! Your highscore is ' + parseJson.score + '! Type \'s\' to play again!'
            questionsRight = []
            questionIndex = 0
        }
        xhr.send(null)
    }
}