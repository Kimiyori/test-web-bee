import { useHover } from 'hooks/UseHover';
import { Link, useLocation } from 'react-router-dom';
import { TNavLink } from 'utils/types';

export const HeaderUpperLink = ({ url = '/', img, name }: TNavLink) => {
  const { isHover, changeHoverState } = useHover();
  const location = useLocation();
  return (
    <li
      className={
        'nav-item text-center' + (location.pathname === url || isHover ? ' bg-body-secondary bg-opacity-50' : '')
      }
      onMouseEnter={changeHoverState}
      onMouseLeave={changeHoverState}
    >
      <Link to={url} className="align-middle text-decoration-none text-black">
        {img && <img src={img.image} alt={img.altName} className="align-middle" />}
        <p className="mb-0 mt-1 fw-light">{name}</p>
      </Link>
    </li>
  );
};
