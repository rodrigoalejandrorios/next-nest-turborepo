import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getItem } from '../../utils/localStorage.util';

interface CartAddState {
  url: string | number;
  name: string;
  height: string;
  info: string;
}

interface CartRemoveState {
  url: string | number;
}

const initialState: CartAddState[] = getItem('cart') || [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartAddState>) => {
      const { url } = action.payload;
      if (
        state.length === 0 ||
        state.filter((item) => item.url === url).length === 0
      ) {
        state.push(action.payload);
        
      }
    },
    removeToCart: (state, action: PayloadAction<CartRemoveState>) => {
      const { url } = action.payload;
      if(state.some((item)=> item.url === url)){
        return state = state.filter((item)=> item.url !== url)
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;