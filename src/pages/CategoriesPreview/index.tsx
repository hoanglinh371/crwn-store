import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';

import { getProductsThunk } from 'src/features/product/redux/product.thunks';
import { selectProductsMap } from 'src/features/product/redux/product.selectors';

import CategoryPreview from 'src/features/category/components/CategoryPreview';

const CategoriesPreview: React.FC = () => {
  const dispatch = useAppDispatch();
  const productsMap = useAppSelector(selectProductsMap);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return (
    <React.Fragment>
      {Object.keys(productsMap).map((name) => {
        const products = productsMap[name];
        return <CategoryPreview key={name} title={name} products={products} />;
      })}
    </React.Fragment>
  );
};

export default CategoriesPreview;
