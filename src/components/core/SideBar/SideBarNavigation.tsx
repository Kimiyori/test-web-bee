import MyProfile from "../../../assets/icons/MyProfile.svg";
import Balance from "../../../assets/icons/Balance.svg";
import Connections from "../../../assets/icons/Connections.svg";
import Friends from "../../../assets/icons/FriendsNavigation.svg";
import Events from "../../../assets/icons/Events.svg";
import Settings from "../../../assets/icons/SettingsNavigation.svg";
import NavElement from "./NavElement";
import { SideBarDropdownMenu } from "./SideBarDropdownMenu";
export const SideBarNavigation = () => {
  return (
    <>
      <aside className="row bg-white g-1 ps-4 pe-4 pt-3 pb-3 mb-4">
        <SideBarDropdownMenu title={"Navigation"}>
          <ul className="nav flex-column" >
            <NavElement image={MyProfile} title="My profile"></NavElement>
            <NavElement image={Balance} title="Balance"></NavElement>
            <NavElement image={Connections} title="Connections"></NavElement>
            <NavElement image={Friends} title="Friends"></NavElement>
            <hr className="solid" />
            <NavElement image={Events} title="Events"></NavElement>
            <NavElement image={Settings} title="Account settings"></NavElement>
          </ul>
        </SideBarDropdownMenu>
      </aside>
    </>
  );
};
