import { Link } from "react-router-dom";

type NavElementData = {
  title: string;
  image: string;
  alt?: string;
};
const NavElement = ({ title, image, alt = "..." }: NavElementData) => {
  return (
    <>
      <li className="nav-item fs-6  mb-3">
        <Link
          to={"/"}
          className="align-middle text-decoration-none text-black fw-light"
        >
          <img src={image} width="20x" height="20x" alt={alt} />
          &nbsp;
          <span>{title}</span>
        </Link>
      </li>
    </>
  );
};
export default NavElement;
