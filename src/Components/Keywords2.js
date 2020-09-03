import React from "react";
import "../App.css";
import AddInfo from "../Images/add_info.png";
import Chat from "../Images/chat.png";

function Keywords2() {
  return (
    <div className="keywords2" id="Keywords2">
      <div className="keywords-placeholder2">keywords</div>
      <div className="keywords-caps-placeholder2">
        choose from a thousand of trendy keywords or make your own!
      </div>
      <img src={AddInfo} className="addinfo" />
      <img src={Chat} className="chat" />
    </div>
  );
}

export default Keywords2;
