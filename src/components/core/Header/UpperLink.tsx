import { Link } from "react-router-dom";
type TypeHeaderUpperElement = {
  url?: string;
  img?: { image: string; altName: string };
  name: string;
};

export const HeaderUpperLink = ({ url = "/", img, name }: TypeHeaderUpperElement) => {
  return (
    <Link to={url} className="align-middle text-decoration-none text-black">
      {img && <img src={img.image} alt={img.altName} />}
      <p className="mb-0 mt-1 fw-light">{name}</p>
    </Link>
  );
};
