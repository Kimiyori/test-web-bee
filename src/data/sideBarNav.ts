import MyProfile from '../assets/icons/resume/nav/MyProfile.svg';
import Balance from '../assets/icons/resume/nav/Balance.svg';
import Connections from '../assets/icons/resume/nav/Connections.svg';
import Friends from '../assets/icons/resume/nav/FriendsNavigation.svg';
import Events from '../assets/icons/resume/nav/Events.svg';
import Settings from '../assets/icons/resume/nav/SettingsNavigation.svg';
export const sideNavData = [
  {
    url: '/profile',
    img: { image: MyProfile, altName: 'Profile' },
    name: 'My profile',
  },
  {
    url: '/balance',
    img: { image: Balance, altName: 'Balance' },
    name: 'Balance',
  },
  {
    url: '/conn',
    img: { image: Connections, altName: 'Connections' },
    name: 'Connections',
  },
  {
    url: '/bfriends',
    img: { image: Friends, altName: 'Friends' },
    name: 'Friends',
  },
  { url: '/events', img: { image: Events, altName: 'Events' }, name: 'Events' },
  {
    url: '/settings',
    img: { image: Settings, altName: 'Settings' },
    name: 'Settings',
  },
];
