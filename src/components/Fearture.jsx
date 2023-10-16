import React from "react";
import img from "../assets/images/goldpipe.png";
import img1 from "../assets/images/p1.png";
import "./file.css";

const Fearture = () => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px",
      }}
    >
      <h4 style={{ color: "lightgray", margin: "20px" }}>MADE THE HARD WAY</h4>
      <h2>FEATURED CATEGORIES</h2>
      <div
        style={{
          display: "flex",
          direction: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <div
          style={{
            width: "50px",
            alignContent: "center",
            color: "lightgrey",
            borderBottom: "2px solid lightgray",
          }}
        ></div>
        <p style={{ color: "lightgray" }}>X</p>
        <div
          style={{
            width: "50px",
            alignContent: "center",
            color: "lightgrey",
            borderBottom: "2px solid lightgray",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
        }}
      >
        <div style={{ backgroundColor: "white" }}>
          <img
            src={img}
            alt="img"
            style={{
              width: "95%",
              position: "relative",
              display: "inline-block",
              backgroundColor: "black",
            }}
          />
        </div>
        <div
          style={{
            color: "white",
          }}
        >
          <h3>Bend Pipes</h3>
        </div>
        <div>
          <img
            src={img1}
            alt="img"
            style={{ width: "95%", height: "500px", backgroundColor: "black" }}
          />
        </div>
      </div>
      <p style={{ fontStyle: "italic", marginBottom: 5 }}>
        Roar Exhausts is an online store for all your bike’s performance
        upgrade. we manufacture best quality exhausts bend pipes for various
        bikes. Visit our shop page to see all main features for
        <a>Our Collection</a>
      </p>

      <h6
        style={{
          background: "black",
          color: "white",
          padding: 5,
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: 13,
          marginBottom: 2,
          lineHeight: "21px",
        }}
      >
        UP TO 30% OFF THE ENTIRE STORE! FOR ALL OUR NEW CUSTOMER ROAR EXHAUSTS
      </h6>
    </div>
  );
};

export default Fearture;
