import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActivityPage from './pages/Resume';
import Map from './pages/Map';
import Time from './pages/Time';
import { TimerProvider } from './context/TimerContext';
import MainLayout from './components/shared/UI/MainLayout';
import { routes } from 'utils/routes';
function App() {
  return (
    <>
      <Router>
        <TimerProvider>
          <Routes>
            <Route path={routes.resume} element={<MainLayout />}>
              <Route index element={<ActivityPage />} />
              <Route path={routes.map} element={<Map />} />
              <Route path={routes.time} element={<Time />} />
            </Route>
          </Routes>
        </TimerProvider>
      </Router>
    </>
  );
}

export default App;
