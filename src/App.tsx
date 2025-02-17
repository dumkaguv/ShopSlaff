import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./assets/styles/App.css";
import Home from "@/pages/Home";

import { store } from "./store/store";
import ROUTES from "./constants/routes";
import Product from "./pages/Product";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path={ROUTES.HOME} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.PRODUCT} element={<Product />} />
          </Route>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
