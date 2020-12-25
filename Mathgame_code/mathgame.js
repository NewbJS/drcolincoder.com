const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
let points = 0
function startGame(){
    showTextNode(1)
    points = 0
}
function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    if(textNode.id === textNodes.length){
        let xhttp = new XMLHttpRequest()
        xhttp.open('POST', '/highscore/score/2/submitscore', false)
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        let name = window.prompt('Type in your name.')
        xhttp.send('score=' + points + '&playerName=' + name)
        let xhr  = new XMLHttpRequest()
        xhr.open('GET', '/highscore/score/2/topscore?playerName=' + name, false)
        xhr.onload = function () {
            let parseJson = JSON.parse(xhr.responseText)
            if(points === textNodes.length -1){
                textNode.text = 'You won! You scored ' + points + ' points! Your highscore is ' + parseJson.score
            }else{
                textNode.text = 'You lost! You scored ' + points + ' points! Your highscore is ' + parseJson.score
            }
        }
        xhr.send(null)
    }
    textElement.innerText = textNode.text
    while(optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option => {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => {
            if(textNode.correctAnswer === option.text){
                points+=1
                showTextNode(textNodeIndex +1)
            }else{
                showTextNode(textNodeIndex +1)
            }
                
        })
        
        
        optionButtonsElement.appendChild(button)
    })
    
}

let textNodes = [
    {
        id: 1,
        text: 'What is 4 + 5?',
        correctAnswer: '9',
        options: [
            {
                text: '9'
            },
            {
                text: '5'
            }

        ]
    },
    {
        id: 2,
        text: 'What is 7 * 8?',
        correctAnswer: '56',
        options: [
            {
                text: '49'
            },
            {
                text: '56'
            }
        ]
    },
    {
        id: 3,
        text: 'What is 75 / 3?',
        correctAnswer: '25',
        options: [
            {
                text: '37'
            },
            {
                text: '25'
            }
        ]
    },
    {
        id: 4,
        text: 'What is 4 * 6?',
        correctAnswer: '24',
        options: [
            {
                text: '24'
            },
            {
                text: '18'
            }
        ]
    },
    {
        id: 5,
        text: '',
        options: []
    }
]
startGame()