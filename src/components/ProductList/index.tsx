import React from "react";

import ProductItemType from "@/types/ProductItemType";
import { fetchProducts } from "@/store/products/asyncActions";
import { useAppDispatch } from "@/store/store";
import Button from "@/components/Button";
import Product from "@/components/Product";
import Pagination from "@/components/Pagination";
import ProductListInputFilter from "../ProductListInputFilter";

interface ProductListProps {
  products?: ProductItemType[];
  title?: string;
  paginationType?: "button" | "pagination";
  showFilters?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({
  products = [],
  title = "Products",
  paginationType = "button",
  showFilters = false,
}) => {
  const dispatch = useAppDispatch();
  const [offset, setOffset] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [priceFrom, setPriceFrom] = React.useState("");

  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const itemsPerPage = 10;

  let productsToDisplay: ProductItemType[] = [];

  React.useEffect(() => {
    if (search || priceFrom) {
      setTotalPages(Math.ceil(productsToDisplay.length / itemsPerPage));
    } else {
      setTotalPages(Math.ceil(products.length / itemsPerPage));
    }

    setCurrentPage(1);
  }, [search, priceFrom, products]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onLoadMoreClick = () => {
    setOffset((prev) => prev + 5);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

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

  if (showFilters) {
    productsToDisplay = productsToDisplay.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );
    productsToDisplay = productsToDisplay.filter(
      (product) => product.price >= Number(priceFrom),
    );
  }

  console.log(products);

  return (
    <section className="container mt-5">
      <div className="rounded-md bg-(--color-dark) p-6">
        <h2 className="text-center text-[20px] font-semibold text-white">
          {title}
        </h2>
        {showFilters && (
          <div className="mt-4 flex items-center gap-x-5">
            <ProductListInputFilter
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ProductListInputFilter
              placeholder="Price from..."
              type="number"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
            />
          </div>
        )}
        <ul className="mt-6 grid grid-cols-5 gap-5 max-2xl:grid-cols-4">
          {productsToDisplay.map((product: ProductItemType, index: number) => (
            <Product
              key={`${title}-${product.id ?? index}`}
              product={product}
            />
          ))}
          {productsToDisplay.length === 0 && (priceFrom || search) && (
            <div className="col-span-5 rounded-b-md bg-(--bg-color) p-2.5 text-center">
              Nothing found for your request 😔. Try changing your search
              parameters.
            </div>
          )}
        </ul>

        {paginationType === "button" &&
          productsToDisplay.length < products.length && (
            <Button onClick={onLoadMoreClick} className="mx-auto mt-6">
              See more
            </Button>
          )}

        {paginationType === "pagination" && totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
            className="mt-6"
            position="center"
          />
        )}
      </div>
    </section>
  );
};

export default ProductList;
