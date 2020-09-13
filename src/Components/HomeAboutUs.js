import React, { useState } from "react";
import "../App.css";
// import logo from "../Images/Findr_logo2x.png";
import logo from "../Images/findr-logo-white-main.svg";
import NavBar from "./Nav-Bar-About";
import Particles from "react-particles-js";
import { Jumbotron as Jumbo, Container, Row, Col, Fade } from "react-bootstrap";

export const AboutHome = () => {
  const [open, setOpen] = useState(false);
  setTimeout(() => setOpen(true), 500);
  return (
    <div>
      <Container fluid className="jumbo">
        <Fade in={open}>
          <div>
            <Row>
              <Col xs={6} md={3} style={{ marginTop: "15%" }}>
                <img src={logo} style={{ width: "70%" }} />
              </Col>
              <Col
                xs={6}
                md={3}
                className="caption"
                style={{ marginTop: "20%", marginLeft: "20%" }}
              >
                <p style={{ fontSize: "360%" }}>about us</p>
                <p>checkout who we are!</p>
              </Col>
            </Row>
          </div>
        </Fade>
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

// export default HomeAboutUs;
