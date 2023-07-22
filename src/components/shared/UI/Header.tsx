import UpperHeader from 'components/core/Header/HeaderUpper';
import BottomHeader from 'components/core/Header/HeaderBottom';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <>
      <header>
        <UpperHeader />
        <BottomHeader />
      </header>
    </>
  );
};
export default Header;
