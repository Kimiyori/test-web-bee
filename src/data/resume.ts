import { ReactComponent as Email } from '../assets/icons/resume/contact/Email.svg';
import { ReactComponent as Phone } from '../assets/icons/resume/contact/Phone.svg';
import { ReactComponent as City } from '../assets/icons/resume/contact/City.svg';
import { NavLinkProps } from 'utils/types';
export const skillsList = [
  {
    title: 'Front-end stack',
    skills: ['JavaScript', 'TypeScript', 'HTML/CSS', 'React', 'Redux'],
  },
  {
    title: 'Back-end stack',
    skills: ['Python', 'Django', 'FastAPI', 'aiohttp'],
  },
  {
    title: 'Data',
    skills: ['PostgreSQL', 'Redis', 'MongoDB'],
  },
  {
    title: 'Development',
    skills: ['GIT', 'Docker', 'Nginx'],
  },
];
export const addresses: NavLinkProps[] = [
  {
    name: 'Rostov-on-Don',
    url: 'https://goo.gl/maps/1omRBkRkp5ek3C8d6',
    icon: {
      src: City,
      title: 'Location',
    },
  },
  {
    name: 'maksimkalin17@gmail.com',
    url: 'mailto:maksimkalin17@gmail.com',
    icon: {
      src: Email,
      title: ' Email',
    },
  },
  {
    name: '+7 (938) 108-11-08',
    url: 'tel:+79381081108',
    icon: {
      src: Phone,
      title: 'Phone',
    },
  },
];
