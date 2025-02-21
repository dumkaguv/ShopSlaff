import React from 'react'

import Hero from '@/components/Hero';
import FavoriteProductList from '@/components/FavoriteProductList';

const Favorites: React.FC = () => {
  return (
    <Hero>
      <FavoriteProductList />
    </Hero>
  );
}

export default Favorites