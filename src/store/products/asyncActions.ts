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

export const fetchProductById = createAsyncThunk<
  ProductItemType,
  string | undefined
>("products/fetchProductById", async (id = "", { rejectWithValue }) => {
  try {
    const BASE_URL = `${ENDPOINTS.products}/${id}`;
    const { data: product } = await axios.get<ProductItemType>(BASE_URL);

    return product;
  } catch (error) {
    return rejectWithValue(`Ошибка загрузки продуктов - ${error}`);
  }
});

export const fetchProductsByCategoryId = createAsyncThunk<
  ProductItemType[],
  string | undefined
>("products/fetchProductsByCategoryId", async (categoryId = "1", { rejectWithValue }) => {
  try {
    const BASE_URL = `${ENDPOINTS.products}/?categoryId=${categoryId}`;
    const { data: product } = await axios.get<ProductItemType[]>(BASE_URL);

    return product;
  } catch (error) {
    return rejectWithValue(`Ошибка загрузки продуктов - ${error}`);
  }
});
