const squares = document.querySelectorAll(".square");
// console.log(squares);                                                  // returns a 'nodelist'
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");                                // gettng each square & for each of d squares removing class of mole
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)];          // har baar ek alag 'id' nmbr ayega...'0 se 8' tak nmbr hoga
    randomSquare.classList.add("mole");
    hitPosition = randomSquare.id;
}


squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.innerHTML = result;
            hitPosition = null;
        }
    })
})


function moveMole() {
    timerId = setInterval(randomSquare, 500);
}
moveMole();


function countdown() {
    currentTime--;
    timeLeft.innerHTML = currentTime;

    if (currentTime == 0) {
        clearInterval(countdownTimerId);
        clearInterval(timerId);
        alert("GAME OVER! Your final score is " + result);
    }
}
let countdownTimerId = setInterval(countdown, 1000);