import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form";

const ContactUs = () => {
  return (
    <>
      <div>
        <Header />
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "black",
          marginTop: "95px",
        }}
      >
        <div style={{ width: "45%", alignItems: "center" }}>googlemap</div>
        <div
          style={{
            width: "50%",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
            height: "100vh",
            marginTop: "50px",
          }}
        >
          <h1>CONTACT US</h1>
          <div
            style={{
              width: "35%",
              color: "white",
              borderBottom: "2px solid white",
              marginBottom: "30px",
            }}
          ></div>
          <div>
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <div>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ color: "skyblue", size: "2xl" }}
                  target="_blank"
                />
              </div>

              <div style={{ marginBottom: "50px" }}>
                <p> Tel: 7027043535</p>
                <p>E-Mail: info@roarautomobiles.com</p>
              </div>
              <div style={{ display: "flex", marginLeft: "20px" }}>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ color: "skyblue", size: "2xl" }}
                  target="_blank"
                />
              </div>

              <div>
                <p>For Support You can visit us</p>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <div>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ color: "skyblue", size: "2xl" }}
                  target="_blank"
                />
              </div>

              <div>
                <p>
                  Roar Automobiles Fabricator <br /> Karnal, Haryana
                </p>
              </div>
              <div style={{ display: "flex", marginLeft: "20px" }}>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ color: "skyblue", size: "2xl" }}
                  target="_blank"
                />
              </div>

              <div>
                <p>
                  Free standard shipping <br /> on all orders.
                </p>
              </div>
            </div>
            <div style={{ color: "white", marginTop: "20px" }}>
              <Form />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
