import React from "react";
import "../App.css";
import logo from "../Images/Findr_logo2x.png";
import NavBar from "./Nav-Bar-About";

function HomeAboutUs() {
  return (
    <div
      className="Home"
      id="Home"
      style={{
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", marginTop: "8%", width: "100%" }}>
        <div
          style={{
            display: "inline-block",
            width: "50%",
            marginLeft: "7%",
            marginTop: "8%",
            verticalAlign: "top",
            float: "left",
          }}
        >
          <div
            style={{
              display: "inline-block",
              width: "50%",
              alignContent: "center",
            }}
          >
            <img src={logo} className="logo" />
            <figcaption className="caption">Keep Swiping</figcaption>
          </div>

          <div style={{ display: "inline-block", width: "50%" }}>
            <p className="home-screen-msg">nice to meet you</p>
            <p className="home-screen-msg1">about us</p>
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="linkSecond">
          <ul>
            <div style={{ display: "inline-block", width: "80%" }}>
              <li class="nav-link">
                <a href="#WhyFindr">why us?</a>
                <div class="underline"></div>
              </li>
              <li class="nav-link">
                <a href="#Findr">Findr</a>
                <div class="underline"></div>
              </li>
              <li class="nav-link" style={{ marginRight: "2%" }}>
                <a href="#Team">the team</a>
                <div class="underline"></div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
