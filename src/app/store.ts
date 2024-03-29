import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import cartReducer from '../features/cart/redux/cart.slice';
import categoryReducer from '../features/category/redux/category.slice';
import productReducer from '../features/product/redux/product.slice';
import adminReducer from '../features/admin/redux/admin.slice';

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    categoryReducer,
    adminReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
