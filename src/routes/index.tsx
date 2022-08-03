import { RouteProps } from 'react-router-dom';

import configs from 'src/configs';

import Auth from '../pages/Auth';
import Home from '../pages/Home';

export const publicRoutes: RouteProps[] = [
    { path: configs.routeConfig.home, element: <Home /> },
    { path: configs.routeConfig.auth, element: <Auth /> },
];
