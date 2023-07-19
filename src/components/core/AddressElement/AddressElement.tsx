import { FC } from 'react';
import { NavLinkProps } from 'utils/types';

export const AddressElement: FC<NavLinkProps> = ({ name, url, icon }: NavLinkProps) => {
  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <a className="text-decoration-none text-black d-flex flex-column align-items-center gap-3" href={url}>
        <icon.src title={icon.title} />
        <p className="text-decoration-none text-black">{name}</p>
      </a>
    </div>
  );
};
