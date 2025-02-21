import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "@/constants/routes";

const Footer: React.FC = () => {
  return (
    <footer className="container mt-5">
      <div className="flex items-center gap-3 justify-between rounded-md bg-(--color-dark) p-6 max-md:p-3">
        <h3>
          <Link to={ROUTES.HOME} className="text-3xl max-md:text-2xl">
            Shop Slaff
          </Link>
        </h3>
        <p className="max-md:text-sm">
          © <time dateTime="2025">2025</time> -{" "}
          <Link to={ROUTES.HOME}>Shop Slaff</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
