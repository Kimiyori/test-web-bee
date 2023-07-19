import { FC } from 'react';
import { HeaderLink } from './HeaderLink';
import { NavLinkProps } from 'utils/types';
export const HeaderNav: FC<{ navList: NavLinkProps[]; isVertical?: boolean }> = ({ navList, isVertical = false }) => {
  return (
    <ul className={'navbar-nav gap-3 flex-row  justify-content-start '} aria-label="header-nav">
      {navList.map((element, i) => (
        <HeaderLink isVertical={isVertical} key={i} url={element.url} icon={element.icon} name={element.name} />
      ))}
    </ul>
  );
};
