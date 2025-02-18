import { RootState } from "../store";

export const selectCategoryNameById =
  (categoryId: number | string) => (state: RootState) =>
    state.categories.data.find((category) => +category.id === +categoryId)
      ?.name;
