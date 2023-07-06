import { useHover } from "hooks/hover";
import { Link } from "react-router-dom";

type TSideBarNavElement = {
  url: string;
  img: { image: string; altName: string };
  name: string;
};

const SideBarNavElement = ({ url, img, name }: TSideBarNavElement) => {
  const { isHover, changeHoverState } = useHover();
  return (
    <>
      <li
        className={
          "nav-item fs-6  mb-3" +
          (isHover ? " bg-body-secondary bg-opacity-50" : "")
        }
        onMouseEnter={changeHoverState}
        onMouseLeave={changeHoverState}
      >
        <Link
          to={url}
          className="align-middle text-decoration-none text-black fw-light"
        >
          <img src={img.image} alt={img.altName} />
          <span className="ms-1">{name}</span>
        </Link>
      </li>
    </>
  );
};
export default SideBarNavElement;
