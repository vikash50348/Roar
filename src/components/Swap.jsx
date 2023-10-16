import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../assets/images/Roar21.jpg";
import img1 from "../assets/images/panwar.jpg";
import img2 from "../assets/images/harley.jpg";

const Swap = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const buttonStyles = {
    backgroundColor: props.isActive ? "black" : "white",
    color: props.isActive ? "white" : "black",
    border: "3px solid black",
    padding: "10px",
    transition: "background-color 0.3s, color 0.3s", // Add a smooth transition
    cursor: "pointer", // Show a pointer cursor on hover

    // Use the ternary operator to set hover styles
    "&:hover": {
      backgroundColor: props.isActive ? "black" : "white",
      color: props.isActive ? "white" : "black",
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={false}
      showDots={false}
      infinite={true}
      autoPlay={false}
    >
      <div style={{ position: "relative", marginTop: 95 }}>
        <div>
          <img style={{ width: "100%", height: "100%" }} src={img} alt="img" />
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <h1 style={{ inlineSize: "20", fontSize: 80 }}>ROAR EXHAUST</h1>
          <p style={{ fontFamily: "cursive", fontSize: 50 }}>
            Bike Accessories
          </p>
          <div
            style={{
              marginTop: 20,
              marginLeft: 20,
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <button style={buttonStyles}>LEARN MORE</button>
            <button style={buttonStyles}>OPEN SHOP</button>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", marginTop: "95px" }}>
        <div>
          <img style={{ width: "100%", height: "100%" }} src={img1} alt="img" />
        </div>
        <div
          style={{
            position: "absolute",
            left: "20%",
            top: "60%",
            transform: "translate(-50%,-50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <button style={buttonStyles}>SHOP NOW</button>
        </div>
      </div>
      <div style={{ position: "relative", marginTop: "95px" }}>
        <div>
          <img style={{ width: "100%", height: "70%" }} src={img2} alt="img" />
        </div>
        <div
          style={{
            position: "absolute",
            left: "80%",
            top: "60%",
            transform: "translate(-50%,-50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <p style={{ fontFamily: "cursive", fontSize: 50, color: "white" }}>
            Bike Accessories
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default Swap;
