import { bottomLeftHeader, bottomRightHeader } from 'data/header';
import { useLocation } from 'react-router-dom';
import HeaderNav from './elements/HeaderNav';

export const BottomHeader = () => {
  const location = useLocation();
  return (
    <>
      <section id="bottom-header" className="navbar navbar-expand-lg bg-white shadow-sm fs-6 py-lg-0">
        {location.pathname === '/' && (
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
          className=" mx-5 collapse navbar-collapse mt-3 mt-lg-0 justify-content-between"
          id="navbarSupportedContent"
        >
          <HeaderNav navList={bottomLeftHeader} />
          <hr className="hr" />
          <HeaderNav navList={bottomRightHeader} />
        </div>
      </section>
    </>
  );
};
