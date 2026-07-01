let time = 10;
let interval;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

function updateTimer() {
    timerDisplay.innerText = time;
}

function startTimer() {
    if (interval) {
        return;
    }

    if (time <= 0) {
        time = 10;
    }

    interval = setInterval(() => {
        time--;
        updateTimer();

        if (time === 0) {
            clearInterval(interval);
            interval = null;
            timerDisplay.innerText = "Time's Up!";
        }
    }, 1000);
}

function stopTimer() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
updateTimer();