import React from "react";
import "../App.css";
import MainImage from "../Images/icon10.png";
import Video from "../Images/website_video.mp4";

function WhyFindr() {
  return (
    <div className="why-findr">
      <p style={{ zIndex: 2 }} className="why-findr-title">
        why Findr?
      </p>

      <div>
        <img
          src={MainImage}
          style={{
            width: "18%",
            marginLeft: "2%",
            verticalAlign: "top",
            marginTop: "8%",
          }}
        />
        <video
          autostart
          autoPlay
          loop
          muted
          disablePictureInPicture
          src={Video}
          type="video/mp4"
          //  className="video"
          style={{ zIndex: 0, width: "75%" }}
        />
      </div>
    </div>
  );
}

export default WhyFindr;
