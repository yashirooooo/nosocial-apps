// component
import { Face, Apps, CardGiftcard, CircleNotifications, TravelExplore } from "@mui/icons-material";

const navConfig = [
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: <Face />,
  },
  {
    title: 'Apps',
    path: '/dashboard/apps',
    icon: <Apps />,
  },
  {
    title: 'Benefits',
    path: '/dashboard/benifits',
    icon: <CardGiftcard />,
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: <CircleNotifications />,
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: <TravelExplore />,
  },
];

export default navConfig;
