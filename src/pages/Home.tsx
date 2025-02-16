import React from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        <ProductList />
      </main>
    </>
  );
};

export default Home;
