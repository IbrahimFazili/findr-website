import React from "react";
import "../App.css";
// import navLogo from "../Images/Findr_logo_g.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Nav, Navbar } from "react-bootstrap";
import navLogo from "../Images/Findr-logo-white.svg";

const Styles = styled.div`
  .navbar {
    background-color: "#fcfdfd";
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #1a5d57;
    &:hover {
      color: #1a5d57;
    }
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand="lg" fixed="top" className="navbar-style">
      <Navbar.Brand href="/">
        <img src={navLogo} height="30%" width="40%" style={{ float: "left" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link class="nav-link" as={Link}>
              <Link to="Home" class="link">
                home
              </Link>
              <div class="underline"></div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <a href="#WhyFindr" class="link">
                why us?
              </a>
              <div class="underline"></div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <a href="#Testimonials" class="link">
                testimonials
              </a>
              <div class="underline"></div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <a href="#Team" class="link">
                team
              </a>
              <div class="underline"></div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavBar;
