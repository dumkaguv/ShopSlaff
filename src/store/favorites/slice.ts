import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import ProductItemType from "@/types/ProductItemType";
import LOCAL_STORAGE from "@/constants/localStorage";
import { loadFromLocalStorage } from "@/utils/localStorage";

type FavoritesState = {
  data: ProductItemType[];
};

const initialState: FavoritesState = {
  data: loadFromLocalStorage<ProductItemType[]>(LOCAL_STORAGE.FAVORITES) || [],
};

const favoritesState = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ProductItemType>) {
      state.data.push(action.payload);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = favoritesState.actions;

export default favoritesState.reducer;
