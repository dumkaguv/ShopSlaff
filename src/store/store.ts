import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./categories/slice";
import productsReducer from "./products/slice";
import cartReducer from "./cart/slice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
