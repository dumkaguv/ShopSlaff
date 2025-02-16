import React from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;
