import { HeaderBottomLink } from './HeaderBottomLink';
import { bottomLeftHeader } from 'data/header';

const HeaderBottomLeftNav = () => {
  return (
    <ul className="navbar-nav gap-3" aria-label="header-nav">
      {bottomLeftHeader.map((element, i) => (
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
export default HeaderBottomLeftNav;
