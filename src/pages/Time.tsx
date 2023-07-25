import ElementWrapper from 'components/shared/UI/WrapperBlock';
import useTimer from 'hooks/UseTimer';
const Time = () => {
  const { totalTime, handleReset } = useTimer();
  return (
    <ElementWrapper name="Time" onReload={handleReset}>
      <div className="position-relative d-flex justify-content-start align-items-center w-100 " id="timer">
        <p>{totalTime}</p>
      </div>
    </ElementWrapper>
  );
};
export default Time;
