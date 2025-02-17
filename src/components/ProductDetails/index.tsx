import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";

import { fetchProductById } from "@/store/products/asyncActions";
import { selectProductById } from "@/store/products/select";
import parseImages from "@/utils/parseImages";
import { SIZES } from "@/constants/sizes";
import Button from "../Button";

interface ProductDetailsProps {
  productId: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId }) => {
  const product = useSelector(selectProductById(productId));
  const dispatch = useAppDispatch();
  const [currentSelectedImageIndex, setCurrentSelectedImageIndex] =
    React.useState(0);
  const [currentSelectedSizeIndex, setCurrentSelectedSizeIndex] =
    React.useState(0);

  React.useEffect(() => {
    if (!product) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId, product]);

  React.useEffect(() => {
    setCurrentSelectedImageIndex(0);
  }, [product]);

  if (!product) {
    return;
  }

  const isShoesCategory = product.category.name.toLowerCase() === "shoes";
  const isClothesCategory = product.category.name.toLowerCase() === "clothes";

  const onImageClick = (index: number) => {
    setCurrentSelectedImageIndex(index);
  };

  const onItemSizeClick = (index: number) => {
    setCurrentSelectedSizeIndex(index);
  };

  return (
    <div className="flex p-5">
      <img
        src={
          product.images[currentSelectedImageIndex].includes("[")
            ? parseImages([product.images[currentSelectedImageIndex]])[0]
            : product.images[currentSelectedImageIndex]
        }
        className="h-[380px] w-[380px] rounded-lg"
        width={380}
        height={380}
        alt=""
      />
      <ul className="flex flex-col gap-y-1">
        {product.images.map((image, index) => (
          <li key={index}>
            <img
              src={image.includes("[") ? parseImages([image])[0] : image}
              className={`ml-4.5 min-h-[91px] min-w-[91px] rounded-lg ${index === currentSelectedImageIndex ? "cursor-not-allowed" : "cursor-pointer"}`}
              onClick={() => onImageClick(index)}
              width={91}
              height={91}
              alt=""
            />
          </li>
        ))}
      </ul>
      <div className="ml-8 flex flex-col">
        <h3 className="text-lg">{product.title}</h3>
        <span className="mt-2.5 text-xl font-bold">${product.price}</span>
        {(isShoesCategory || isClothesCategory) && (
          <div className="mt-5 flex items-center gap-x-4 text-sm text-(--color-gray-1)">
            <span>Sizes:</span>
            <ul className="flex items-center gap-x-1.5 text-(--color-light)">
              {SIZES.map((size: string, i: number) => (
                <li
                  key={i}
                  onClick={() => onItemSizeClick(i)}
                  className={`cursor-pointer rounded-lg px-2 py-1 ${
                    i === currentSelectedSizeIndex
                      ? "bg-(--color-accent-dark)"
                      : "bg-(--bg-color)"
                  }`}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5 text-sm font-normal text-(--color-gray-3)">
          {product.description}
        </div>
        <div className="mt-5 flex gap-x-2.5">
          <Button>Add to cart</Button>
          <Button variant="gray">Add to favorites</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
