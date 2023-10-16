import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div style={{ display: "flex", width: "100%", backgroundColor: "black" }}>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "50px",
          textAlign: "center",
          width: "250px",
        }}
      >
        <h5>ABOUT ROAR EXHAUSTS</h5> <br />
        <FontAwesomeIcon
          icon={faLocationArrow}
          style={{ color: "#e1e1e1", marginRight: "7px" }}
        />
        Roar Automobile Fabricators
        <p>Karnal, Haryana</p>
        <p>
          {" "}
          <FontAwesomeIcon
            icon={faMobile}
            style={{ color: "#e1e1e1", marginRight: "7px" }}
          />
          Phone: 7027043535
        </p>
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "50px",
          textAlign: "center",
          width: "250px",
        }}
      >
        <h5>OUR PRODUCTS</h5>
        <div style={{ width: "50px", color: "white" }}></div>
        <br />
        <a
          href="#"
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Bend Pipe
        </a>
        <br />
        <a
          href="#"
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          <br />
          Mufflers
        </a>
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "50px",
          textAlign: "center",
          width: "250px",
        }}
      >
        <h5>INFORMATION</h5> <br />
        <a
          href="#"
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          About Store
        </a>
        <br />
        <a
          href="#"
          style={{
            color: "white",
          }}
        >
          <br />
          Our Collection
        </a>
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "50px",
          textAlign: "center",
          width: "250px",
        }}
      >
        <h5>USEFUL LINKS</h5> <br />
        <a
          href="#"
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Privacy Policy
        </a>
        <br />
        <a
          href="#"
          style={{
            color: "white",
          }}
        >
          <br />
          Returns
        </a>
        <br />
        <a
          href="#"
          style={{
            color: "white",
          }}
        >
          <br />
          Terms & Conditions
        </a>
      </div>
    </div>
  );
};

export default Footer;
