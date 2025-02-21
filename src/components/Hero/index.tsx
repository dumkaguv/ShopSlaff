import React from "react";

import Categories from "@/components/Categories";
import Banner from "@/components/Banner";
import ContentBlock from "@/components/ContentBlock";

interface HeroProps {
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <section className="flex gap-5 container mt-5 max-md:gap-3 max-md:mt-3">
      <Categories />
      <ContentBlock>{children ?? <Banner />}</ContentBlock>
    </section>
  );
};

export default Hero;
