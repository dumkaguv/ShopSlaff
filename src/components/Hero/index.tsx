import React from "react";

import Categories from "@/components/Categories";
import Banner from "@/components/Banner";

const Hero: React.FC = () => {
  return (
    <section className="flex gap-5 container mt-5">
      <Categories />
      <Banner />
    </section>
  );
};

export default Hero;
