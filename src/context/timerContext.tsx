import { PropsWithChildren, createContext } from "react";
import { useTimer } from "../hooks/timer";
import { buildTimeStr } from "utils/timer";

export type TypeTimer = {
  totalTime: string;
  handleReset: () => void;
};
export const TimerContext = createContext<TypeTimer>({
  totalTime: "0",
  handleReset: () => undefined,
});
export const TimerProvider = ({ children }: PropsWithChildren) => {
  const { timer, handleReset } = useTimer();
  const totalTime = buildTimeStr(timer);
  return (
    <TimerContext.Provider value={{ totalTime, handleReset }}>
      {children}
    </TimerContext.Provider>
  );
};
