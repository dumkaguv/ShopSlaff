import React from "react";
import { Link } from "react-router-dom";

import Search from "@/components/Search";
import IconCart from "/public/svg/icon-cart.svg?react";
import IconHeart from "/public/svg/icon-heart.svg?react";
import ROUTES from "@/constants/routes";

const Header: React.FC = () => {
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
          <button type="button">
            <IconHeart className="fill-transparent duration-200 hover:fill-red-500" />
          </button>
          <button type="button">
            <IconCart className="stroke-transparent duration-200 hover:stroke-(--color-light)" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
