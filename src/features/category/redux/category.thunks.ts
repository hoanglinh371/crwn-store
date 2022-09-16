import { createAsyncThunk } from '@reduxjs/toolkit';
import categoryAPI from '../api/category.api';

export const getCategoriesThunk = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const res = await categoryAPI.getCategories();
    return res.data;
  },
);
