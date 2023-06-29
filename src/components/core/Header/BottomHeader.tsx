import Activity from "../../../assets/icons/Activity.svg";
import Map from "../../../assets/icons/Map.svg";
import Time from "../../../assets/icons/Time.svg";
import Notes from "../../../assets/icons/Notes.svg";
import Friends from "../../../assets/icons/Friends.svg";
import Photo from "../../../assets/icons/Photo.svg";
import Settings from "../../../assets/icons/Settings.svg";
import { HeaderBottomLink } from "./BottomLink";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LeftMenu = () => {
  const SettingsElement = () => (
    <>
      <div
        className="dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <HeaderBottomLink
          img={{ image: Settings, altName: "Settings" }}
          name={"Settings"}
        />
      </div>
      <ul className="dropdown-menu position-absolute dropdown-menu-lg-end">
        <li>
          <Link
            to={"/"}
            className=" dropdown-item align-middle text-decoration-none text-black fw-light"
          >
            Test Settings 1
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            className=" dropdown-item align-middle text-decoration-none text-black fw-light"
          >
            Test Settings 2
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            className=" dropdown-item align-middle text-decoration-none text-black fw-light"
          >
            Test Settings 3
          </Link>
        </li>
      </ul>
    </>
  );
  return (
    <ul className="navbar-nav justify-content-end  gap-1  me-5">
      <li className="nav-item    p-1">
        <HeaderBottomLink
          img={{ image: Notes, altName: "Notes" }}
          name={"Notes"}
        />
      </li>
      <li className="nav-item   p-1">
        <HeaderBottomLink
          img={{ image: Friends, altName: "Friends" }}
          name={"Friends"}
        />
      </li>
      <li className="nav-item  p-1 ">
        <HeaderBottomLink
          img={{ image: Photo, altName: "Photo" }}
          name={"Photo"}
        />
      </li>
      <li className="nav-item  p-1 dropdown">
        <SettingsElement />
      </li>
    </ul>
  );
};

const RightMenu = ({ activeButton }: { activeButton: string }) => {
  return (
    <ul className="navbar-nav  justify-content-start  gap-1 me-auto ">
      <li
        className={
          "nav-item p-1" +
          (activeButton === "/" ? " bg-body-secondary bg-opacity-50" : "")
        }
      >
        <HeaderBottomLink
          url={"/"}
          img={{ image: Activity, altName: "Activity" }}
          name={"Activity"}
        />
      </li>
      <li
        className={
          "nav-item p-1" +
          (activeButton === "/map" ? " bg-body-secondary bg-opacity-50" : "")
        }
      >
        <HeaderBottomLink
          url={"/map"}
          img={{ image: Map, altName: "Map" }}
          name={"Map"}
        />
      </li>
      <li
        className={
          "nav-item  p-1" +
          (activeButton === "/time" ? " bg-body-secondary bg-opacity-50" : "")
        }
      >
        <HeaderBottomLink
          url={"/time"}
          img={{ image: Time, altName: "Time" }}
          name={"Time"}
        />
      </li>
    </ul>
  );
};
export const BottomHeader = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);
  useEffect(() => {
    setActiveButton(location.pathname);
  }, [location]);
  return (
    <>
      <section className="navbar navbar-expand-lg bg-white shadow-sm fs-6 py-lg-0">
        {activeButton === "/" && (
          <button
            className="btn d-lg-none bg-body-secondary bg-opacity-50 ms-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-controls="offcanvasResponsive"
            id="sidebar-menu"
          >
            Show side menu
          </button>
        )}
        <button
          className="navbar-toggler me-5 ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className=" ms-5  collapse navbar-collapse mt-3 mt-lg-0"
          id="navbarSupportedContent"
        >
          <RightMenu activeButton={activeButton} />
          <hr className="hr" />
          <LeftMenu />
        </div>
      </section>
    </>
  );
};
