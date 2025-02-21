import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";

import { fetchProductById } from "@/store/products/asyncActions";
import { selectProductById } from "@/store/products/select";
import parseImages from "@/utils/parseImages";
import { SIZES } from "@/constants/sizes";
import Button from "@/components/Button";
import { addItem } from "@/store/cart/slice";
import { selectItem } from "@/store/cart/select";

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
  const quantityCart = useSelector(selectItem(+productId))?.quantity || 0;

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

  const onAddToCartButtonClick = () => {
    dispatch(
      addItem({
        ...product,
        size: parseFloat(SIZES[currentSelectedSizeIndex]),
        quantity: 1,
      }),
    );
  };

  console.log(product);

  return (
    <div className="p-5 xl:flex">
      <div className="max-xl:flex xl:contents max-md:flex-col max-md:gap-2">
        <img
          src={
            product.images[currentSelectedImageIndex].includes("[")
              ? parseImages([product.images[currentSelectedImageIndex]])?.[0]
              : product.images[currentSelectedImageIndex]
          }
          className="h-[380px] w-[380px] shrink-0 rounded-lg max-md:w-[100%] max-sm:w-[100%] max-sm:h-auto"
          width={380}
          height={380}
          alt=""
        />
        <ul className="flex md:flex-col gap-y-1 max-md:gap-x-2.5">
          {product.images.map((image, index) => (
            <li key={index} className="transition-all hover:scale-[1.025]">
              <img
                src={image.includes("[") ? parseImages([image])?.[0] : image}
                className={`md:ml-4.5 min-h-[91px] min-w-[91px] max-md:min-w-[80px] flex-wrap rounded-lg ${index === currentSelectedImageIndex ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={() => onImageClick(index)}
                width={91}
                height={91}
                alt=""
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col max-xl:mt-5 xl:ml-8">
        <h3 className="text-lg">{product.title}</h3>
        <span className="mt-2.5 text-xl font-bold">
          ${(product.price * 0.8).toFixed(0)}
        </span>
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
        <div className="mt-5 flex gap-2.5 max-md:flex-col">
          <Button onClick={onAddToCartButtonClick} className="max-md:w-full">
            Add to cart {quantityCart > 0 ? `(${quantityCart})` : ""}
          </Button>
          <Button variant="gray" className="max-md:w-full">Add to favorites</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
