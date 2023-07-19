import { FC, SVGProps } from 'react';

export type NavLinkProps = {
  url: string;
  icon: { src: FC<React.PropsWithChildren<React.PropsWithChildren<SVGProps<SVGSVGElement> & { title?: string }>>>; title: string };
  name: string;
};
