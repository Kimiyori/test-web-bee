import useHover from 'hooks/UseHover';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLinkProps } from 'utils/types';

const HeaderLink: FC<NavLinkProps & { isVertical?: boolean }> = ({ url, icon, name, isVertical = false }) => {
  const { isHover, changeHoverState } = useHover();
  const location = useLocation();
  return (
    <li
      className={
        `nav-item ${isVertical ? 'text-center' : ''} d-inline-flex align-items-center ` +
        (location.pathname === url || isHover ? ' bg-body-secondary bg-opacity-50' : '')
      }
      onMouseEnter={changeHoverState}
      onMouseLeave={changeHoverState}
    >
      <Link to={url} className="container text-decoration-none text-black fw-light">
        <icon.src className="align-middle" title={icon.title} />
        <span className={`${isVertical ? 'd-block' : ''} mb-0 mt-1 fw-light align-middle`}> {name}</span>
      </Link>
    </li>
  );
};
export default HeaderLink;
