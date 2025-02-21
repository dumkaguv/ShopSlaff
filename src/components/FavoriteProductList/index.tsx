import React from "react";
import FavoriteProduct from "../FavoriteProduct";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const FavoriteProductList: React.FC = () => {
  const data = useSelector((state: RootState) => state.favorites.data);

  return (
    <div className="flex flex-1 flex-col px-8 py-6 max-md:px-4 max-md:py-3">
      <h2 className="text-[20px] font-semibold text-white">Your favorites</h2>
      <ul className="mt-4 grid grid-cols-4 gap-5 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1">
        {data.map((item) => (
          <li key={item.id}>
            <FavoriteProduct product={item} />
          </li>
        ))}
        {data.length === 0 && <li>Currently your favorites are empty.</li>}
      </ul>
    </div>
  );
};

export default FavoriteProductList;
