import CategoryType from "@/types/CategoryType";

export type ProductItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryType;
  images: string[];
  creationAt: string;
  updatedAt: string;
};

export default ProductItemType
