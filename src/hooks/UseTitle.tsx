import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from 'data/routes';

export const usePageTitle = () => {
  const location = useLocation();
  useEffect(() => {
    const potentialLocation = Object.keys(routes).find(
      (route) => routes[route as keyof typeof routes].pathname === location.pathname,
    );
    potentialLocation && (document.title = routes[potentialLocation as keyof typeof routes].title);
  }, [location]);
};
