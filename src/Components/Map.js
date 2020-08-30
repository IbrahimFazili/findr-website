import React, { useState } from "react";
import "../App.css";
import MapPic from "../Images/world_map_final_web.svg";
import BrownU from "./Universities/BrownU";
import NorthWestU from "./Universities/NorthWestU";
import UofT from "./Universities/UofT";

function Map() {
  return (
    <div className="map">
      <img src={MapPic} className="mapPic" />
      <BrownU />
      <NorthWestU />
      <UofT />
      <div className="network-title">our network</div>
      <div className="network-cap">check out the universities we support!</div>
    </div>
  );
}

export default Map;
