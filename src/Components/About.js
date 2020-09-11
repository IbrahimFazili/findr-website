import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Fade } from "react-bootstrap";

function About() {
  // <Styles>
  return (
    <Container fluid className="bottom-header">
      <Row>
        <Col xs={12} md={3} sm={6}>
          <p
            style={{
              textAlign: "left",
              padding: "5%",
              lineHeight: "35px",
            }}
          >
            <p style={{ fontSize: "x-large" }}> about </p>
            Findr is a platform to help you grow and find the perfect partner
            <br></br>-<br></br>
            No, dummy, not a date! Partner for your courses, projects, startups,
            anything!
          </p>
        </Col>
        <Col xs={12} md={3} sm={6} className="links">
          <p
            style={{
              fontSize: "x-large",
              textAlign: "left",
              padding: "5%",
              marginLeft: "4%",
            }}
          >
            legal
          </p>
          <ul
            style={{
              textAlign: "left",
              padding: "0",
              margin: "0",
            }}
          >
            <li class="nav-link">
              <Link to="/Privacy" style={{ fontSize: "large" }}>
                Privacy Policy
              </Link>
              <div class="underline"></div>
            </li>
            <li class="nav-link">
              <Link to="/TermsAndConditions" style={{ fontSize: "large" }}>
                Terms and Conditions
              </Link>
              <div class="underline"></div>
            </li>
            <li class="nav-link">
              <Link to="/Safety" style={{ fontSize: "large" }}>
                Safety Tips
              </Link>
              <div class="underline"></div>
            </li>
            <li class="nav-link">
              <Link to="/Guidelines" style={{ fontSize: "large" }}>
                Community Guidlines
              </Link>
              <div class="underline"></div>
            </li>
          </ul>
        </Col>

        <Col xs={12} md={3} sm={6}>
          <p style={{ fontSize: "large", textAlign: "left", padding: "5%" }}>
            <p style={{ fontSize: "x-large" }}>contact</p>
            <br></br>
            <a
              href="mailto:findr.study@gmail.com"
              target="_blank"
              style={{ color: "inherit" }}
            >
              findr.study@gmail.com
            </a>
            <br></br>(647)-779-2407
          </p>
        </Col>
        <Col xs={12} md={3} sm={6}>
          <p
            className="launch"
            style={{
              textAlign: "left",
              padding: "5%",
              fontSize: "25px",
            }}
          >
            Launching Soon
          </p>
        </Col>
      </Row>
    </Container>
    // </Styles>
  );
}

export default About;
