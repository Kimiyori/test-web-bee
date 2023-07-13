import { ActiveButtonrContext } from 'components/shared/UI/Header';
import { useHover } from 'hooks/UseHover';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TNavLink } from 'utils/types';

export const HeaderUpperLink = ({ url = '/', img, name }: TNavLink) => {
  const { isHover, changeHoverState } = useHover();
  const { activeButton } = useContext(ActiveButtonrContext);
  return (
    <li
      className={'nav-item text-center' + (activeButton === url || isHover ? ' bg-body-secondary bg-opacity-50' : '')}
      onMouseEnter={changeHoverState}
      onMouseLeave={changeHoverState}
    >
      <Link to={url} className="align-middle text-decoration-none text-black">
        {img && <img src={img.image} alt={img.altName} />}
        <p className="mb-0 mt-1 fw-light">{name}</p>
      </Link>
    </li>
  );
};
