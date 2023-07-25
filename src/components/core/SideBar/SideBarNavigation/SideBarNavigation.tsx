import SideBarNavElement from 'components/core/SideBar/SideBarNavigation/SideBarNavElement';
import SideBarDropdownMenu from 'components/core/SideBar/SideBarDropdownMenu';
import { sideNavData } from 'data/sideBarNav';
import { Fragment } from 'react';
const SideBarNavigation = () => {
  return (
    <aside className="row bg-white g-1 ps-4 pe-4 pt-3 pb-3 mb-4">
      <SideBarDropdownMenu title="Navigation">
        <ul className="nav flex-column">
          {sideNavData.map((element, index) => (
            <Fragment key={element.name}>
              {index === 4 && <hr className="solid" />}
              <SideBarNavElement {...element} />
            </Fragment>
          ))}
        </ul>
      </SideBarDropdownMenu>
    </aside>
  );
};
export default SideBarNavigation;
