import React from "react"
import "../App.css"

function About(){
    return(
    <div className="bottom-header">
        <div className="launch">Launching soon!</div>
        <div className="aboot-us-div">
          <div className="aboot-us-title">About Us</div>
          <div className="aboot-big-box">
            <div className="aboot-us-text"> Findr is a platform to help you grow and find the perfect partner</div>
            <div className="aboot-us-text">-</div>
            <div className="aboot-us-text">No, dummy, not a date! Partner for your courses, projects, startups, anything!</div>
            <div>
                <ul className="listTerms">
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                    <li>FAQ</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About;