import React from "react";
import { Link, useParams } from "react-router-dom";

import { RootState, useAppDispatch } from "@/store/store";
import { fetchCategories } from "@/store/categories/asyncActions";
import { useSelector } from "react-redux";
import CategoryType from "@/types/CategoryType";
import ROUTES from "@/constants/routes";
import parseRoute from "@/utils/parseRoute";

const Categories: React.FC = () => {
  const { id: categoryId } = useParams();
  const categories = useSelector((state: RootState) => state.categories.data);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="w-[300px] max-lg:w-fit rounded-[6px] bg-(--color-dark)">
      <div className="p-6 font-semibold max-md:p-4">
        <h2>Categories</h2>
        <ul className="font-bold mt-8 max-lg:mt-6 max-md:mt-5 grid gap-y-3 md-lg:gap-y-2">
          {categories.slice(0, 5).map((category: CategoryType, index: number) => (
            <li key={category.id} className={`categories-item ${Number(categoryId) === index + 1 ? "is-active" : ""}`}>
              <Link
                to={parseRoute(ROUTES.CATEGORIES, "id", category.id.toString())}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
