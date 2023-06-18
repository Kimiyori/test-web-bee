const start = new Date().getTime();
function myTimer() {
    const end = new Date().getTime();
    const totalTime = (end - start) / 1000;
    const hours = Math.floor(totalTime / 60 / 60)
        .toString()
        .padStart(2, "0");
    const minutes = Math.floor((totalTime / 60) % 60)
        .toString()
        .padStart(2, "0");
    const seconds = Math.floor(totalTime % 60).toString().padStart(2, "0");
    const timerTag = document.getElementById("timer");
    if (timerTag) {
        timerTag.textContent = `${hours}:${minutes}:${seconds}`
    }
}
setInterval(myTimer, 1000);
