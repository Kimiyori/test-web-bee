import { ReactComponent as Dropdown } from '../../../assets/icons/common/Dropdown.svg';
import { ReactComponent as Reload } from '../../../assets/icons/common/Reload.svg';
import { ReactComponent as Close } from '../../../assets/icons/common/Close.svg';
import { FC, PropsWithChildren, useReducer } from 'react';
type ElementWrapperProps = {
  name: string;
  reload: () => void;
};
export const ElementWrapper: FC<ElementWrapperProps & PropsWithChildren> = ({ name, reload, children }) => {
  const [dropdown, toggle] = useReducer((checked) => !checked, true);
  const [show, changeVisibility] = useReducer((checked) => !checked, true);

  return (
    <>
      {!show && (
        <main className=" m-2 m-lg-5">
          <button onClick={() => changeVisibility()} type="button" className="btn btn-primary w-100 ">
            Open
          </button>
        </main>
      )}
      {show && (
        <main className="p-4 bg-white m-2 m-lg-5">
          <div className="row justify-content-evenly mb-3">
            <h4 className="fs-4 col justify-content-start fw-normal">{name}</h4>
            <ul className="col justify-content-end nav gap-3">
              <li className="nav-item p-1" onClick={toggle}>
                <Dropdown title="Dropdown" />
              </li>
              <li className="nav-item p-1" onClick={reload}>
                <Reload title="Reload" />
              </li>
              <li className="nav-item p-1" onClick={changeVisibility}>
                <Close title="Close" />
              </li>
            </ul>
          </div>
          {dropdown && children}
        </main>
      )}
    </>
  );
};
