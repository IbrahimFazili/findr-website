import React from 'react';
import logo from './Findr_logo2x.png';
import nav_logo from "./F_logo.png";
import './App.css';
import BackArrow from "./back_arrow_green.svg";
import FrontArrow from "./forward_icon_green.svg";
import Placeholder from "./placeholder.jpg"

function App() {
  return (
    <div className="App">
      <ul className="nav-bar">
        <img src={nav_logo} className="nav-logo" />
        <li className="nav-items">Contact Us</li>
        <li className="nav-items">Features</li>
        <li className="nav-items">About Us</li>
      </ul>

      <div className="App-header">
        <img src={logo} className="logo"/>
        <figcaption className="caption">Keep Swiping</figcaption>
        <p className="home-screen-msg">Study Better!</p>
        <p className="home-screen-msg">Network Smarter!</p>
        <p className="app-loc">Launching Soon!</p>
      </div>

      <div className="why-findr">
          <img className="back-arrow" src={BackArrow} />
          <img className="forward-arrow" src={FrontArrow} />
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
    </div>
  );
}

export default App;
