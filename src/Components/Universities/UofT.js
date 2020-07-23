import React from "react"
import "../../App.css"
import UofTDot from "../../Images/Universities/uoft.png"
import RedDot from "../../Images/red_dot.svg"

function UofT(){
    return(
    <div id="UofTDot">
        <img src={RedDot} id="uoft" className="UofTDotMap" />
        <div class="innerText">
            <img src={UofTDot} id="UniLogoAlt" />
        </div>
    </div>
    )
}

export default UofT