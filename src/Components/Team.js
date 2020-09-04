import React from "react";
import "../App.css";
import Profile from "./Profile"

function Team(){
    return(
        <div className="why-findr" id="Team">
            <p style={{color: "#1a5d57", marginTop: '5%'}}>meet the team!</p>
            {/* just need @Gautam bootstrap and pass name, position and image to Profile as props */}
        </div>
    )
}

export default Team;