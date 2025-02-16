import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import ENDPOINTS from "@/constants/endpoints";
import ProductItemType from "@/types/ProductItemType";

export const fetchProducts = createAsyncThunk<
  ProductItemType[],
  string | undefined
>("products/fetchProducts", async (queryParams = "", { rejectWithValue }) => {
  try {
    const BASE_URL = ENDPOINTS.products + queryParams;
    const { data: products } = await axios.get<ProductItemType[]>(BASE_URL);

    return products;
  } catch (error) {
    return rejectWithValue(`Ошибка загрузки продуктов - ${error}`);
  }
});
