import Resume from '../assets//icons/header/Resume.svg';
import Map from '../assets//icons/header/Map.svg';
import Time from '../assets//icons/header/Time.svg';
import Notes from '../assets//icons/header/Notes.svg';
import Friends from '../assets//icons/header/Friends.svg';
import Photo from '../assets//icons/header/Photo.svg';
import Statistics from '../assets/icons/header/Statistics.svg';
import Invoices from '../assets/icons/header/Invoices.svg';
import Schedule from '../assets/icons/header/Schedule.svg';
import Settings from '../assets/icons/header/Settings.svg';
import { routes } from 'utils/routes';
export const bottomLeftHeader = [
  {
    url: routes.resume.pathname,
    img: { image: Resume, altName: 'Resume' },
    name: 'Resume',
  },
  {
    url: routes.map.pathname,
    img: { image: Map, altName: 'Map' },
    name: 'Map',
  },
  {
    url: routes.time.pathname,
    img: { image: Time, altName: 'Time' },
    name: 'Time',
  },
];
export const bottomRightHeader = [
  {
    url: '/notes',
    img: { image: Notes, altName: 'Notes' },
    name: 'Notes',
  },
  {
    url: '/friends',
    img: { image: Friends, altName: 'Friends' },
    name: 'Friends',
  },
  {
    url: '/photo',
    img: { image: Photo, altName: 'Photo' },
    name: 'Photo',
  },
  {
    url: '/settings',
    img: { image: Settings, altName: 'Settings' },
    name: 'Settings',
  },
];
export const upperHeader = [
  {
    url: '/statistics',
    img: { image: Statistics, altName: 'Statistics' },
    name: 'Statistics',
  },
  {
    url: '/invoices',
    img: { image: Invoices, altName: 'Invoices' },
    name: 'Invoices',
  },
  {
    url: '/schedule',
    img: { image: Schedule, altName: 'Schedule' },
    name: 'Schedule',
  },
];
