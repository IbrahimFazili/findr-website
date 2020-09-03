import React from "react";
import "../App.css";
import BackArrow from "../Images/back_arrow_green.svg";
import FrontArrow from "../Images/forward_icon_green.svg";
import iPhone from "../Images/iphone.png";
import logo from "../Images/Findr_logo2x.png";
import Dots from "../Images/abstract-dots.png";

function Home() {
  return (
    <div
      className="Home"
      id="Home"
      style={{
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", marginTop: "10%" }}>
        <div
          style={{
            display: "inline-block",
            width: "50%",
            marginRight: "10%",
            marginTop: "8%",
            verticalAlign: "top",
          }}
        >
          <div style={{ display: "inline-block", width: "50%" }}>
            <img src={logo} className="logo" />
            <figcaption className="caption">Keep Swiping</figcaption>
          </div>

          <div style={{ display: "inline-block", width: "50%" }}>
            <p className="home-screen-msg">Study Better!</p>
            <p className="home-screen-msg1">Network Smarter!</p>
            <br></br>
            <br></br>
            <p className="launching">Launching Soon!</p>
          </div>
        </div>

        <div style={{ display: "inline-block", width: "35%", marginTop: "5%" }}>
          <div style={{ width: "100%" }}>
            <img className="back-arrow" src={BackArrow} />
            <img src={iPhone} className="iphone" />
            <img className="forward-arrow" src={FrontArrow} />
            {/* <img src={Dots} className="dots" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
