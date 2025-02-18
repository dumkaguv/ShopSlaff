import { RootState } from "../store";

export const selectProductById = (productId: string) => (state: RootState) =>
  state.products.data.find((product) => product.id === +productId);

export const selectProductsBySearch =
  (searchValue: string) => (state: RootState) =>
    state.products.data.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

export const selectProductsLessThanPrice =
  (price: number) => (state: RootState) =>
    state.products.data.filter((product) => product.price < price);

export const selectProductsByCategoryId =
  (categoryId: number) => (state: RootState) =>
    state.products.data.filter((product) => product.category.id === categoryId);
