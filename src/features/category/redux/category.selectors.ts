import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';

export const selectCategory = (state: RootState) => state.categoryReducer;

export const selectCategories = createSelector(
  selectCategory,
  (category) => category.categories,
);
