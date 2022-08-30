import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { publicRoutes } from './routes';

import Navigation from './components/Navigation';
import Spinner from './components/Spinner';

const App: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Navigation />
      <Routes>
        {publicRoutes.map((route, i) => {
          const { path, element } = route;
          return <Route key={i} path={path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default App;
