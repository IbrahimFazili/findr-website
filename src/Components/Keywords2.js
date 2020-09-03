import React from "react";
import "../App.css";
import AddInfo from "../Images/add_info.png";
import Chat from "../Images/chat.png";

function Keywords2() {
  return (
    <div className="keywords2" id="Keywords2">
      <div
        style={{
          display: "inline-block",
          width: "40%",
          verticalAlign: "bottom",
          marginBottom: "10%",
        }}
      >
        <div style={{ display: "inline-block", width: "50%" }}>
          <img src={AddInfo} className="addinfo" />
        </div>

        <div style={{ display: "inline-block", width: "50%" }}>
          <img src={Chat} className="chat" />
        </div>
      </div>
      <div
        style={{
          display: "inline-block",
          width: "40%",
          alignContent: "center",
          marginBottom: "20%",
        }}
      >
        <p className="keywords-placeholder2">the key is in the details</p>
        <p className="keywords-caps-placeholder2">
          find partners who complement your skills and chat with them!
        </p>
      </div>
    </div>
  );
}

export default Keywords2;
