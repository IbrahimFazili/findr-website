import React from "react";
import "../App.css";
import nav_logo from "../Images/F_logo.png";

function NavBar() {
  return (
    <div class="navbar-container">
      <ul>
        <li>
          <img src={nav_logo} class="nav_logo" />
        </li>
        <li class="nav-link">
          <a href="#Home">home</a>
          <div class="underline"></div>
        </li>
        <li class="nav-link">
          <a href="#">about us</a>
          <div class="underline"></div>
        </li>
        <li class="nav-link">
          <a href="#Keywords">keywords</a>
          <div class="underline"></div>
        </li>
        <li class="nav-link" style={{ marginRight: "2%" }}>
          <a href="#Contact-Us">contact</a>
          <div class="underline"></div>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
