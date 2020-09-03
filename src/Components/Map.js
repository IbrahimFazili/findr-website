import React, { useState } from "react";
import "../App.css";
import MapPic from "../Images/world_map_final_web.svg";
import BrownU from "./Universities/BrownU";
import NorthWestU from "./Universities/NorthWestU";
import UofT from "./Universities/UofT";
import GTech from "./Universities/GTech";

function Map() {
  return (
    <div className="map">
      <div style={{ display: "inline-block", width: "70%" }}>
        <img src={MapPic} className="mapPic" />
        <BrownU />
        <NorthWestU />
        <UofT />
        <GTech />
      </div>
      <div
        style={{
          display: "inline-block",
          width: "30%",
          verticalAlign: "top",
          marginTop: "16%",
          textAlign: "center",
          float: "right",
        }}
      >
        <p className="network-title">our network</p>
        <p className="network-cap">check out the universities we support!</p>
      </div>
    </div>
  );
}

export default Map;
