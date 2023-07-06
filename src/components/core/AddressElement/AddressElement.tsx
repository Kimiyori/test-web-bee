import { FC } from "react";
type TAddress = {
  name: string;
  url: string;
  img: { src: string; alt: string };
};
export const AddressElement: FC<TAddress> = ({ name, url, img }) => {
  return (
    <>
      <div className="d-flex flex-column align-items-center gap-3">
        <a
          className="text-decoration-none text-black d-flex flex-column align-items-center gap-3"
          href={url}
        >
          <img src={img.src} alt={img.alt} />
          <p className="text-decoration-none text-black">{name}</p>
        </a>
      </div>
    </>
  );
};
