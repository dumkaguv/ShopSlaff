import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import STATUSES from "@/constants/statuses";
import { fetchCategories } from "./asyncActions";
import CategoryType from "@/types/CategoryType";

type CategoryState = {
  data: CategoryType[];
  status: STATUSES;
};

const initialState: CategoryState = {
  data: [],
  status: STATUSES.LOADING,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<CategoryType[]>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = STATUSES.LOADING;
        state.data = [];
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.SUCCESS;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.data = [];
        state.status = STATUSES.REJECTED;
      });
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
