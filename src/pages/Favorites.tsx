import React from 'react'

import Hero from '@/components/Hero';
import CartProductList from '@/components/CartProductList';

const Favorites: React.FC = () => {
  return (
    <Hero>
      <CartProductList />
    </Hero>
  );
}

export default Favorites