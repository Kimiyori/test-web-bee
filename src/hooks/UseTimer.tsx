import { useCallback, useEffect, useRef, useState } from 'react';
import { buildTimeStr, getTime } from 'utils/timer';
import useIsTabActive from 'hooks/UseIsTabActive';

let initialTime = Date.now();

const useTimer = () => {
  const isVisible = useIsTabActive();
  const [timer, setTimer] = useState(getTime(initialTime));
  const countRef = useRef<ReturnType<typeof setTimeout> | undefined>();
  const handleStartTimer = () => {
    setTimer(() => getTime(initialTime));
    countRef.current = setInterval(() => setTimer(() => getTime(initialTime)), 1000);
  };
  const handleStopTimer = () => {
    clearInterval(countRef.current);
  };
  const handleReset = useCallback(() => {
    handleStopTimer();
    initialTime = Date.now();
    handleStartTimer();
  }, []);
  useEffect(() => {
    isVisible && handleStartTimer();
    return () => handleStopTimer();
  }, [isVisible]);

  const totalTime = buildTimeStr(timer);
  return { totalTime, handleReset };
};
export default useTimer;
