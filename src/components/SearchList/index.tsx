import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import parseImages from "@/utils/parseImages";
import { selectProductsBySearch } from "@/store/products/select";
import ROUTES from "@/constants/routes";
import parseRoute from "@/utils/parseRoute";

interface SearchListProps {
  searchValue: string;
  clearInput: () => void;
}

const SearchList: React.FC<SearchListProps> = ({ searchValue, clearInput }) => {
  const products = useSelector(selectProductsBySearch(searchValue));

  const onLinkClick = () => {
    clearInput();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!searchValue) {
    return null;
  }

  if (products.length === 0) {
    return (
      <div className="absolute p-2.5 text-center rounded-b-md bg-(--bg-color)">
        Nothing found for your request 😔. Try changing your search parameters.
      </div>
    );
  }

  return (
    <ul className="no-scrollbar absolute z-10 flex max-h-[180px] w-full flex-col gap-2 overflow-y-auto rounded-b-md bg-(--bg-color) p-2.5">
      {products.slice(0, 15).map((product) => (
        <li
          key={product.id}
          className="cursor-pointer hover:bg-(--color-gray-1)"
        >
          <Link
            className="flex items-center gap-2"
            to={parseRoute(
              ROUTES.PRODUCT,
              "id",
              product.id.toString(),
            )}
            onClick={onLinkClick}
          >
            <img
              className="h-[60px] w-[60px] rounded-md"
              width={60}
              height={60}
              src={
                product.images[0].includes("[")
                  ? parseImages(product.images)?.[0]
                  : product.images[0]
              }
              alt=""
            />
            <div className="w-[270px]">{product.title}</div>
            <span className="ml-auto text-(--color-accent-dark)">
              ${product.price}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchList;
