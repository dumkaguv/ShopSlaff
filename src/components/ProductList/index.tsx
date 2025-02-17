import React from "react";

import ProductItemType from "@/types/ProductItemType";
import { fetchProducts } from "@/store/products/asyncActions";
import { RootState, useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import parseImages from "@/utils/parseImages";
import ROUTES from "@/constants/routes";

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.data);
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
          Trending
        </h2>
        <ul className="mt-6 grid grid-cols-5 gap-x-5">
          {productsToDisplay.map((product: ProductItemType) => (
            <li key={`${product.id}-${product.title}`}>
              <Link to={ROUTES.PRODUCT.replace(":id", product.id.toString())}>
                <img
                  className="h-[200px] w-[230px] rounded-t-lg object-cover"
                  width={230}
                  height={200}
                  src={parseImages(product.images)[0]}
                  alt=""
                  loading="lazy"
                />
              </Link>
              <div className="rounded-b-lg bg-(--bg-color) p-3">
                <h3 className="w-full truncate text-[15px] font-semibold text-white">
                  {product.title}
                </h3>
                <h4 className="mt-1 text-[14px] text-(--color-gray-3)">
                  {product.category.name}
                </h4>
                <div className="mt-7 flex items-center justify-between gap-x-2.5">
                  <div className="flex items-center gap-x-1.5">
                    <span className="text-[20px] font-bold text-(--color-accent-dark)">
                      ${product.price}
                    </span>
                    <span className="text-[14px] font-bold text-(--color-gray-1) line-through">
                      ${(product.price * 0.8).toFixed(0)}
                    </span>
                  </div>
                  <Button>Buy</Button>
                </div>
              </div>
            </li>
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
