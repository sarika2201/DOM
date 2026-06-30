 let time = 10;

    let interval = setInterval(() => {
        time--;

        document.getElementById("timer").innerText = time;

        if (time === 0) {
            clearInterval(interval);
            document.getElementById("timer").innerText = "Time's Up!";
        }
    }, 1000);