import React from "react";
import { Link } from "react-router-dom";

import parseRoute from "@/utils/parseRoute";
import parseImages from "@/utils/parseImages";
import ROUTES from "@/constants/routes";
import Button from "@/components/Button";
import ProductItemType from "@/types/ProductItemType";

interface ProductProps {
  product: ProductItemType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
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
          className="min-h-[200px] w-full rounded-t-lg object-cover"
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
            asLink
            href={parseRoute(ROUTES.PRODUCT, "id", product.id.toString())}
          >
            Buy
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Product;
