import { Link } from "react-router-dom";
import { THeaderBottomLink } from "./HeaderBottomLink";
import Settings from "../../../../../assets//icons/header/Settings.svg";
import { useHover } from "hooks/hover";
import { useContext } from "react";
import { ActiveButtonrContext } from "components/shared/UI/Header";

const SettingsOption = ({
  url,
  name,
}: Pick<THeaderBottomLink, "url" | "name">) => {
  return (
    <li>
      <Link
        to={url}
        className=" dropdown-item align-middle text-decoration-none text-black fw-light"
      >
        {name}
      </Link>
    </li>
  );
};

const HeaderBottomSettings = ({ url }: Pick<THeaderBottomLink, "url">) => {
  const { isHover, changeHoverState } = useHover();
  const { activeButton } = useContext(ActiveButtonrContext);
  return (
    <>
      <li
        className={
          "nav-item d-inline-flex align-items-center " +
          (activeButton === url || isHover
            ? " bg-body-secondary bg-opacity-50"
            : "")
        }
        onMouseEnter={changeHoverState}
        onMouseLeave={changeHoverState}
      >
        <div
          className="dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Link
            to={"/settings"}
            className="container text-decoration-none text-black fw-light"
          >
            <img src={Settings} alt={"Settings"} className="align-middle" />

            <span className=" align-middle"> {"Settings"}</span>
          </Link>
        </div>
        <ul className="dropdown-menu position-absolute dropdown-menu-lg-end">
          <SettingsOption url="/settings1" name="Settings 1" />
          <SettingsOption url="/settings2" name="Settings 2" />
          <SettingsOption url="/settings3" name="Settings 3" />
        </ul>
      </li>
    </>
  );
};
export default HeaderBottomSettings;
