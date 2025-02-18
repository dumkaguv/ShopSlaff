import React from "react";

import ProductItemType from "@/types/ProductItemType";
import { fetchProducts } from "@/store/products/asyncActions";
import { useAppDispatch } from "@/store/store";
import Button from "@/components/Button";
import Product from "@/components/Product";

interface ProductListProps {
  products?: ProductItemType[];
  title?: string;
}

const ProductList: React.FC<ProductListProps> = ({
  products = [],
  title = "Products",
}) => {
  const dispatch = useAppDispatch();
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onLoadMoreClick = () => {
    setOffset((prev) => prev + 5);
  };

  const productsToDisplay: ProductItemType[] = [];
  productsToDisplay.push(...products.slice(0, offset + 5));

  return (
    <section className="container mt-5">
      <div className="rounded-md bg-(--color-dark) p-6">
        <h2 className="text-center text-[20px] font-semibold text-white">
          {title}
        </h2>
        <ul className="mt-6 grid grid-cols-5 gap-5">
          {productsToDisplay.map((product: ProductItemType) => (
            <Product product={product} />
          ))}
        </ul>
        {productsToDisplay.length < products.length && (
          <Button onClick={onLoadMoreClick} className="mx-auto mt-6">
            See more
          </Button>
        )}
      </div>
    </section>
  );
};

export default ProductList;
