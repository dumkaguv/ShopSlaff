import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import STATUSES from "@/constants/statuses";
import { fetchProducts } from "./asyncActions";
import ProductItemType from "@/types/ProductItemType";

export type ProductState = {
  data: ProductItemType[];
  status: STATUSES;
};

const initialState: ProductState = {
  data: [],
  status: STATUSES.LOADING,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductItemType[]>) {
      state.data = action.payload;
    },
    addProducts(state, action: PayloadAction<ProductItemType[]>) {
      console.log(action.payload);
      state.data.push(...action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUSES.LOADING;
        state.data = [];
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action) => {
          state.status = STATUSES.SUCCESS;
          state.data = action.payload;
        },
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUSES.REJECTED;
        state.data = [];
      });
  },
});

export const { setProducts, addProducts } = productsSlice.actions;

export default productsSlice.reducer;
