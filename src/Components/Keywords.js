import React from "react";
import "../App.css";
import Home from "../Images/home.png";
import Match from "../Images/match.png";

function Keywords() {
  return (
    <div className="keywords" id="Keywords">
      <div
        style={{
          display: "inline-block",
          width: "30%",
          alignContent: "center",
          marginTop: "20%",
        }}
      >
        <p className="keywords-text">unlimited matches</p>
        <p className="keywords-caps">
          find matches for any interest, in any industry!
        </p>
      </div>

      <div
        style={{
          display: "inline-block",
          width: "50%",
          verticalAlign: "top",
          marginTop: "3%",
        }}
      >
        <div style={{ display: "inline-block", width: "50%" }}>
          <img src={Home} className="home" />
        </div>

        <div style={{ display: "inline-block", width: "50%" }}>
          <img src={Match} className="match" />
        </div>
      </div>
    </div>
  );
}

export default Keywords;
