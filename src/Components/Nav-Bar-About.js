import React from "react";
import "../App.css";
import navLogo from "../Images/Findr_logo_g.svg";
import {Link} from "react-router-dom"

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
            <Link to="/">home</Link>
            <div class="underline"></div>
          </li>
          <li class="nav-link">
            <a href="#Home">about us</a>
            <div class="underline"></div>
          </li>
          <li class="nav-link">
            <a href="#Findr">testimonials</a>
            <div class="underline"></div>
          </li>
          <li class="nav-link" style={{ marginRight: "2%" }}>
            <a href="#Team">team</a>
            <div class="underline"></div>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
