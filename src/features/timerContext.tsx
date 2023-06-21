import { PropsWithChildren, createContext } from "react";
import { useTimer } from "../hooks/timer";

export type TypeTimer = {
  totalTime: string;
};
export const TimerContext = createContext<TypeTimer>({ totalTime: "" });
export const TimerProvider = ({ children }: PropsWithChildren) => {
  const time = useTimer();
  const hours = Math.floor(time / 60 / 60)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((time / 60) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
    const totalTime = `${hours}:${minutes}:${seconds}`;
  return <TimerContext.Provider value={{ totalTime }}>{children}</TimerContext.Provider>;
};
