import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhoneFlip } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: 5,
        textAlign: "center",
        fontFamily: "Font Awesome 5 Free",
        fontSize: 13,
        marginBottom: 2,
        lineHeight: "21px",
      }}
    >
      <FontAwesomeIcon
        icon={faSquarePhoneFlip}
        style={{ color: "#FFFFFF", size: "lg" }}
      />
      OUR PHONE NUMBER: 7027043535
    </div>
  );
};

export default Header;
