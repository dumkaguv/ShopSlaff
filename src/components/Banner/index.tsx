import React from "react";
import Button from "@/components/Button";

const Banner: React.FC = () => {
  return (
    <div className="relative flex h-[425px] w-full flex-col rounded-[6px] bg-(--color-dark) pl-9">
      <h2 className="text-[120px] h-[145px] font-black text-(--bg-color) uppercase">
        BIG SALE 20%
      </h2>
      <div className="grid gap-y-2 pl-2">
        <span className="mt-5 h-[20px] text-(--color-gray-2) uppercase">
          the bestseller of 2022
        </span>
        <h3 className="w-[480px] text-[42px]/[135%] font-bold uppercase">
          LENNON r2d2 <br /> with NVIDIA 5090 TI
        </h3>
      </div>
      <Button variant="secondary" className="mt-6 ml-2">Shop Now</Button>
      <img
        src="/public/images/hero.png"
        alt="banner"
        className="absolute right-8 -bottom-5 h-[360px] w-[460px]"
      />
    </div>
  );
};

export default Banner;
