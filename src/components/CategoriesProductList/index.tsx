import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ROUTES from "@/constants/routes";
import parseRoute from "@/utils/parseRoute";
import STATUSES from "@/constants/statuses";
import CategoriesProductListSkeleton from "./CategoriesProductListSkeleton";

const CategoriesProductList: React.FC = () => {
  const { data: categories, status } = useSelector(
    (state: RootState) => state.categories,
  );

  const onLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="container mt-5">
      <div className="rounded-md bg-(--color-dark) p-6">
        <h2 className="text-center text-[20px] font-semibold text-white">
          Worth seeing
        </h2>
        <ul className="max-xs:flex max-xs:flex-col mt-5 grid grid-cols-5 gap-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
          {status === STATUSES.SUCCESS &&
            categories.slice(0, 5).map((category, index) => (
              <li
                key={index}
                className="grid cursor-pointer transition-all hover:scale-[1.03]"
              >
                <Link
                  className="text-center"
                  onClick={onLinkClick}
                  to={parseRoute(
                    ROUTES.CATEGORIES,
                    "id",
                    category.id.toString(),
                  )}
                >
                  <img
                    src={category.image}
                    className="max-xs:min-h-[270px] h-[250px] w-full rounded-sm object-cover max-md:h-[200px]"
                    width={230}
                    height={230}
                    alt=""
                  />

                  {category.name}
                </Link>
              </li>
            ))}
          {status === STATUSES.LOADING &&
            new Array(5)
              .fill(null)
              .map((_, index) => <CategoriesProductListSkeleton key={index} />)}
        </ul>
      </div>
    </section>
  );
};

export default CategoriesProductList;
