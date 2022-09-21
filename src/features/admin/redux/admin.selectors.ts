import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';

export const selectAdmin = (state: RootState) => state.adminReducer;

export const selectProducts = createSelector(
  selectAdmin,
  (admin) => admin.products,
);

export const selectCategories = createSelector(
  selectAdmin,
  (admin) => admin.categories,
);
