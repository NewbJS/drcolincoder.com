import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection, snakeSpeed } from './snake_design.js'
import { update as updateFood, draw as drawFood, pointAmount } from './food.js'
import { outsideGrid } from './grid.js'
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
function main(currentTime) {
  if (gameOver) {
    let xhttp = new XMLHttpRequest()
    xhttp.open('POST', '/highscore/score/5/submitscore', false)
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    let name = window.prompt('Type in your name.')
    xhttp.send('score=' + addOne(pointAmount) + '&playerName=' + name)
    let xhr  = new XMLHttpRequest()
    xhr.open('GET', '/highscore/score/5/topscore?playerName=' + name, false)
    xhr.onload = function () {
      let parseJson = JSON.parse(xhr.responseText)
      if (confirm('You lost :( Your length was ' + addOne(pointAmount) + ' blocks! Your highscore is ' + parseJson.score + ' blocks. Press ok to restart.')) {
        window.location = '/snake_game/snake.html'
      }
    }
    xhr.send(null)
    return
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / snakeSpeed) return


  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

let addOne = (num) => { return num + 1 }
