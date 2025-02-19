import React from "react";

import ProductItemType from "@/types/ProductItemType";
import { fetchProducts } from "@/store/products/asyncActions";
import { useAppDispatch } from "@/store/store";
import Button from "@/components/Button";
import Product from "@/components/Product";
import Pagination from "../Pagination";

interface ProductListProps {
  products?: ProductItemType[];
  title?: string;
  paginationType?: "button" | "pagination";
}

const ProductList: React.FC<ProductListProps> = ({
  products = [],
  title = "Products",
  paginationType = "button",
}) => {
  const dispatch = useAppDispatch();
  const [offset, setOffset] = React.useState(0);

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onLoadMoreClick = () => {
    setOffset((prev) => prev + 5);
  };

  const productsToDisplay: ProductItemType[] = [];

  if (paginationType === "button") {
    productsToDisplay.push(...products.slice(0, offset + 5));
  } else {
    productsToDisplay.push(
      ...products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      ),
    );
  }

  console.log(products);

  return (
    <section className="container mt-5">
      <div className="rounded-md bg-(--color-dark) p-6">
        <h2 className="text-center text-[20px] font-semibold text-white">
          {title}
        </h2>
        <ul className="mt-6 grid grid-cols-5 gap-5">
          {productsToDisplay.map((product: ProductItemType, index: number) => (
            <Product
              key={`${title}-${product.id ?? index}`}
              product={product}
            />
          ))}
        </ul>

        {paginationType === "button" &&
          productsToDisplay.length < products.length && (
            <Button onClick={onLoadMoreClick} className="mx-auto mt-6">
              See more
            </Button>
          )}

        {paginationType === "pagination" && <Pagination />}
      </div>
    </section>
  );
};

export default ProductList;
