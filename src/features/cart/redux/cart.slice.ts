import { createSlice } from '@reduxjs/toolkit';

import { CartItem } from './cart.types';

export interface CartState {
  isOpen: boolean;
  cartItems: CartItem[];
}

const initialState: CartState = {
  isOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartDropdown: (state) => {
      state.isOpen = !state.isOpen;
    },

    addProduct: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem._id === action.payload._id,
      );
      if (existingCartItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem._id === action.payload._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }
    },

    removeProduct: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem._id === action.payload._id,
      );
      if (existingCartItem?.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id,
        );
      }
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem._id === action.payload._id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem,
      );
    },

    clearProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload._id,
      );
    },
  },
});

export default cartSlice.reducer;
export const { toggleCartDropdown, addProduct, removeProduct, clearProduct } =
  cartSlice.actions;
