import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bottom-header">
      <div style={{ display: "inline-block", width: "50%" }}>
        <div
          style={{
            display: "inline-block",
            width: "50%",
            float: "left",
            verticalAlign: "top",
            marginTop: "15%",
          }}
        >
          <p className="launch">Launching Soon</p>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "50%",
            verticalAlign: "top",
            marginTop: "2.5%",
          }}
        >
          <p style={{ fontSize: "large" }}>
            <p style={{ fontSize: "x-large" }}>about</p>
            Findr is a platform to help you grow and find the perfect partner
            <br></br>-<br></br>
            No, dummy, not a date! Partner for your courses, projects, startups,
            anything!
          </p>
        </div>
      </div>
      <div style={{ display: "inline-block", width: "50%" }}>
        <div
          className="links"
          style={{
            display: "inline-block",
            width: "50%",
            verticalAlign: "top",
            marginTop: "5%",
          }}
        >
          <span style={{ fontSize: "x-large" }}>policies</span>
          <ul>
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
        </div>
        <div
          style={{
            display: "inline-block",
            width: "50%",
            verticalAlign: "top",
            marginTop: "2%",
          }}
        >
          <p style={{ fontSize: "large" }}>
            <p style={{ fontSize: "x-large" }}>contact</p>
            <br></br>
            <br></br>
            findr.study@gmail.com
            <br></br>(647)-779-2407
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
