import { Navigate, useRoutes } from 'react-router-dom';

// Pages
import LoginPage from './pages/login';
import PselectPage from './pages/pselect';

// Router
export default function Router() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Navigate to="/login" replace/>
        },   
        {
             path: 'login',
             element: <LoginPage />,
        },
        {
            path: 'pselect',
            element: <PselectPage />,
        },
        {
           path: '*',
           element: <Navigate to="/404" replace />,
        },
    ]);

    return routes;
}