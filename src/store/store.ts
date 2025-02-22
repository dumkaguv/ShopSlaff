import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./categories/slice";
import productsReducer from "./products/slice";
import cartReducer from "./cart/slice";
import favoritesReducer from "./favorites/slice";

import cartMiddleware from "./cart/middleware";
import favoritesMiddleware from "./favorites/middleware";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cartMiddleware.middleware,
      favoritesMiddleware.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
