import React, { useState } from "react";
import {
  Jumbotron as Jumbo,
  Container,
  Row,
  Col,
  Carousel,
  Fade,
} from "react-bootstrap";
import logo from "../Images/Findr_logo2x.png";
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
          <Col xs={6} md={3} style={{ marginTop: "25%" }}>
            <Fade in={open}>
              <img src={logo} style={{ width: "70%" }} />
            </Fade>
          </Col>

          <Col xs={6} md={3} className="caption" style={{ marginTop: "25%" }}>
            <Fade in={open}>
              <div>
                <p>Study Better </p>
                <p>Network Smarter</p>
                <p>Launching Soon</p>
              </div>
            </Fade>
          </Col>
          <Col xs={12} md={4} style={{ marginTop: "7.5%" }}>
            <Fade in={open}>
              <img src={IPhone} style={{ width: "50%" }} />
            </Fade>
          </Col>
        </Row>
      </Container>
      <Particles
        params={{
          particles: {
            line_linked: {
              color: "#1a5d57",
              number: {
                value: 15,
              },
              size: {
                value: 1,
              },
            },
            color: {
              value: "#1a5d57",
            },
          },
        }}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      />
    </div>
  );
};
