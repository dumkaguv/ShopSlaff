import React from "react";
import { Link, useParams } from "react-router-dom";

import { RootState, useAppDispatch } from "@/store/store";
import { fetchCategories } from "@/store/categories/asyncActions";
import { useSelector } from "react-redux";
import CategoryType from "@/types/CategoryType";
import ROUTES from "@/constants/routes";
import parseRoute from "@/utils/parseRoute";
import STATUSES from "@/constants/statuses";
import CategoriesSkeleton from "./CategoriesSkeleton";

const Categories: React.FC = () => {
  const { id: categoryId } = useParams();
  const { data: categories, status } = useSelector(
    (state: RootState) => state.categories,
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="rounded-[6px] bg-(--color-dark) max-lg:w-fit max-sm:w-full md:w-[300px]">
      <div className="p-6 font-semibold max-md:p-4">
        <h2 className="max-sm:text-center">Categories</h2>
        <ul className="md-lg:gap-y-2 mt-8 grid gap-y-3 font-bold max-lg:mt-6 max-md:mt-5 max-sm:flex max-sm:flex-wrap max-sm:items-center max-sm:justify-center max-sm:gap-3">
          {STATUSES.SUCCESS === status &&
            categories
              .slice(0, 5)
              .map((category: CategoryType, index: number) => (
                <li
                  key={category.id}
                  className={`categories-item ${Number(categoryId) === index + 1 ? "is-active" : ""}`}
                >
                  <Link
                    to={parseRoute(
                      ROUTES.CATEGORIES,
                      "id",
                      category.id.toString(),
                    )}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
          {STATUSES.LOADING === status &&
            new Array(5)
              .fill(null)
              .map((_, index) => <CategoriesSkeleton key={index} />)}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
