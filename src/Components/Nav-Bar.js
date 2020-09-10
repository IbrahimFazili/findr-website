import React from "react";
import "../App.css";
import navLogo from "../Images/Findr_logo_g.svg";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

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
    <Navbar expand="lg" fixed="top" bg="white">
      <Navbar.Brand href="/">
        <img src={navLogo} height="30%" width="40%" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link class="nav-link">
              <a href="#Home" class="link">home</a>
              <div class="underline"></div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Link class="link" to="AboutUs">
                about
              </Link>
              <div class="underline"></div>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <a href="#Features" class="link">features</a>
              <div class="underline"></div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <a href="#Contact" class="link">
                contact
              </a>
              <div class="underline"></div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

// function NavBar() {
//   return (
//     <div class="navbar-container">
//       <ul>
//         <div
//           style={{
//             display: "inline-block",
//             width: "5%",
//             float: "left",
//             marginTop: "-1.2%",
//           }}
//         >
//           <li>
//             <img src={navLogo} height="80" width="90" class="nav_logo" />
//           </li>
//         </div>
//         <div style={{ display: "inline-block", width: "40%" }}>
//           <li class="nav-link">
//             <a href="#Home">home</a>
//             <div class="underline"></div>
//           </li>
//           <li class="nav-link">
//             <a>
//               <Link to="AboutUs">about us</Link>
//             </a>
//             <div class="underline"></div>
//           </li>
//           <li class="nav-link">
//             <a href="#Keywords">features</a>
//             <div class="underline"></div>
//           </li>
//           <li class="nav-link" style={{ marginRight: "2%" }}>
//             <a href="#Contact-Us">contact</a>
//             <div class="underline"></div>
//           </li>
//         </div>
//       </ul>
//     </div>
//   );
// }

// export default NavBar;
