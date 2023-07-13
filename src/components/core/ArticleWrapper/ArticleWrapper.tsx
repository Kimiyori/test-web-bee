import { FC, ReactNode } from 'react';
type TArticle = {
  children?: JSX.Element | JSX.Element[] | ReactNode[];
};
export const ArticleWrapper: FC<TArticle> = ({ children }) => {
  return (
    <>
      <article className="bg-white p-4">{children}</article>
    </>
  );
};
