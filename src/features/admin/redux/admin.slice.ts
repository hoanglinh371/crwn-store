import { createSlice } from '@reduxjs/toolkit';
import { getProductsThunk } from 'src/features/product/redux/product.thunks';
import { AdminState } from './admin.types';

const initialState: AdminState = {
  products: [],
  categories: [],
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default adminSlice.reducer;
