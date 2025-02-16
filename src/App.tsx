import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./assets/styles/App.css";
import Home from "@/pages/Home";

import { store } from "./store/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
