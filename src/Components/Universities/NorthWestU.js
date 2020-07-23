import React from "react"
import "../../App.css"
import NorthWest from "../../Images/Universities/northwestern.png"
import RedDot from "../../Images/red_dot.svg"

function NorthWestU(){
    return(
    <div id="NorthWestDot">
        <img src={RedDot} id="NorthWestU" className="NorthRedDotMap" />
        <div class="innerText">
            <img src={NorthWest} id="UniLogo" />
        </div>
    </div>
    )
}

export default NorthWestU