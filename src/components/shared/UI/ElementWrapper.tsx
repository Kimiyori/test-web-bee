import Dropdown from "../../../assets/icons/Dropdown.svg";
import Reload from "../../../assets/icons/Reload.svg";
import Close from "../../../assets/icons/Close.svg";
import { FC, useReducer } from "react";
type Props = {
  name: string;
  children?: JSX.Element | JSX.Element[];
};
export const ElementWrapper: FC<Props> = ({ name, children }) => {
  const [dropdown, toggle] = useReducer((checked) => !checked, true);
  const [show, closeElement] = useReducer((checked) => !checked, true);
  function reload() {
    window.location.reload();
  }
  return (
    <>
      {show && (
        <main className="p-4 bg-white m-2 m-lg-5">
          <div className="row justify-content-evenly mb-3">
            <h4 className="fs-4 col justify-content-start fw-normal">{name}</h4>
            <ul className="col justify-content-end nav gap-3">
              <li className="nav-item p-1" onClick={toggle}>
                <img src={Dropdown} alt="Dropdown" />
              </li>
              <li className="nav-item p-1" onClick={reload}>
                <img src={Reload} alt="Reload" />
              </li>
              <li className="nav-item p-1" onClick={closeElement}>
                <img src={Close} alt="Close" />
              </li>
            </ul>
          </div>
          {dropdown && children}
        </main>
      )}
    </>
  );
};
