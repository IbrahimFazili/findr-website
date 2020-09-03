import React from "react";
import "../App.css";
import nav_logo from "../Images/F_logo.png";
import navLogo from "../Images/Findr_logo_g.svg";

function NavBar() {
  return (
    <div class="navbar-container">
      <ul>
        <div
          style={{
            display: "inline-block",
            width: "5%",
            float: "left",
            marginTop: "-1.2%",
          }}
        >
          <li>
            <img
              src={navLogo}
              alt="triangle with all three sides equal"
              height="80"
              width="90"
              class="nav_logo"
            />
          </li>
        </div>
        <div style={{ display: "inline-block", width: "40%" }}>
          <li class="nav-link">
            <a href="#Home">home</a>
            <div class="underline"></div>
          </li>
          <li class="nav-link">
            <a href="#">about us</a>
            <div class="underline"></div>
          </li>
          <li class="nav-link">
            <a href="#Keywords">features</a>
            <div class="underline"></div>
          </li>
          <li class="nav-link" style={{ marginRight: "2%" }}>
            <a href="#Contact-Us">contact</a>
            <div class="underline"></div>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
