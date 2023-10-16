import React from "react";
import ContactUs from "./ContactUs";

import Header from "./Header";
import Navbar from "./Navbar";
import Fearture from "./Fearture";
import Product from "./Product";
import About from "./About";
import Swap from "./Swap";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Swap />
      <Fearture />
      <Product />
      <About />
    </div>
  );
};

export default Home;
