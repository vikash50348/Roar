import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img from "../assets/images/panwar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ marginBottom: "150px" }}>
        <Navbar />
      </div>
      <div style={{ display: "flex", textAlign: "center" }}>
        <div>
          <img
            src={img}
            alt="img"
            style={{ height: "355px", width: "631px" }}
          />
        </div>
        <div
          style={{
            marginLeft: "25px",
            marginTop: "100px",
            textAlign: "center",
          }}
        >
          <h1 style={{ marginBottom: "20px" }}>
            ABOUT ROAR AUTOMOBILES FABRICATORS
          </h1>
          <p>
            Roar Exhausts was founded in 2007 by a core team of riders whose
            sole goal was to bring the best possible shopping experience to any
            enthusiast who visits us, in-store or online. Over the next decade,
            we continuously smashed records, raked in awards, and, most
            importantly, helped keep hundreds of thousands of new and
            experienced riders safe and sound.
          </p>
          <div style={{ marginTop: "25px", alignContent: "center" }}>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#808080", size: "2xl", margin: "7px" }}
                target="_blank"
              />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                style={{ color: "#808080", size: "2xl", margin: "7px" }}
                target="_blank"
              />
            </a>
            <a href="https://www.twitter.com/">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#808080", size: "2xl", margin: "7px" }}
                target="_blank"
              />
            </a>
            <a href="https://web.whatsapp.com/">
              <FontAwesomeIcon
                icon={faSquareWhatsapp}
                style={{ color: "#808080", size: "2xl", margin: "7px" }}
                target="_blank"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
