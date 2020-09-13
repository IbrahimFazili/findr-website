import React, { useState } from "react";
import {
  Jumbotron as Jumbo,
  Container,
  Row,
  Col,
  Carousel,
  Fade,
} from "react-bootstrap";
// import logo from "../Images/Findr_logo2x.png";
import logo from "../Images/findr-logo-white-main.svg";
import Particles from "react-particles-js";
import BackArrow from "../Images/back_arrow_green.svg";
import FrontArrow from "../Images/forward_icon_green.svg";
import IPhone from "../Images/iphone.png";
import carousel from "../Images/carousel.png";
import carousel2 from "../Images/carousel2.png";

export const Jumbotron = () => {
  const [open, setOpen] = useState(false);
  setTimeout(() => setOpen(true), 500);
  return (
    <div>
      <Container fluid className="jumbo">
        <Row>
          <Col md={1}></Col>
          <Col xs={6} md={6} style={{ marginTop: "7%", verticalAlign: "top" }}>
            <Fade in={open}>
              <Container style={{ marginLeft: "10%" }}>
                <img
                  src={logo}
                  className="findr-logo-main"
                  style={{ width: "60%" }}
                />
                <p
                  className="caption"
                  style={{
                    fontStyle: "italic",
                    letterSpacing: "4px",
                    fontSize: "20px",
                    marginTop: "-4%",
                    marginLeft: "-3.5%",
                  }}
                >
                  Keep Swiping
                </p>
              </Container>
            </Fade>
          </Col>
          <Col xs={12} md={5}>
            <Fade in={open}>
              <img
                src={IPhone}
                style={{ width: "45%", marginTop: "20%", marginRight: "30%" }}
              />
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6} className="caption">
            <Fade in={open}>
              <Container
                style={{
                  fontSize: "25px",
                  marginLeft: "28%",
                  letterSpacing: "4px",
                  marginTop: "-15%",
                }}
              >
                <p>Study Better &nbsp; | &nbsp; Network Smarter </p>
              </Container>
            </Fade>
          </Col>
          {/* <Col xs={6} md={6}>
            <p
              className="caption"
              style={{
                fontSize: "25px",
                marginLeft: "-5%",
                marginTop: "3%",
                fontStyle: "italic",
                letterSpacing: "4px",
              }}
            >
              launching soon
            </p>
          </Col> */}
        </Row>
      </Container>
      <Particles
        params={{
          particles: {
            line_linked: {
              color: "#ffffff",
              number: {
                value: 15,
              },
              size: {
                value: 1,
              },
            },
            color: {
              value: "#ffffff",
            },
          },
        }}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      />
    </div>
  );
};
