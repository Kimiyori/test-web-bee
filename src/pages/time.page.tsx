import { TimerContext } from "../context/timerContext";
import { useContext } from "react";
import { ElementWrapper } from "../components/shared/UI/WrapperBlock";
import { usePageTitle } from "../hooks/title";
const Time = () => {
  usePageTitle("Time");
  const { totalTime, handleReset } = useContext(TimerContext);
  return (
    <>
      <ElementWrapper name="Time" reload={handleReset}>
        <div
          className="position-relative d-flex justify-content-start align-items-center w-100 "
          id="timer"
        >
          <p>{totalTime}</p>
        </div>
      </ElementWrapper>
    </>
  );
};
export default Time;
