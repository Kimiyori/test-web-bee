import UpButton from "../../../assets/icons/resume/nav/UpButton.svg";
import DownButton from "../../../assets/icons/common/Dropdown.svg";
import { useReducer } from "react";
type DropdownMenuType = {
  title: string;
  children: JSX.Element | JSX.Element[];
};
export const SideBarDropdownMenu = ({ title, children }: DropdownMenuType) => {
  const [show, toggle] = useReducer((checked) => !checked, true);
  return (
    <>
      <div className="d-flex justify-content-between mb-2" onClick={toggle}>
        <h4 className="m-0 fs-6 fw-normal">{title}</h4>
        <img src={show ? UpButton : DownButton} width={"24px"} alt="UpButton icon" />
      </div>
      {show && <hr className="solid" />}
      {show && children}
    </>
  );
};
