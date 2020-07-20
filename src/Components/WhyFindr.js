import React from "react"
import "../App.css"
import Placeholder from "../Images/placeholder.jpg";

function WhyFindr(){
    return(
     <div className="why-findr">
          <p className="why-findr-title">Why Findr?</p>

          <div>
            <img src={Placeholder} className="pic1"/>
            <figcaption className="pic1cap">don't stop swiping</figcaption>
            <figcaption className="pic1capBottom">find partners for your courses,
            projects, research.</figcaption>
            <figcaption className="pic1capBottom">Take your pick!</figcaption>
          </div>

          <div>
            <img src={Placeholder} className="pic2"/>
            <figcaption className="pic2cap">network smarter</figcaption>
            <figcaption className="pic2capBottom">find peers from different fields</figcaption>
            <figcaption className="pic2capBottom">and expand your network!</figcaption>
          </div>

          <div>
            <img src={Placeholder} className="pic3"/>
            <figcaption className="pic3cap">learn with others</figcaption>
            <figcaption className="pic3capBottom">match with people and</figcaption>
            <figcaption className="pic3capBottom">and more!</figcaption>
          </div> 
      </div>
    )
}

export default WhyFindr;