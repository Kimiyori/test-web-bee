import useHover from 'hooks/UseHover';
import { Link } from 'react-router-dom';
import { NavLinkProps } from 'utils/types';

const SideBarNavElement = ({ url, icon, name }: NavLinkProps) => {
  const { isHover, changeHoverState } = useHover();
  return (
    <li
      className={'nav-item fs-6  mb-3' + (isHover ? ' bg-body-secondary bg-opacity-50' : '')}
      onMouseEnter={changeHoverState}
      onMouseLeave={changeHoverState}
    >
      <Link to={url} className="align-middle text-decoration-none text-black fw-light">
        <icon.src title={icon.title} />
        <span className="ms-1">{name}</span>
      </Link>
    </li>
  );
};
export default SideBarNavElement;
