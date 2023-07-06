import { UpperHeader } from "../../core/Header/HeaderUpper/HeaderUpper";
import { BottomHeader } from "../../core/Header/HeaderBottom/HeaderBottom";
import { useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

type TActiveButton = {
  activeButton?: string;
};
export const ActiveButtonrContext = createContext<TActiveButton>({});

export const Header = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);
  useEffect(() => {
    setActiveButton(location.pathname);
  }, [location]);

  return (
    <>
      <ActiveButtonrContext.Provider value={{ activeButton }}>
        <header>
          <UpperHeader />
          <BottomHeader />
        </header>
      </ActiveButtonrContext.Provider>
    </>
  );
};
