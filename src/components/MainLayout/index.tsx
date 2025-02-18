import React from "react";

import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "../Footer";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
