import { useHover } from 'hooks/UseHover';
import { Link, useLocation } from 'react-router-dom';

export const HeaderLink = ({
  url,
  img,
  name,
  isVertical = false,
}: {
  url: string;
  img: { image: string; altName: string };
  name: string;
  isVertical?: boolean;
}) => {
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
        <img src={img.image} alt={img.altName} className="align-middle" />
        <span className={`${isVertical ? 'd-block' : ''} mb-0 mt-1 fw-light align-middle`}> {name}</span>
      </Link>
    </li>
  );
};
