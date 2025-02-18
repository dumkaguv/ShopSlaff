import React from "react";

import Button from "@/components/Button";

const SpecialOfferBanner: React.FC = () => {
  return (
    <section className="container mt-5">
      <div className="relative grid grid-cols-2 items-center rounded-md bg-(--color-dark)">
        <div className="mx-auto text-(--color-accent-dark)">
          <span className="text-[70px] font-normal">
            NEW YEAR <br />
          </span>
          <span className="text-[150px] font-normal">SALE</span>
          <Button variant="secondary" className="mx-auto">
            See more
          </Button>
          
        </div>
        <img src="/public/images/krutoi.png" width={637} height={570} alt="" />

        <img
            src="public/images/sneaker.png"
            className="absolute -left-5.5 bottom-5.5"
            width={200}
            height={170}
            alt=""
          />
          <img
            src="public/images/playstation.png"
            className="absolute -bottom-7 right-[45%]"
            width={270}
            height={150}
            alt=""
          />
      </div>
    </section>
  );
};

export default SpecialOfferBanner;
