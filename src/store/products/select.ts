import { RootState } from "../store";

export const selectProductById = (productId: string) => (state: RootState) =>
  state.products.data.find((product) => product.id === +productId);

export const selectProductsBySearch =
  (searchValue: string) => (state: RootState) =>
    state.products.data.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
