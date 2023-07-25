import { ReactComponent as MyProfile } from 'assets/icons/resume/nav/MyProfile.svg';
import { ReactComponent as Balance } from 'assets/icons/resume/nav/Balance.svg';
import { ReactComponent as Connections } from 'assets/icons/resume/nav/Connections.svg';
import { ReactComponent as Friends } from 'assets/icons/resume/nav/FriendsNavigation.svg';
import { ReactComponent as Events } from 'assets/icons/resume/nav/Events.svg';
import { ReactComponent as Settings } from 'assets/icons/resume/nav/SettingsNavigation.svg';
import { NavLinkProps } from 'utils/types';
export const sideNavData: NavLinkProps[] = [
  {
    url: '/profile',
    icon: { src: MyProfile, title: 'Profile' },
    name: 'My profile',
  },
  {
    url: '/balance',
    icon: { src: Balance, title: 'Balance' },
    name: 'Balance',
  },
  {
    url: '/conn',
    icon: { src: Connections, title: 'Connections' },
    name: 'Connections',
  },
  {
    url: '/bfriends',
    icon: { src: Friends, title: 'Friends' },
    name: 'Friends',
  },
  { url: '/events', icon: { src: Events, title: 'Events' }, name: 'Events' },
  {
    url: '/settings',
    icon: { src: Settings, title: 'Settings' },
    name: 'Settings',
  },
];
