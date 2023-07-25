import { ReactComponent as UpButton } from 'assets/icons/resume/nav/UpButton.svg';
import { ReactComponent as DownButton } from 'assets/icons/common/Dropdown.svg';
import { FC, useReducer, PropsWithChildren } from 'react';
type DropdownMenuProps = {
  title: string;
};
const SideBarDropdownMenu: FC<DropdownMenuProps & PropsWithChildren> = ({ title, children }) => {
  const [show, toggle] = useReducer((checked) => !checked, true);
  return (
    <>
      <div className="d-flex justify-content-between mb-2" onClick={toggle}>
        <h4 className="m-0 fs-6 fw-normal">{title}</h4>
        {show ? <UpButton title="UpButton" /> : <DownButton title="DownButton" />}
      </div>
      {show && (
        <>
          <hr className="solid" />
          {children}
        </>
      )}
    </>
  );
};
export default SideBarDropdownMenu;
