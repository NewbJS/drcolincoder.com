const selector = document.querySelector(".num-sel");
const guessInfo = document.querySelector(".guess-info");

const ranNum = Math.floor(Math.random() * 10);
let amountWrong = 0;


function makeGuess() {
    const selVal = parseInt(selector.value, 10);
    if (selVal > ranNum) {
        amountWrong++;
        guessInfo.innerHTML = "Your guess was too high, try again!";
    }
    else if (selVal < ranNum) {
        amountWrong++;
        guessInfo.innerHTML = "Your guess was too low, try again!";
    }
    else {
        document.querySelector(".btn").disabled = true;
        if (amountWrong > 3){
            guessInfo.innerHTML = `Your guess was correct! You got ${amountWrong} wrong. You lost.`;
        }
        else {
            guessInfo.innerHTML = `Your guess was correct! You got ${amountWrong} wrong. You won.!`;
        }
    }
}