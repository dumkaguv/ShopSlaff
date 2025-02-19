import React from "react";

import { useSelector } from "react-redux";
import { selectProductsByCategoryId } from "@/store/products/select";
import { useParams } from "react-router-dom";
import Hero from "@/components/Hero";
import { selectCategoryNameById } from "@/store/categories/select";
import ProductList from "../ProductList";

const CategoriesProducts: React.FC = () => {
  const { id: categoryId } = useParams();
  const products = useSelector(
    selectProductsByCategoryId(categoryId ? +categoryId : 0),
  );
  const categoryName = useSelector(
    selectCategoryNameById(categoryId ? +categoryId : 0),
  );

  return (
    <>
      <Hero />

      <ProductList
        products={products}
        title={categoryName}
        paginationType="pagination"
      />
    </>
  );
};

export default CategoriesProducts;
