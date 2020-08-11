import React from 'react';
import '../App.css';
import logo from '../Images/Findr_logo2x.png';
import NavBar from "./Nav-Bar-About"

function HomeAboutUs(){
    return(
        <div className="newHome">
            <img src={logo} className="logo"/>
            <figcaption className="caption">Keep Swiping</figcaption>
            <div className="nice-to-meet">nice to meet you</div>
            <div className="about-us-page-title">about us</div>
            <div className="why-us">why us?</div>
            <div className="findr-about">Findr</div>
            <div className="team-about">the team</div>
            {/* <NavBar /> */}
        </div>
    )
}


export default HomeAboutUs;