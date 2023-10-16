import React from "react";
import img from "../assets/images/roar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "24px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        position: "fixed",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "85%",
          height: 50,
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            borderBottom: "none",
            gap: 8,
            marginLeft: 10,

            textAlign: "center",
          }}
        >
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          {/* update dropdown error */}
          {/* <li>
            <select name="product">
              <option>
                <a href="#">BRAND PIPES</a>
              </option>
              <option>
                <a href="#">MUFFLERS</a>
              </option>
            </select>
          </li> */}
          <li>
            <NavLink to="/product">PRODUCT</NavLink>
          </li>
          <li>
            <NavLink to="/ica">ICA</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT US</NavLink>
          </li>
        </ul>
        <div style={{ marginRight: "24em" }}>
          <a href="https://www.roarautomobiles.com/">
            <img width={150} src={img} alt="image" />
          </a>
        </div>
        <div style={{ alignItems: "end" }}>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon
              icon={faShopify}
              style={{ color: "#808080", size: "2xl" }}
              target="_blank"
            />
          </a>

          <span>0.00</span>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
