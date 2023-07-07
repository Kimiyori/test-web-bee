let timerRef;
const initialTime = new Date();
const formattingTime = (time) => {
  return time.toString().padStart(2, "0");
};
const getTimeRepsesentation = (time) => {
  const hours = formattingTime(Math.floor(time / 60 / 60));
  const minutes = formattingTime(Math.floor((time / 60) % 60));
  const seconds = formattingTime(Math.floor(time % 60));
  return `${hours}:${minutes}:${seconds}`;
};
const startTime = () => {
  timerRef = setTimeout(myTimer, 1000);
};

const resetTimer = () => {
  clearTimeout(initialTime);
  timerRef = undefined;
};

export const myTimer = () => {
  const isTimePage = window.location.pathname.endsWith("/time");
  if (isTimePage) {
    startTime();
    document.querySelector("#timer").textContent = getTimeRepsesentation(Math.floor((new Date() - initialTime) / 1000));
  }
  !isTimePage && !timerRef && resetTimer();
};
