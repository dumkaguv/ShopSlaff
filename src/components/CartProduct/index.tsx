import React from "react";

import { changeQuantity, removeItem } from "@/store/cart/slice";
import { useAppDispatch } from "@/store/store";
import ProductItemType from "@/types/ProductItemType";
import { Link } from "react-router-dom";
import ROUTES from "@/constants/routes";
import parseRoute from "@/utils/parseRoute";

type CartProductProps = {
  item: ProductItemType;
};

const CartProduct: React.FC<CartProductProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const onRemoveFromCartClick = () => {
    dispatch(removeItem(item.id));
  };

  const onChangeQuantity = (amount: number) => {
    dispatch(changeQuantity({ id: item.id, amount }));
  };

  return (
    <div className="grid grid-cols-2 rounded-lg bg-(--bg-color) px-4 py-3 max-lg:grid-cols-1 max-lg:gap-2">
      <div className="flex items-center justify-between gap-3.5 max-lg:gap-5">
        <div className="flex items-center">
          <Link to={parseRoute(ROUTES.PRODUCT, "id", item.id.toString())}>
            <img
              className="min-h-[65px] min-w-[65px] shrink-0 rounded-md"
              src={item.images[0]}
              width={65}
              height={65}
              alt=""
            />
          </Link>
          <div className="ml-4 flex flex-col gap-y-[3px]">
            <h3 className="text-sm font-semibold text-white">{item.title}</h3>
            <span className="text-xs text-(--color-gray-3)">
              {item.category.name},{" "}
              <span className="font-extrabold">
                {item.size ? `size : ${item.size}` : ""}
              </span>
            </span>
          </div>
        </div>
        <span className="text-[20px] font-bold text-white max-lg:text-base">
          {(item.price * 0.8).toFixed(0)}$
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5 max-lg:gap-x-3 lg:ml-[21%]">
          <button
            onClick={() => onChangeQuantity(-1)}
            className={`relative h-[25px] w-[25px] rounded-md bg-(--color-gray-1) transition-all after:absolute after:top-[50%] after:left-[50%] after:h-[3px] after:w-[13px] after:-translate-x-[50%] after:-translate-y-[50%] after:rounded-[30px] after:bg-(--color-gray-3) hover:bg-(--color-gray-2) ${item.quantity === 1 ? "cursor-not-allowed" : ""}`}
            type="button"
          ></button>
          <span className="text-sm text-(--color-gray-3)">{item.quantity}</span>
          <button
            onClick={() => onChangeQuantity(1)}
            className="relative h-[25px] w-[25px] rounded-md bg-(--color-accent-dark) transition-all before:absolute before:top-[50%] before:left-[50%] before:h-[1.5px] before:w-[12px] before:-translate-x-[50%] before:-translate-y-[50%] before:rotate-90 before:rounded-[30px] before:bg-white after:absolute after:top-[50%] after:left-[50%] after:h-[2px] after:w-[12px] after:-translate-x-[50%] after:-translate-y-[50%] after:rounded-[30px] after:bg-white hover:bg-(--color-accent-hover)"
            type="button"
          ></button>
        </div>
        <div className="flex gap-x-11 max-lg:gap-x-5">
          <span className="text-[22px] font-bold text-(--color-accent-dark) max-lg:text-lg">
            {Number((item.price * 0.8).toFixed(0)) * (item.quantity ?? 1)}$
          </span>
          <button onClick={onRemoveFromCartClick} type="button">
            <img
              src="/public/svg/icon-close.svg"
              width={16}
              height={16}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
