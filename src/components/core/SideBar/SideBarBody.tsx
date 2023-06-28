import { SideBarHeader } from "./SideBarHeader.mobile";
import { UserSummary } from "./UserSummary";
import { SideBarNavigation } from "./SideBarNavigation";
import { SideBarComments } from "./SideBarComments";
const SideBar = () => {
  return (
    <>
      <div
        className="col-2 offcanvas-lg offcanvas-end bg-light"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
        style={{ minWidth: "300px" }}
      >
        <SideBarHeader />
        <div className="offcanvas-body flex-column">
          <UserSummary />
          <SideBarNavigation />
          <SideBarComments />
        </div>
      </div>
    </>
  );
};
export default SideBar;
