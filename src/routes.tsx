import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import HomeLayout from './pages/home';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import Page404 from './pages/Page404';
import ProfileAppPage from './pages/profile/Profile';
import AppsPage from './pages/apps/AppsPage';
import BenifitsPage from './pages/benifits/BenifitsPage';

// ----------------------------------------------------------------------

export default function Router() {
    const routes = useRoutes([
        {
            path: '/',
            element: <HomeLayout />,
            children: [
                { element: <Navigate to="/" />, index: true }
            ],
        },
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="/dashboard/profile" /> },
                { path: 'profile', element: <ProfileAppPage /> },
                { path: 'apps', element: <AppsPage /> },
                { path: 'benifits', element: <BenifitsPage /> },
            ],
        },
        {
          element: <SimpleLayout />,
          children: [
            { element: <Navigate to="/dashboard/app" />, index: true },
            { path: '404', element: <Page404 /> },
            { path: '*', element: <Navigate to="/404" /> },
          ],
        }
    ]);

    return routes;
}
