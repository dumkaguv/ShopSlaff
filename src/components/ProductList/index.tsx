import React from "react";

import ProductItemType from "@/types/ProductItemType";
import { fetchProducts } from "@/store/products/asyncActions";
import { useAppDispatch } from "@/store/store";
import Button from "@/components/Button";
import Product from "@/components/Product";
import Pagination from "@/components/Pagination";
import ProductListInputFilter from "../ProductListInputFilter";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import STATUSES from "@/constants/statuses";
import ProductSkeleton from "../Product/ProductSkeleton";

interface ProductListProps {
  products?: ProductItemType[];
  title?: string;
  paginationType?: "button" | "pagination";
  showFilters?: boolean;
}

const OFFSETS = {
  "100": 3,
  "480": 4,
  "640": 4,
  "768": 3,
  "1024": 4,
  "1280": 5,
};

const ProductList: React.FC<ProductListProps> = ({
  products = [],
  title = "Products",
  paginationType = "button",
  showFilters = false,
}) => {
  const dispatch = useAppDispatch();
  const { status } = useSelector((state: RootState) => state.products);
  const [limit, setLimit] = React.useState(OFFSETS[1280]);
  const [offset, setOffset] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [priceFrom, setPriceFrom] = React.useState("");

  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const itemsPerPage = 10;

  let productsToDisplay: ProductItemType[] = [];
  const width = useWindowWidth();

  React.useEffect(() => {
    const breakpoints = Object.keys(OFFSETS).sort(
      (a, b) => Number(b) - Number(a),
    );

    for (const breakpoint of breakpoints) {
      const numericBreakpoint = breakpoint as keyof typeof OFFSETS;
      if (width > Number(breakpoint)) {
        setLimit(OFFSETS[numericBreakpoint]);
        break;
      } else {
        continue;
      }
    }
  }, [width]);

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
    dispatch(fetchProducts(""));
  }, [dispatch]);

  const onLoadMoreClick = () => {
    setOffset((prev) => prev + limit);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (paginationType === "button") {
    productsToDisplay.push(...products.slice(0, offset + limit));
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
      (product) => product.price * 0.8 >= Number(priceFrom),
    );
  }

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
        <ul
          className={`max-xs:flex max-xs:flex-col mt-6 grid grid-cols-5 gap-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2`}
        >
          {status === STATUSES.SUCCESS &&
            productsToDisplay.map((product: ProductItemType, index: number) => (
              <Product
                key={`${title}-${product.id ?? index}`}
                product={product}
              />
            ))}
          {status === STATUSES.LOADING &&
            new Array(limit)
              .fill(null)
              .map((_, index) => <ProductSkeleton key={index} />)}
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
