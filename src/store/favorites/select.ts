import ProductItemType from "@/types/ProductItemType";
import { RootState } from "../store";

export const selectFavoriteItem = (id: number) => (state: RootState) =>
  state.favorites.data.find((item: ProductItemType) => item.id === id);
