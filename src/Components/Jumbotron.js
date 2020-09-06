import React from "react";
import {
  Jumbotron as Jumbo,
  Container,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import styled from "styled-components";
import logo from "../Images/Findr_logo2x.png";
import Particles from "react-particles-js";
import BackArrow from "../Images/back_arrow_green.svg";
import FrontArrow from "../Images/forward_icon_green.svg";
import IPhone from "../Images/iphone.png";

const Styles = styled.div`
  .jumbo {
    background-size: cover;
    color: #1a5d57;
    height: 700px;
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

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <Row>
          <Row xs={6} md={6}>
            <Col xs={6} md={6}>
              <img src={logo} style={{ width: "100%" }} />
            </Col>
            <Col xs={6} md={6}>
              <p>Study Better </p>
              <p>Network Smarter</p>
              <p>Launching Soon</p>
            </Col>
          </Row>
          <Col xs={6} md={4}>
            <Row>
              <Col xs={3} md={3}>
                <img src={BackArrow} style={{ width: "20%" }} />
              </Col>
              <Col xs={3} md={3}>
                <img src={IPhone} style={{ width: "100%" }} />
              </Col>
              <Col xs={3} md={3}>
                <img src={FrontArrow} style={{ width: "20%" }} />
              </Col>
            </Row>
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
    </Jumbo>
  </Styles>
);
