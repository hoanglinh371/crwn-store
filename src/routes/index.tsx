import { RouteProps } from 'react-router-dom';
import { lazy } from 'react';

import configs from 'src/configs';

const Home = lazy(() => import('../pages/Home'));
const Contact = lazy(() => import('../pages/Contact'));
const Auth = lazy(() => import('../pages/Auth'));
const Shop = lazy(() => import('../pages/Shop'));
const Checkout = lazy(() => import('../pages/Checkout'));

export const publicRoutes: RouteProps[] = [
  { path: configs.routeConfig.home, element: <Home /> },
  { path: configs.routeConfig.contact, element: <Contact /> },
  { path: configs.routeConfig.auth, element: <Auth /> },
  { path: configs.routeConfig.shop, element: <Shop /> },
  { path: configs.routeConfig.checkout, element: <Checkout /> },
];
