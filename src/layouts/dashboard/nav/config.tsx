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
    path: '/dashboard/benifits',
    icon: <CardGiftcard />,
    open: true
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: <CircleNotifications />,
    open: false
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: <TravelExplore />,
    open: false
  },
];

export default navConfig;
