import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bottom-header">
      <div
        style={{
          display: "inline-block",
          width: "30%",
          float: "left",
          verticalAlign: "top",
          marginTop: "10%",
        }}
      >
        <p className="launch">Launching Soon</p>
      </div>

      <div
        style={{
          display: "inline-block",
          width: "30%",
          verticalAlign: "top",
          marginTop: "2.5%",
        }}
      >
        <p style={{ fontSize: "larger" }}>
          <p style={{ fontSize: "x-large" }}>About Us</p>
          <br></br>
          Findr is a platform to help you grow and find the perfect partner
          <br></br>-<br></br>
          No, dummy, not a date! Partner for your courses, projects, startups,
          anything!
        </p>
      </div>
      <div
        className="links"
        style={{
          display: "inline-block",
          width: "30%",
          verticalAlign: "top",
          marginTop: "4%",
          marginRight: "5%",
        }}
      >
        <ul>
          <li class="nav-link">
            <Link to="/Privacy">Privacy Policy</Link>
            <div class="underline"></div>
          </li>
          <li class="nav-link">
            <Link to="/TermsAndConditions">Terms and Conditions</Link>
            <div class="underline"></div>
          </li>
          <li class="nav-link">
            <Link to="/Safety">Safety Tips</Link>
            <div class="underline"></div>
          </li>
          <li class="nav-link">
            <Link to="/Guidelines">Community Guidlines</Link>
            <div class="underline"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
