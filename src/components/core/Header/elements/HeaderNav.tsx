import { HeaderLink } from './HeaderLink';
import { bottomLeftHeader } from 'data/header';

const HeaderNav = ({ navList, isVertical = false }: { navList: typeof bottomLeftHeader; isVertical?: boolean }) => {
  return (
    <ul className="navbar-nav gap-3" aria-label="header-nav">
      {navList.map((element, i) => (
        <HeaderLink
          isVertical={isVertical}
          key={i}
          url={element.url}
          img={{ image: element.img.image, altName: element.img.altName }}
          name={element.name}
        />
      ))}
    </ul>
  );
};
export default HeaderNav;
