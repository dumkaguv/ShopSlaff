import React from "react";

import Button from "@/components/Button";
import ROUTES from "@/constants/routes";
import parseRoute from "@/utils/parseRoute";

const Banner: React.FC = () => {
  return (
    <div className="pl-9 max-xl:pl-7 max-md:pl-4 w-fit">
      <h2 className="h-[145px] max-sm:hidden text-[120px] font-black text-(--bg-color) uppercase max-xl:text-[85px] max-lg:h-auto max-lg:text-[62px] max-md:text-[45px] max-sm:text-[40px]">
        BIG SALE 20%
      </h2>
      <div className="grid gap-y-2 pl-2">
        <span className="mt-5 h-[20px] max-md:text-[14px] text-(--color-gray-2) uppercase max-md:mt-7">
          the bestseller of 2022
        </span>
        <h3 className="w-[480px] text-[42px]/[135%] font-bold uppercase max-xl:text-[32px] max-lg:w-[310px] max-md:text-[22px] max-sm:text-[18px]">
          LENNON r2d2 <br /> with NVIDIA 5090 TI
        </h3>
      </div>
      <Button
        asLink
        href={parseRoute(ROUTES.CATEGORIES, "id", "2")}
        variant="secondary"
        className="mt-6 ml-2"
      >
        Shop Now
      </Button>
      <img
        src="/public/images/hero.png"
        alt="banner"
        className="absolute right-8 max-sm:hidden -bottom-5 h-[360px] w-[460px] max-xl:h-auto max-xl:w-[400px] max-lg:w-[300px] max-md:right-4 max-md:-bottom-3 max-md:w-[220px]"
      />
    </div>
  );
};

export default Banner;
