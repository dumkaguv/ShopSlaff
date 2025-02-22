import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import ProductItemType from "@/types/ProductItemType";
import { loadFromLocalStorage } from "@/utils/localStorage";
import LOCAL_STORAGE from "@/constants/localStorage";

type CartState = {
  data: ProductItemType[];
  totalItems: number;
  totalPrice: number;
};

const savedCart =
  loadFromLocalStorage<ProductItemType[]>(LOCAL_STORAGE.CART) || [];

const initialState: CartState = {
  data: savedCart,
  totalItems: savedCart.reduce((acc, item) => acc + (item.quantity ?? 1), 0),
  totalPrice: savedCart.reduce(
    (acc, item) =>
      acc + Number((item.price * 0.8).toFixed(0)) * (item.quantity ?? 1),
    0,
  ),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ProductItemType>) {
      const item = action.payload;
      const foundItem = state.data.find((element) => element.id === item.id);

      state.totalPrice += Number((item.price * 0.8).toFixed(0));
      state.totalItems++;

      if (!foundItem) {
        state.data.push(item);
      } else {
        foundItem.quantity = (foundItem.quantity ?? 0) + 1;
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      const id = action.payload;
      const item = state.data.find((item) => item.id === id);

      if (item) {
        state.totalPrice -=
          Number((item.price * 0.8).toFixed(0)) * (item.quantity ?? 1);
        state.totalItems -= item.quantity ?? 0;
        state.data = state.data.filter((element) => element.id !== id);
      }
    },
    changeQuantity(
      state,
      action: PayloadAction<{ id: number; amount: number }>,
    ) {
      const { id, amount } = action.payload;
      const item = state.data.find((item) => item.id === id);

      if (item) {
        const newQuantity = Math.max(0, (item.quantity ?? 0) + amount);

        if (newQuantity > 0) {
          state.totalItems += amount;
          state.totalPrice += Number((item.price * 0.8).toFixed(0)) * amount;
          item.quantity = newQuantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
