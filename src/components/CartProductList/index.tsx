import React from "react";

import CartProduct from "../CartProduct";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const CartProductList: React.FC = () => {
  const { totalPrice, data } = useSelector((state: RootState) => state.cart);

  return (
    <div className="flex flex-1 flex-col px-8 py-6 max-md:px-4 max-md:py-3">
      <h2 className="text-[20px] font-semibold text-white">Your cart</h2>
      <ul className="mt-4 grid gap-y-2">
        {data.map((item) => (
          <li key={item.id}>
            <CartProduct item={item} />
          </li>
        ))}
        {data.length === 0 && (
          <li>Currently your cart is empty.</li>
        )}
      </ul>
      <div className="mt-auto pt-6 text-[20px] font-semibold text-(--color-gray-3)">
        {totalPrice > 0 && (
          <>
            <span>TOTAL PRICE:</span>{" "}
            <span className="text-white">{totalPrice}$</span>
          </>
        )}
      </div>
    </div>
  );
};

export default CartProductList;
