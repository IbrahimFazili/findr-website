import React from 'react';
import '../App.css';
import BackArrow from "../Images/back_arrow_green.svg";
import FrontArrow from "../Images/forward_icon_green.svg";
import iPhone from "../Images/iphone.png";
import logo from '../Images/Findr_logo2x.png';


function Home(){
    return(
    <div className="Home" id="Home">
        <img src={logo} className="logo"/>
        <figcaption className="caption">Keep Swiping</figcaption>
        <p className="home-screen-msg">Study Better!</p>
        <p className="home-screen-msg1">Network Smarter!</p>
        <p className="launching">Launching Soon!</p>
        <img className="back-arrow" src={BackArrow} />
        <img src={iPhone} className="iphone" />
        <img className="forward-arrow" src={FrontArrow} />
    </div>
    )
}

export default Home;