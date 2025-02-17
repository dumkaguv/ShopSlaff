import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Hero from "@/components/Hero";
import ProductDetails from "@/components/ProductDetails";
import ProductList from "@/components/ProductList";
import { fetchProductsByCategoryId } from "@/store/products/asyncActions";
import { RootState, useAppDispatch } from "@/store/store";
import { selectProductById } from "@/store/products/select";

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = useSelector(selectProductById(id || ""));

  const productsWithSameCategory = useSelector(
    (state: RootState) => state.products.data,
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (item) {
      dispatch(fetchProductsByCategoryId(item.category.id.toString()));
    }
  }, [dispatch]);

  return (
    <>
      <Hero>
        <ProductDetails productId={id ?? "0"} />
      </Hero>
      <ProductList
        products={productsWithSameCategory}
        title="Related products"
      />
    </>
  );
};

export default Product;
