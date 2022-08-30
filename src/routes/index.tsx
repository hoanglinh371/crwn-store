import { RouteProps } from 'react-router-dom';

import configs from 'src/configs';

import Auth from '../pages/Auth';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Checkout from '../pages/Checkout';
import Contact from 'src/pages/Contact';

export const publicRoutes: RouteProps[] = [
  { path: configs.routeConfig.home, element: <Home /> },
  { path: configs.routeConfig.contact, element: <Contact /> },
  { path: configs.routeConfig.auth, element: <Auth /> },
  { path: configs.routeConfig.shop, element: <Shop /> },
  { path: configs.routeConfig.checkout, element: <Checkout /> },
];
