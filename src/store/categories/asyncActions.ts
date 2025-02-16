import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import EDNPOINTS from "@/constants/endpoints";
import CategoryType from "@/types/CategoryType";

export const fetchCategories = createAsyncThunk<CategoryType[], void>(
  "categories/fetchCategories",
  async () => {
    const url = EDNPOINTS.categories;
    const { data: categories } = await axios.get<CategoryType[]>(url);

    return categories;
  },
);
