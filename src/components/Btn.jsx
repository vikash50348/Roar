import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/images/Roar21.jpg";
import "./Btn.css";
const Btn = () => {
  return (
    <div className="image-container">
      <div className="icon overlay">
        <FontAwesomeIcon icon={faAngleLeft} size="lg" />
      </div>
      <div>
        <img src={img} alt="img" className="img  overlay" />
      </div>
    </div>
  );
};

export default Btn;
