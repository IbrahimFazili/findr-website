import React from "react";
import "../App.css";
import Home from "../Images/home.png";
import Match from "../Images/match.png";

function Keywords() {
  return (
    <div className="keywords" id="Keywords">
      <div className="keywords-text">keywords</div>
      <div className="keywords-caps">
        choose from a thousand of trendy keywords or make your own!
      </div>
      <img src={Home} className="home" />
      <img src={Match} className="match" />
    </div>
  );
}

export default Keywords;
