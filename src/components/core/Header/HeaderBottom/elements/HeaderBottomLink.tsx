import { useHover } from 'hooks/UseHover';
import { Link, useLocation } from 'react-router-dom';
import { TNavLink } from 'utils/types';

export const HeaderBottomLink = ({ url, img, name }: TNavLink) => {
  const { isHover, changeHoverState } = useHover();
  const location = useLocation();
  return (
    <li
      className={
        'nav-item d-inline-flex align-items-center ' +
        (location.pathname === url || isHover ? ' bg-body-secondary bg-opacity-50' : '')
      }
      onMouseEnter={changeHoverState}
      onMouseLeave={changeHoverState}
    >
      <Link to={url} className="container text-decoration-none text-black fw-light">
        <img src={img.image} alt={img.altName} className="align-middle" />

        <span className="mb-0 mt-1 fw-light align-middle"> {name}</span>
      </Link>
    </li>
  );
};
