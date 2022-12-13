// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: icon('ic_blog'),
  },
  {
    title: 'Apps',
    path: '/dashboard/apps',
    icon: icon('ic_cart'),
  },
  {
    title: 'Benefits',
    path: '/dashboard/benifits',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
