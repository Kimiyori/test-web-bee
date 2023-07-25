import { FC } from 'react';
import HeaderLink from 'components/core/Header/elements/HeaderLink';
import { NavLinkProps } from 'utils/types';
const HeaderNav: FC<{ navList: NavLinkProps[]; isVertical?: boolean }> = ({ navList, isVertical = false }) => {
  return (
    <ul className={'navbar-nav gap-3 flex-row  justify-content-start '} aria-label="header-nav">
      {navList.map((element) => (
        <HeaderLink isVertical={isVertical} key={element.name} {...element} />
      ))}
    </ul>
  );
};
export default HeaderNav;
