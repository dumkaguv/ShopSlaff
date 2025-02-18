import React from "react";
import { useSelector } from "react-redux";

import ProductList from "@/components/ProductList";
import Hero from "@/components/Hero";
import { RootState } from "@/store/store";
import CategoriesProductList from "@/components/CategoriesProductList";
import SpecialOfferBanner from "@/components/SpecialOfferBanner/SpecialOfferBanner";
import { selectProductsLessThanPrice } from "@/store/products/select";

const Home: React.FC = () => {
  const productsTrending = useSelector(
    (state: RootState) => state.products.data,
  );
  const productsLess = useSelector(selectProductsLessThanPrice(150));

  return (
    <>
      <Hero />
      <ProductList products={productsTrending} title="Trending" />
      <CategoriesProductList />
      <SpecialOfferBanner />
      <ProductList products={productsLess} title="Less than 150$" />
    </>
  );
};

export default Home;
