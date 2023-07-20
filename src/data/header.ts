import { ReactComponent as Resume } from '../assets//icons/header/Resume.svg';
import { ReactComponent as Map } from '../assets//icons/header/Map.svg';
import { ReactComponent as Time } from '../assets//icons/header/Time.svg';
import { ReactComponent as Notes } from '../assets//icons/header/Notes.svg';
import { ReactComponent as Friends } from '../assets//icons/header/Friends.svg';
import { ReactComponent as Photo } from '../assets//icons/header/Photo.svg';
import { ReactComponent as Statistics } from '../assets/icons/header/Statistics.svg';
import { ReactComponent as Invoices } from '../assets/icons/header/Invoices.svg';
import { ReactComponent as Schedule } from '../assets/icons/header/Schedule.svg';
import { ReactComponent as Settings } from '../assets/icons/header/Settings.svg';
import { routes } from 'data/PagesData';
import { NavLinkProps } from 'utils/types';
export const bottomLeftHeader: NavLinkProps[] = [
  {
    url: routes[0].pathname,
    icon: { src: Resume, title: 'Resume' },
    name: 'Resume',
  },
  {
    url: routes[1].pathname,
    icon: { src: Map, title: 'Map' },
    name: 'Map',
  },
  {
    url: routes[2].pathname,
    icon: { src: Time, title: 'Time' },
    name: 'Time',
  },
];
export const bottomRightHeader: NavLinkProps[] = [
  {
    url: '/notes',
    icon: { src: Notes, title: 'Notes' },
    name: 'Notes',
  },
  {
    url: '/friends',
    icon: { src: Friends, title: 'Friends' },
    name: 'Friends',
  },
  {
    url: '/photo',
    icon: { src: Photo, title: 'Photo' },
    name: 'Photo',
  },
  {
    url: '/settings',
    icon: { src: Settings, title: 'Settings' },
    name: 'Settings',
  },
];
export const upperHeader: NavLinkProps[] = [
  {
    url: '/statistics',
    icon: { src: Statistics, title: 'Statistics' },
    name: 'Statistics',
  },
  {
    url: '/invoices',
    icon: { src: Invoices, title: 'Invoices' },
    name: 'Invoices',
  },
  {
    url: '/schedule',
    icon: { src: Schedule, title: 'Schedule' },
    name: 'Schedule',
  },
];
