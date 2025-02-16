import React from "react";
import { RootState, useAppDispatch } from "@/store/store";

import { fetchCategories } from "@/store/categories/asyncActions";
import { useSelector } from "react-redux";
import CategoryType from "@/types/CategoryType";

const Categories: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories.data);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="w-[300px] rounded-[6px] bg-(--color-dark)">
      <div className="p-6 font-semibold">
        <h2>Categories</h2>
        <ul className="mt-8 grid gap-y-3 font-">
          {categories.slice(0, 5).map((category: CategoryType) => (
            <li key={category.id} className="categories-item">
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
