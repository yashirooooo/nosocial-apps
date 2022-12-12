// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Apps',
    path: '/dashboard/apps',
    icon: icon('ic_user'),
  },
  {
    title: 'Benefits',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: icon('ic_blog'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  {
    title: 'Explore',
    path: '/explore',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
