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
          verticalAlign: "top",
          marginTop: "10%",
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
          marginTop: "20%",
        }}
      >
        <p className="keywords-placeholder2">keywords</p>
        <p className="keywords-caps-placeholder2">
          choose from thousands of trendy keywords or make your own!
        </p>
      </div>
    </div>
  );
}

export default Keywords2;
