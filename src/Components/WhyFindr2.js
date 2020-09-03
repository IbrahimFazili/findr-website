import React from "react";
import "../App.css";
import Icon1 from "../Images/icon1.png";
import Icon2 from "../Images/icon2.png";
import Icon3 from "../Images/icon3.png";

function WhyFindr2() {
  return (
    <div className="why-findr">
      <div>
        <img src={Icon1} className="pic1" />
        <figcaption className="pic1cap">don't stop swiping</figcaption>
        <figcaption className="pic1capBottom">
          find partners for your courses, projects, research. Take your pick!
        </figcaption>
      </div>

      <div>
        <img src={Icon2} className="pic2" />
        <figcaption className="pic2cap">network smarter</figcaption>
        <figcaption className="pic2capBottom">
          find peers from different fields and expand your network!
        </figcaption>
      </div>

      <div>
        <img src={Icon3} className="pic3" />
        <figcaption className="pic3cap">learn with others</figcaption>
        <figcaption className="pic3capBottom">
          match with people and more!
        </figcaption>
      </div>
    </div>
  );
}

export default WhyFindr2;
