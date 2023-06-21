import { TimerContext } from "../features/timerContext";
import { useContext } from "react";
import { ElementWrapper } from "../components/shared/UI/ElementWrapper";
const Time = () => {
  const { totalTime } = useContext(TimerContext);
  return (
    <>
      <ElementWrapper name="Time">
        <div className="position-relative d-flex justify-content-start align-items-center w-100 " id="timer">
          {totalTime}
        </div>
      </ElementWrapper>
    </>
  );
};
export default Time;
