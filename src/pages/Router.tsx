import { routes } from 'data/PagesData';
import { Route, Routes } from 'react-router-dom';
import { routerType } from 'utils/types';
import usePageTitle from 'hooks/UsePageTitle';
import MainLayout from 'components/shared/UI/MainLayout';
const Router = () => {
  usePageTitle();
  const pageRoutes = routes.map(({ pathname, title, element }: routerType) => {
    return <Route key={title} path={`/${pathname}`} element={element} />;
  });

  return (
    <Routes>
      <Route element={<MainLayout />}>{pageRoutes}</Route>
    </Routes>
  );
};

export default Router;
