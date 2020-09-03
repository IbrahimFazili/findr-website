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
          width: "40%",
          alignContent: "center",
          marginTop: "20%",
        }}
      >
        <p className="keywords-text">keywords</p>
        <p className="keywords-caps">
          choose from thousands of trendy keywords or make your own!
        </p>
      </div>

      <div
        style={{
          display: "inline-block",
          width: "40%",
          verticalAlign: "top",
          marginTop: "10%",
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
