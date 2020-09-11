import React, { useState } from "react";
import "../App.css";
import logo from "../Images/Findr_logo2x.png";
import NavBar from "./Nav-Bar-About";
import Particles from "react-particles-js";
import { Jumbotron as Jumbo, Container, Row, Col, Fade } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    background-size: cover;
    height: 90vh;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #e5efec;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const AboutHome = () => {
  const [open, setOpen] = useState(false);
  setTimeout(() => setOpen(true), 500);
  return (
    <Styles id="Home">
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <Fade in={open}>
            <div>
              <Row>
                <Col xs={6} md={3} style={{ marginTop: "25%" }}>
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
      </Jumbo>
    </Styles>
  );
};

// export default HomeAboutUs;
