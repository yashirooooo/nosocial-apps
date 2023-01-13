// component
import { Face, Apps, CardGiftcard, CircleNotifications, TravelExplore } from "@mui/icons-material";

const navConfig = [
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: <Face />,
    open: true
  },
  {
    title: 'Apps',
    path: '/dashboard/apps',
    icon: <Apps />,
    open: true
  },
  {
    title: 'Benefits',
    path: '/dashboard/benefits',
    icon: <CardGiftcard />,
    open: true
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: <CircleNotifications />,
    open: false,
    notification: 100
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: <TravelExplore />,
    open: false
  },
];

export default navConfig;
