import { upperHeader } from 'data/header';
import { ReactComponent as Back } from 'assets/icons/header/Back.svg';
import HeaderNav from 'components/core/Header/elements/HeaderNav';

const ShowMenuButton = () => {
  return (
    <button
      className="navbar-toggler"
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

const UpperHeader = () => {
  return (
    <section id="upper-header" className="z-1 p-1 px-0 bg-light navbar navbar-expand-lg  justify-content-between mx-5">
      <figure className="fs-5  navbar-brand  m-0">
        <Back title="back" />
        <span className="ms-2 fw-light">User pages - Profile</span>
      </figure>
      <ShowMenuButton />
      <div className="collapse navbar-collapse  mt-lg-0 flex-grow-0" id="navbarSupportedContent1">
        <HeaderNav isVertical={true} navList={upperHeader} />
      </div>
    </section>
  );
};
export default UpperHeader;
