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
    <div className="w-[300px] rounded-[6px] bg-(--color-dark)">
      <div className="p-6 font-semibold">
        <h2>Categories</h2>
        <ul className="font- mt-8 grid gap-y-3">
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
