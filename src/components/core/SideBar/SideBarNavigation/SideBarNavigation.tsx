import SideBarNavElement from "./SideBarNavElement";
import { SideBarDropdownMenu } from "../SideBarDropdownMenu";
import { sideNavData } from "data/sideBarNav";
import { Fragment } from "react";
export const SideBarNavigation = () => {
  return (
    <>
      <aside className="row bg-white g-1 ps-4 pe-4 pt-3 pb-3 mb-4">
        <SideBarDropdownMenu title={"Navigation"}>
          <ul className="nav flex-column">
            {sideNavData.map((element, i) => (
              <Fragment key={i}>
                {i === 4 && <hr className="solid" />}
                <SideBarNavElement
                  url={element.url}
                  img={{
                    image: element.img.image,
                    altName: element.img.altName,
                  }}
                  name={element.name}
                />
              </Fragment>
            ))}
          </ul>
        </SideBarDropdownMenu>
      </aside>
    </>
  );
};
