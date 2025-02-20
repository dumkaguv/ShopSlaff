import React from "react";

import Button from "@/components/Button";
import ROUTES from "@/constants/routes";
import parseRoute from "@/utils/parseRoute";

const SpecialOfferBanner: React.FC = () => {
  return (
    <section className="container mt-5">
      <div className="relative grid grid-cols-2 items-center rounded-md bg-(--color-dark)">
        <div className="mx-auto text-(--color-accent-dark)">
          <span className="text-[70px] font-normal">
            NEW YEAR <br />
          </span>
          <span className="text-[150px] font-normal">SALE</span>
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
          className="absolute bottom-5.5 -left-5.5"
          width={200}
          height={170}
          alt=""
        />
        <img
          src="public/images/playstation.png"
          className="absolute right-[45%] -bottom-7"
          width={270}
          height={150}
          alt=""
        />
      </div>
    </section>
  );
};

export default SpecialOfferBanner;
