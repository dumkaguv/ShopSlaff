import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "@/constants/routes";
import parseRoute from "@/utils/parseRoute";
import parseImages from "@/utils/parseImages";
import ProductItemType from "@/types/ProductItemType";
import Button from "../Button";
import { useAppDispatch } from "@/store/store";
import { removeItem } from "@/store/favorites/slice";

interface Props {
  product: ProductItemType;
}

const FavoriteProduct: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const onFavoriteButtonClick = () => {
    dispatch(removeItem(product.id));
  };

  const onLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <li className="transition-all hover:scale-[1.03]">
      <Link
        onClick={onLinkClick}
        to={parseRoute(ROUTES.PRODUCT, "id", product.id.toString())}
      >
        <img
          className="max-xs:max-h-[270px] h-[250px] min-h-[200px] w-full rounded-t-lg object-cover"
          width={230}
          height={200}
          src={
            product.images[0].includes("[")
              ? parseImages(product.images)?.[0]
              : product.images[0]
          }
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
              ${(product.price * 0.8).toFixed(0)}
            </span>
            <span className="text-[14px] font-bold text-(--color-gray-1) line-through">
              ${product.price}
            </span>
          </div>
          <Button
            variant="gray"
            onClick={onFavoriteButtonClick}
            className="max-md:w-[50%]"
            size="sm"
          >
            ★ Remove
          </Button>
        </div>
      </div>
    </li>
  );
};

export default FavoriteProduct;
