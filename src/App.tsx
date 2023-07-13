import { Routes, Route } from 'react-router-dom';
import ActivityPage from './pages/Resume';
import Map from './pages/Map';
import Time from './pages/Time';
import MainLayout from './components/shared/UI/MainLayout';
import { routes } from 'utils/routes';
import { usePageTitle } from 'hooks/UseTitle';

function App() {
  usePageTitle();
  return (
    <>
      <Routes>
        <Route path={routes.resume.pathname} element={<MainLayout />}>
          <Route index element={<ActivityPage />} />
          <Route path={routes.map.pathname} element={<Map />} />
          <Route path={routes.time.pathname} element={<Time />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
