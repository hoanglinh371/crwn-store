import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { publicRoutes } from './routes';

import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        {publicRoutes.map((route, i) => {
          const { path, element } = route;
          return <Route key={i} path={path} element={element} />;
        })}
      </Routes>
    </React.Fragment>
  );
};

export default App;
