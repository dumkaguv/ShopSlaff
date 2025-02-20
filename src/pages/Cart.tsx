import React from "react";

import CartProductList from "@/components/CartProductList";
import Hero from "@/components/Hero";

const Cart: React.FC = () => {
  return (
    <Hero>
      <CartProductList />
    </Hero>
  );
};

export default Cart;
