import ActivityPage from 'pages/Resume';
import Map from 'pages/Map';
import Time from 'pages/Time';
import { routerType } from 'utils/types';
export const routes: routerType[] = [
  {
    pathname: '/',
    title: 'Resume',
    element: <ActivityPage />,
  },
  {
    pathname: '/map',
    title: 'Map',
    element: <Map />,
  },
  {
    pathname: '/time',
    title: 'Time',
    element: <Time />,
  },
];
