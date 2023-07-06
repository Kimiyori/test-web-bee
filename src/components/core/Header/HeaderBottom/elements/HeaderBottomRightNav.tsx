import { HeaderBottomLink } from "./HeaderBottomLink";
import HeaderBottomSettings from "./HeaderBottomSettings";
import { bottomRightHeader } from "data/header";

const HeaderBottomRightNav = () => {
  return (
    <ul className="navbar-nav gap-3" aria-label="header-nav">
      {bottomRightHeader.map((element, i) => (
        <HeaderBottomLink
          key={i}
          url={element.url}
          img={{ image: element.img.image, altName: element.img.altName }}
          name={element.name}
        />
      ))}
      <HeaderBottomSettings url={"/settings"} />
    </ul>
  );
};
export default HeaderBottomRightNav;
