import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import app from "../../images/app.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-4">
      <Container>
        <Row xs={1} md={2} lg={4}>
          <Col>
            <div style={{ textAlign: "left" }}>
              <h5>Contact</h5>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>161009</span>
                <span>info@service.abc</span>
                <span>Corporate Address</span>
                <span>House # 57, Road # 20, Block - A, Dohs, Dhaka 1212</span>
              </div>
            </div>
          </Col>
          <Col>
            <div style={{ textAlign: "left" }}>
              <h5>OTHER PAGES</h5>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Blog</span>
                <span>Help</span>
                <span>Terms of use</span>
                <span>Privacy Policy</span>
                <span>Sitemap</span>
              </div>
            </div>
          </Col>
          <Col>
            {" "}
            <div style={{ textAlign: "left" }}>
              <h5>COMPANY</h5>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>sManager</span>
                <span>sBusiness</span>
                <span>sDelivery</span>
                <span>sBondhu</span>
              </div>
            </div>
          </Col>
          <Col>
            {" "}
            <div style={{ textAlign: "left" }}>
              <h5>Download our App</h5>
              <span>
                Tackle your to-do list wherever you are with our mobile app &
                make your life easy.
              </span>

              <img
                src={app}
                alt=""
                className="my-2"
                style={{ width: "230px", display: "block" }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "8px",
                }}
              >
                <i className="fab fa-facebook fa-2x m-1"></i>
                <i className="fab fa-linkedin-in fa-2x m-1"></i>
                <i className="fab fa-instagram fa-2x m-1"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
