import { FC, PropsWithChildren } from 'react';

export const ArticleWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <article className="bg-white p-4">{children}</article>;
};
