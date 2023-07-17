import { HeaderBottomLink } from './HeaderBottomLink';
import { bottomLeftHeader } from 'data/header';

const HeaderBottomNav = ({ navList }: { navList: typeof bottomLeftHeader }) => {
  return (
    <ul className="navbar-nav gap-3" aria-label="header-nav">
      {navList.map((element, i) => (
        <HeaderBottomLink
          key={i}
          url={element.url}
          img={{ image: element.img.image, altName: element.img.altName }}
          name={element.name}
        />
      ))}
    </ul>
  );
};
export default HeaderBottomNav;
