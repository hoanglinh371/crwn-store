import React from 'react';
import CategoryPreview from 'src/components/CategoryPreview';

import SHOP_DATA from 'src/shop-data';

const CategoriesPreview: React.FC = () => {
  return (
    <React.Fragment>
      {Object.keys(SHOP_DATA).map((title) => {
        const products = SHOP_DATA[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </React.Fragment>
  );
};

export default CategoriesPreview;
