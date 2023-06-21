import { Link } from "react-router-dom";
type TypeHeaderBottomElement = {
  url?: string;
  img?: { image: string; altName: string };
  name: string;
};

export const HeaderBottomLink = ({ url = "/", img, name }: TypeHeaderBottomElement) => {
  return (
    <Link to={url} className="align-middle text-decoration-none text-black fw-light">
      {img && <img src={img.image} width="15px" height="15px" alt={img.altName} />}
      <span> {name}</span>
    </Link>
  );
};
