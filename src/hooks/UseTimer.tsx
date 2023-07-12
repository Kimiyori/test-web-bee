import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from 'utils/routes';
import { buildTimeStr, getTime } from 'utils/timer';
import useIsTabActive from './UseVisible';
let initialTime = Date.now();
export const useTimer = () => {
  const isVisible = useIsTabActive();
  const location = useLocation();
  const [timer, setTimer] = useState(getTime(initialTime));
  const countRef = useRef<ReturnType<typeof setTimeout> | undefined>();
  const handleStartTimer = () => {
    countRef.current = setTimeout(() => setTimer(() => getTime(initialTime)), 1000);
  };
  const handleStopTimer = () => {
    clearTimeout(countRef.current);
  };
  useEffect(() => {
    location.pathname === routes.time && isVisible ? handleStartTimer() : handleStopTimer();
  }, [location, isVisible, timer]);

  const handleReset = () => {
    handleStopTimer();
    setTimer(0);
    initialTime = Date.now();
  };
  const totalTime = buildTimeStr(timer);
  return { totalTime, handleReset };
};
