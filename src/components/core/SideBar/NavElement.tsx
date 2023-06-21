type NavElementData = {
  title: string;
  image: string;
  alt?: string;
};
const NavElement = ({ title, image, alt = "..." }: NavElementData) => {
  return (
    <>
      <li className="nav-item fs-6  mb-3">
        <img src={image} width="20x" height="20x" alt={alt} />
        &nbsp;
        <span>{title}</span>
      </li>
    </>
  );
};
export default NavElement;
