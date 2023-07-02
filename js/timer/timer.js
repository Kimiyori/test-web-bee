let time = 0;

const formattingTime = (time) => {
  return time.toString().padStart(2, "0");
};

const myTimer = () => {
  time++;
  const hours = formattingTime(Math.floor(time / 60 / 60));
  const minutes = formattingTime(Math.floor((time / 60) % 60));
  const seconds = formattingTime(Math.floor(time % 60));
  const timerTag = document.querySelector("#timer");
  if (timerTag) {
    timerTag.textContent = `${hours}:${minutes}:${seconds}`;
  }
};
setInterval(myTimer, 1000);