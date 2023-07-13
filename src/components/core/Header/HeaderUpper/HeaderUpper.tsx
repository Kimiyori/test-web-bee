import { upperHeader } from 'data/header';
import Back from '../../../../assets/icons/header/Back.svg';
import { HeaderUpperLink } from './elements/HeaderUpperLink';

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
      <section id="upper-header" className="z-1 p-1 px-0 bg-light shadow-sm navbar navbar-expand-lg">
        <figure className="fs-5  navbar-brand ms-5 m-0">
          <img src={Back} alt="Back" />
          <span className="ms-2 fw-light">User pages - Profile</span>
        </figure>
        <ShowMenuButton />
        <div className="collapse navbar-collapse  mt-lg-0" id="navbarSupportedContent1">
          <ul className="navbar-nav justify-content-end gap-4 me-5 pe-3 ms-auto flex-row" aria-label="upper-nav">
            {upperHeader.map((element, i) => (
              <HeaderUpperLink
                key={i}
                url={element.url}
                img={{ image: element.img.image, altName: element.img.altName }}
                name={element.name}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
