import React from "react";
import "../App.css";

function WhyFindrAbout() {
  return (
    <div className="why-findr" id="WhyFindr">
      <p
        style={{
          color: "#1a5d57",
          display: "inline-block",
          marginTop: "4%",
          fontSize: "130%",
        }}
      >
        why us?
      </p>
      <div style={{ marginTop: "5%" }}>
        <p style={{ color: "#1a5d57", width: "70%", marginLeft: "15%" }}>
          The best partners are those who help you grow and learn better. They
          try to teach you while learning from you too. A partner is someone who
          complements your needs. Yeah, it sounds a lot like a date doesn’t it?
          Well, that’s because it is. When you work on a project, you don’t look
          for someone who has the same skillset as you! We recognise this and
          part of the reason we are able to do that is because we are students
          too!
        </p>
        <p style={{ color: "#1a5d57" }}>-</p>
        <p style={{ color: "#1a5d57", width: "70%", marginLeft: "15%" }}>
          Productivity happens when you work with people you like and that is
          how Findr was built. We try to match you with such people and help you
          find that ‘perfect someone’.
        </p>
      </div>
    </div>
  );
}

export default WhyFindrAbout;
