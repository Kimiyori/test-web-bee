import Back from "../../../assets/icons/Back.svg";
import Statistics from "../../../assets/icons/Statistics.svg";
import Invoices from "../../../assets/icons/Invoices.svg";
import Schedule from "../../../assets/icons/Schedule.svg";
import { HeaderUpperLink } from "./UpperLink";

const ShowMenuButton = () => {
  return (
    <button
      className="navbar-toggler  me-5"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent1"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

export const UpperHeader = () => {
  return (
    <>
      <section className="z-1 p-1 pe-0 ps-0 bg-light shadow-sm navbar navbar-expand-lg">
        <figure className="fs-5  navbar-brand ms-5 m-0">
          <img src={Back} alt="Back" />
          <span className="ms-2 fw-light">User pages - Profile</span>
        </figure>
        <ShowMenuButton />
        <div className="collapse navbar-collapse  mt-lg-0" id="navbarSupportedContent1">
          <ul className="navbar-nav fs-6 justify-content-end gap-3 p-0 me-5 ms-auto flex-row">
            <li className="nav-item text-center ms-3">
              <HeaderUpperLink img={{ image: Statistics, altName: "Statistics" }} name={"Statistics"} />
            </li>
            <li className="nav-item text-center ms-3">
              <HeaderUpperLink img={{ image: Invoices, altName: "Invoices" }} name={"Invoices"} />
            </li>
            <li className="nav-item text-center ms-3">
              <HeaderUpperLink img={{ image: Schedule, altName: "Schedule" }} name={"Schedule"} />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
