import { RootState } from "../store";

export const selectItem = (id: number) => (state: RootState) =>
  state.cart.data.find((item) => item.id === id);
