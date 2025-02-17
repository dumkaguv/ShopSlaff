import React from "react";
import { useSelector } from "react-redux";

import ProductList from "@/components/ProductList";
import Hero from "@/components/Hero";
import { RootState } from "@/store/store";

const Home: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.data);
  
  return (
    <>
      <Hero />
      <ProductList products={products} title="Trending" />
    </>
  );
};

export default Home;
