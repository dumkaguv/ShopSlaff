import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import categories from "./categories/slice";

export const store = configureStore({
  reducer: {
    categories,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
