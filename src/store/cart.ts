import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppState } from '.';
import { IItem } from '@pages/products/model';

interface IProps {
  cartLists: IItem[];
}

const initialState: IProps = {
  cartLists: [],
};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    SET_CART_LISTS: (state, action: PayloadAction<IItem>) => {
      state.cartLists.push(action.payload);
    },

    INIT_CART_LISTS: (state, action: PayloadAction) => {
      state.cartLists = [];
    },
  },
});

export const { SET_CART_LISTS, INIT_CART_LISTS } = cart.actions;

export const cartForm = (state: AppState): IProps => state.cart;
export default cart.reducer;
