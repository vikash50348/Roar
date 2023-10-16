import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
