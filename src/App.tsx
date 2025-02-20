import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./assets/styles/App.css";
import Home from "@/pages/Home";

import { store } from "./store/store";
import ROUTES from "./constants/routes";
import Product from "./pages/Product";
import MainLayout from "./components/MainLayout";
import CategoriesProducts from "./components/CategoriesProducts";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path={ROUTES.HOME} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.PRODUCT} element={<Product />} />
            <Route path={ROUTES.CATEGORIES} element={<CategoriesProducts />} />
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path={ROUTES.FAVORITES} element={<Favorites />} />
          </Route>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
