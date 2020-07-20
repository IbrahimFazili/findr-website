import React from "react"
import "../App.css"
import MapPic from "../Images/world_map_final.svg"

function Map(){
    return(
        <div className="map">
            <img src={MapPic} className="mapPic"/>
            <div className="network-title">our network</div>
            <div className="network-cap">check out the universities we support!</div>
        </div>
    )
}

export default Map;