import { Link } from "react-router-dom";
type TypeHeaderBottomElement = {
  url?: string;
  img?: { image: string; altName: string };
  name: string;
};

export const HeaderBottomLink = ({ url = "/", img, name }: TypeHeaderBottomElement) => {
  return (
    <Link to={url} className="container text-decoration-none text-black fw-light">
      {img && (
        <img src={img.image} alt={img.altName} className="align-middle" />
      )}

      <span className=" align-middle"> {name}</span>
    </Link>
  );
};
