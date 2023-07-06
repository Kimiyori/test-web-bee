import { useEffect, useRef, useState } from "react";

export const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState);
  const countRef = useRef<ReturnType<typeof setInterval> | undefined>();

  useEffect(() => {
    countRef.current = setTimeout(() => {
      setTimer(() => timer + 1);
    }, 1000);
  }, [timer]);
  const handleReset = () => {
    clearInterval(countRef.current);
    setTimer(0);
  };

  return { timer, handleReset };
};
