import React, { useState } from "react";
import "../../App.css";
import UofTDot from "../../Images/Universities/uoft.png";
import RedDot from "../../Images/pin.svg";

function UofT() {
  const [isVisible, setVisible] = useState(false);
  var keepPopupAlive = false;

  return (
    <div id="UofTDot">
      <img
        src={RedDot}
        id="uoft"
        className="UofTDotMap"
        onMouseOver={() => setVisible(true)}
        onMouseOut={() =>
          setTimeout(() => !keepPopupAlive && setVisible(false), 1000)
        }
      />
      <div
        class="innerText"
        onMouseEnter={() => {
          keepPopupAlive = true;
          setVisible(true);
        }}
        onMouseLeave={() => {
          keepPopupAlive = false;
          setVisible(false);
        }}
        style={isVisible ? hoverStyle : { display: "none" }}
      >
        <img src={UofTDot} id="UniLogoAlt" />
      </div>
    </div>
  );
}

const hoverStyle = {
  display: "block",
  border: "2px solid white",
  backgroundColor: "#fcfdfd",
  width: "10%",
  color: "#1a5d57",
  borderRadius: "0.8em",
  position: "absolute",
  left: "19.5%",
  top: "17%",
  boxShadow: "0px 3px 20px #333333",
};

export default UofT;
