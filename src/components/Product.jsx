import React from "react";

const Product = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          margin: "20px",
        }}
      >
        <h4 style={{ color: "lightgray", margin: "20px" }}>ROAR EXHAUST</h4>
        <h2>PRODUCTS</h2>
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
      </div>
    </div>
  );
};

export default Product;
