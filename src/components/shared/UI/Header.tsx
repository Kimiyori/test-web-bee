import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { UpperHeader } from "../../core/Header/UpperHeader";
import { BottomHeader } from "../../core/Header/BottomHeader";
export const Header = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);
  useEffect(() => {
    setActiveButton(location.pathname);
  }, [location]);
  return (
    <>
      <header>
        <UpperHeader />
        <BottomHeader activeButton={activeButton} />
      </header>
    </>
  );
};
