import React from "react";

import Button from "@/components/Button";
import ROUTES from "@/constants/routes";
import parseRoute from "@/utils/parseRoute";

const SpecialOfferBanner: React.FC = () => {
  return (
    <section className="container mt-5">
      <div className="relative grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4 items-center rounded-md bg-(--color-dark)">
        <div className="mx-auto text-center text-(--color-accent-dark)">
          <span className="max-lg-text-[35px] text-[70px] font-normal max-xl:text-[50px] max-md:text-[35px]">
            NEW YEAR <br />
          </span>
          <span className="text-[150px] font-normal max-xl:text-[120px] max-lg:text-[80px] max-md:text-[75px]">
            SALE
          </span>
          <Button
            asLink
            href={parseRoute(ROUTES.CATEGORIES, "id", "1")}
            variant="secondary"
            className="mx-auto"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            See more
          </Button>
        </div>
        <img src="/public/images/krutoi.png" width={637} height={570} alt="" />

        <img
          src="public/images/sneaker.png"
          className="absolute bottom-5.5 -left-5.5 h-[170px] w-[200px] max-xl:h-auto max-xl:w-[160px] max-lg:bottom-3 max-lg:-left-3 max-lg:w-[120px] max-md:hidden"
          width={200}
          height={170}
          alt=""
        />
        <img
          src="public/images/playstation.png"
          className="absolute right-[45%] -bottom-7 h-[150px] w-[270px] max-xl:-bottom-5 max-xl:h-auto max-xl:w-[230px] max-lg:right-[43%] max-lg:-bottom-3.5 max-lg:w-[165px] max-md:hidden"
          width={270}
          height={150}
          alt=""
        />
      </div>
    </section>
  );
};

export default SpecialOfferBanner;
