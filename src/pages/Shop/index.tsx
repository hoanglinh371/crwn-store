import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../CategoriesPreview';
import Category from '../Category';

const Shop: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<CategoriesPreview />} />
      <Route path='/:category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
