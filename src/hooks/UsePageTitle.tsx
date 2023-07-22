import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from 'data/PagesData';

const usePageTitle = () => {
  const location = useLocation();
  useEffect(() => {
    const potentialLocation = routes.find((route) => route.pathname === location.pathname);
    potentialLocation && (document.title = potentialLocation.title);
  }, [location]);
};
export default usePageTitle;
