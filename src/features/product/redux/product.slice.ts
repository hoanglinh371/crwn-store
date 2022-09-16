import { createSlice } from '@reduxjs/toolkit';

import { ProductState } from './product.types';
import { getProductsByCategoryThunk, getProductsThunk } from './product.thunks';

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(getProductsByCategoryThunk.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
