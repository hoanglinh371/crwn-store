import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/app/store';
import { Product } from './product.types';

export const selectProduct = (state: RootState) => state.productReducer;

export const selectProducts = createSelector(
  selectProduct,
  (product) => product.products,
);

export const selectProductsMap = createSelector(selectProducts, (products) =>
  products.reduce((a: any, v: Product) => {
    const key = v.category;
    const items = a[key] ?? [];
    return { ...a, [key]: [...items, v] };
  }, {}),
);
