import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';

export const selectCart = (state: RootState) => state.cartReducer;

export const selectIsCartDropdownOpen = createSelector(
  selectCart,
  (cart) => cart.isOpen,
);

export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.cartItems,
);

export const selectCartCount = createSelector(selectCart, (cart) =>
  cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0),
);

export const selectCartTotal = createSelector(selectCart, (cart) =>
  cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0,
  ),
);
