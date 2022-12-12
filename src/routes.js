import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import HomeLayout from './pages/home';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';

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
                { element: <Navigate to="/dashboard" /> },
                { path: 'profile', element: <DashboardAppPage /> },
                { path: 'apps', element: <DashboardAppPage /> },
                { path: 'user', element: <UserPage /> },
                { path: 'products', element: <ProductsPage /> },
                { path: 'blog', element: <BlogPage /> },
            ],
        },
        // {
        //     path: 'login',
        //     element: <HomeLayout />,
        // },
        {
          element: <SimpleLayout />,
          children: [
            { element: <Navigate to="/dashboard/app" />, index: true },
            { path: '404', element: <Page404 /> },
            { path: '*', element: <Navigate to="/404" /> },
          ],
        },
        // {
        //   path: '*',
        //   element: <Navigate to="/404" replace />,
        // },
    ]);

    return routes;
}
