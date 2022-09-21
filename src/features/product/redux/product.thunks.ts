import { createAsyncThunk } from '@reduxjs/toolkit';
import productAPI from '../api/product.api';

export const getProductsThunk = createAsyncThunk(
  'products/getProducts',
  async (page?: number) => {
    const res = await productAPI.getProducts(page);
    return res.data;
  },
);

export const getProductsByCategoryThunk = createAsyncThunk(
  'products/getProductsByCategory',
  async (category: string) => {
    const res = await productAPI.getProductsByCategory(category);
    return res.data;
  },
);
