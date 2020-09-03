import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bottom-header">
      <div style={{ display: "inline-block", width: "30% " }}>
        <p className="launch">Launching soon!</p>
      </div>
      <div>
        <p
          className="AboutUs"
          style={{ display: "inline-block", width: "30%" }}
        >
          About Us
          <br></br>
          Findr is a platform to help you grow and find the perfect partner -
          No, dummy, not a date! Partner for your courses, projects, startups,
          anything!
        </p>
      </div>
      <div className="links" style={{ display: "inline-block", width: "30%" }}>
        <ul>
          <div style={{ width: "80%" }}>
            <li class="nav-link">
              <Link to="/Privacy">Privacy Policy</Link>
              <div class="underline"></div>
            </li>
            <li class="nav-link">
              <Link to="/TermsAndConditions">Terms and Conditions</Link>
              <div class="underline"></div>
            </li>
            <li class="nav-link" style={{ marginRight: "2%" }}>
              <Link to="/Safety">Safety Tips</Link>
              <div class="underline"></div>
            </li>
            <li class="nav-link" style={{ marginRight: "2%" }}>
              <Link to="/Guidelines">Community Guidlines</Link>
              <div class="underline"></div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default About;
