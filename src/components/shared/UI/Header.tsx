import { UpperHeader } from '../../core/Header/HeaderUpper';
import { BottomHeader } from '../../core/Header/HeaderBottom';
import { FC } from 'react';

export const Header:FC = () => {
  return (
    <>
      <header>
        <UpperHeader />
        <BottomHeader />
      </header>
    </>
  );
};
