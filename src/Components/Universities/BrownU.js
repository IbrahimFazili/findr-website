import React from "react"
import "../../App.css"
import RedDot from "../../Images/red_dot.svg"
import BrownUni from "../../Images/Universities/brown_uni.png"

function BrownU(){
    return(
    <div id="BostonUDot">
        <img src={RedDot} id="BrownU" className="redDotMap" />
        <div class="innerText">
            <img src={BrownUni} id="UniLogo" />
        </div>
    </div>
    )
}

export default BrownU