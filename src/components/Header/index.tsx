import React from "react";
import { Link } from "react-router-dom";

import Search from "@/components/Search";
import IconCart from "/public/svg/icon-cart.svg?react";
import IconHeart from "/public/svg/icon-heart.svg?react";
import ROUTES from "@/constants/routes";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Header: React.FC = () => {
  const totalItemsCart = useSelector((state: RootState) => state.cart.totalItems)

  return (
    <header className="sticky top-0 z-100 container">
      <div className="flex items-center justify-between bg-(--color-dark) p-3 shadow-lg shadow-neutral-800">
        <h1>
          <Link to={ROUTES.HOME} className="text-3xl">
            Shop Slaff
          </Link>
        </h1>
        <Search />

        <div className="flex gap-x-9">
          <Link to={ROUTES.FAVORITES}>
            <IconHeart className="fill-transparent duration-200 hover:fill-red-500" />
          </Link>
          <Link
            className={`relative top-0 z-50 ${totalItemsCart > 0 ? "after:pointer-events-none after:absolute after:-right-0.5 after:-bottom-0.5 after:flex after:h-3 after:w-3 after:items-center after:justify-center after:rounded-[50%] after:bg-(--color-accent-light) after:text-[9px] after:font-bold after:content-[attr(data-count)]" : ""} data-count={totalItemsCart}`}
            to={ROUTES.CART}
            data-count={totalItemsCart}
          >
            <IconCart className="stroke-transparent duration-200 hover:stroke-(--color-light)" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
