import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ROUTES from "@/constants/routes";
import parseRoute from "@/utils/parseRoute";

const CategoriesProductList: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories.data);

  const onLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="container mt-5">
      <div className="rounded-md bg-(--color-dark) p-6">
        <h2 className="text-center text-[20px] font-semibold text-white">
          Worth seeing
        </h2>
        <ul className="mt-5 grid grid-cols-5 gap-x-5">
          {categories.slice(0, 5).map((category, index) => (
            <li
              key={index}
              className="grid cursor-pointer gap-y-5 transition-all hover:scale-[1.03]"
            >
              <Link
                className="text-center"
                onClick={onLinkClick}
                to={parseRoute(ROUTES.CATEGORIES, "id", category.id.toString())}
              >
                <img
                  src={category.image}
                  className="h-[250px] w-full rounded-sm"
                  width={230}
                  height={230}
                  alt=""
                />

                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoriesProductList;
