import React from "react";
import "../App.css";
import logo from "../Images/Findr_logo2x.png";
import NavBar from "./Nav-Bar-About";
import Particles from "react-particles-js";
import { Jumbotron as Jumbo, Container, Row, Col } from "react-bootstrap";
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


export const AboutHome = () => (
  // <Jumbo fluid className="jumbo">
  //   <Container fluid className="Home">
  //     <Row>
  //       <Col xs={12} md={3}>
  //         <img src={logo} style={{ width: "100%" }} />
  //       </Col>
  //       <Col xs={12} md={9}>
  //         <p
  //           className="home-screen-msg"
  //           style={{ fontSize: "150%", fontFamily: "sans-serif" }}
  //         >
  //           about us
  //         </p>
  //         <p className="home-screen-msg1" style={{ fontSize: "100%" }}>
  //           check out who we are!
  //         </p>
  //       </Col>
  //     </Row>
  //   </Container>
  //   <Particles
  //     params={{
  //       particles: {
  //         line_linked: {
  //           color: "#1a5d57",
  //           number: {
  //             value: 15,
  //           },
  //           size: {
  //             value: 1,
  //           },
  //         },
  //         color: {
  //           value: "#1a5d57",
  //         },
  //       },
  //     }}
  //     style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
  //   />
  // </Jumbo>
  <Styles id="Home">
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <Row>
          <Col xs={6} md={3} style={{marginTop: '25%'}}>
            <img src={logo} style={{ width: "70%" }} />
          </Col>
          <Col xs={6} md={3} className="caption" style={{marginTop: '20%', marginLeft: '20%'}}>
            <p style={{fontSize: '360%'}}>about us</p>
            <p>Study Better </p>
            <p>checkout who we are!</p>
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

// export default HomeAboutUs;
