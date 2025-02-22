import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./assets/styles/App.css";
import Home from "@/pages/Home";

import { store } from "./store/store";
import ROUTES from "./constants/routes";
import MainLayout from "./components/MainLayout";

const Cart = React.lazy(() => import("./pages/Cart"));
const Favorites = React.lazy(() => import("./pages/Favorites"));
const Product = React.lazy(() => import("./pages/Product"));
const CategoriesProducts = React.lazy(
  () => import("./pages/CategoriesProducts"),
);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path={ROUTES.HOME} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route
              path={ROUTES.PRODUCT}
              element={
                <Suspense fallback={<div></div>}>
                  <Product />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.CATEGORIES}
              element={
                <Suspense fallback={<div></div>}>
                  <CategoriesProducts />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.CART}
              element={
                <Suspense fallback={<div></div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.FAVORITES}
              element={
                <Suspense fallback={<div></div>}>
                  <Favorites />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
