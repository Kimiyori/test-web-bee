import { ActiveButtonrContext } from "components/shared/UI/Header";
import { useHover } from "hooks/hover";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TNavLink } from "utils/types";

export const HeaderBottomLink = ({ url, img, name }: TNavLink) => {
  const { isHover, changeHoverState } = useHover();
  const { activeButton } = useContext(ActiveButtonrContext);
  return (
    <li
      className={
        "nav-item d-inline-flex align-items-center " +
        (activeButton === url || isHover
          ? " bg-body-secondary bg-opacity-50"
          : "")
      }
      onMouseEnter={changeHoverState}
      onMouseLeave={changeHoverState}
    >
      <Link
        to={url}
        className="container text-decoration-none text-black fw-light"
      >
        <img src={img.image} alt={img.altName} className="align-middle" />

        <span className=" align-middle"> {name}</span>
      </Link>
    </li>
  );
};
