import MyProfile from "../../../assets/icons/MyProfile.svg";
import Balance from "../../../assets/icons/Balance.svg";
import Connections from "../../../assets/icons/Connections.svg";
import Friends from "../../../assets/icons/Friends.svg";
import Events from "../../../assets/icons/Events.svg";
import Settings from "../../../assets/icons/Settings.svg";
import UpButton from "../../../assets/icons/UpButton.svg";
import NavElement from "./NavElement";
export const SideBarNavigation = () => {
  return (
    <>
      <aside className="row bg-white g-1 ps-4 pe-4 pt-3 pb-3 mb-4">
        <div className="d-flex justify-content-between mb-2">
          <h4 className="m-0 fs-6 fw-normal">Navigation</h4>
          <img src={UpButton} alt="UpButton icon" />
        </div>
        <hr className="solid" />
        <ul className="nav flex-column">
          <NavElement image={MyProfile} title="My profile"></NavElement>
          <NavElement image={Balance} title="Balance"></NavElement>
          <NavElement image={Connections} title="Connections"></NavElement>
          <NavElement image={Friends} title="Friends"></NavElement>
        </ul>
        <hr className="solid" />
        <ul className="nav flex-column">
          <NavElement image={Events} title="Events"></NavElement>
          <NavElement image={Settings} title="Account settings"></NavElement>
        </ul>
      </aside>
    </>
  );
};

