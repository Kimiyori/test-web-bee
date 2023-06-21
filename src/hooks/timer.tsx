import { useEffect, useState } from "react";

export const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setTimeout(function () {
      setSeconds(() => seconds + 1);
    }, 1000);
  }, [seconds]);
  return seconds;
};
