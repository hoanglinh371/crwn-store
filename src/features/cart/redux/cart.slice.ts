import { createSlice } from '@reduxjs/toolkit';

import { CartItem } from 'src/interfaces/product.interface';

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
        (cartItem) => cartItem.id === action.payload.id,
      );
      if (existingCartItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
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
        (cartItem) => cartItem.id === action.payload.id,
      );
      if (existingCartItem?.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id,
        );
      }
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === action.payload.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem,
      );
    },

    clearProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      );
    },
  },
});

export default cartSlice.reducer;
export const { toggleCartDropdown, addProduct, removeProduct, clearProduct } =
  cartSlice.actions;
