let elapse = 0
let timer = document.getElementById('timer')
setTimeout(() => {
    alert('You\'ve been here for a while, why don\'t you choose a game?')
}, 200000)

setInterval(() => {
   elapse++
   timer.innerHTML = elapse
}, 1000);