import Dropdown from "../../../assets/icons/Dropdown.svg";
import Time from "../../../assets/icons/Time.svg";
type ShortBlockData = {
    title: string;
    timestamp: string;
};
const ShortBlock = ({ title,timestamp }: ShortBlockData) => {
  return (
    <>
      <article className="bg-white flex-column flex-lg-row d-flex align-items-center justify-content-between mb-4  p-4">
        <h4 className="fw-normal fs-3">{title}</h4>
        <div className="inline_center">
          <img src={Time} alt="Time icon" />
          <span className="ms-2">{timestamp} minutes ago</span>
          <img className="ms-2" src={Dropdown} alt="Dropdown icon" />
        </div>
      </article>
    </>
  );
};
export default ShortBlock;
