import React from 'react';
import logo from './Findr_logo2x.png';
import nav_logo from "./F_logo.png";
import './App.css';
import BackArrow from "./back_arrow_green.svg";
import FrontArrow from "./forward_icon_green.svg";
import Placeholder from "./placeholder.jpg";
import Instagram from "./instagram.png";
import LinkedIn from "./linkedin-round-color.png";
import Facebook from "./facebook.svg";
import iPhone from "./iphone.png"

function App() {
  return (
    <div className="App">
      <ul className="nav-bar">
        <img src={nav_logo} className="nav-logo" />
        <a href="#Contact-Us"><li className="nav-items">Contact Us</li></a>
        <a href="#Keywords"><li className="nav-items">Features</li></a>
        <li className="nav-items">About Us</li>
      </ul>
      
      <div className="App-header">
        <img src={logo} className="logo"/>
        <figcaption className="caption">Keep Swiping</figcaption>
        <p className="home-screen-msg">Study Better!</p>
        <p className="home-screen-msg">Network Smarter!</p>
        <p className="app-loc">Launching Soon!</p>
        <img className="back-arrow" src={BackArrow} />
        <img src={iPhone} className="iphone" />
        <img className="forward-arrow" src={FrontArrow} />
      </div>

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
      <div className="map">
      </div>

      <div className="keywords" id="Keywords">
        <div className="keywords-text">Keywords</div>
        <div className="keywords-caps">choose from a thousand of trendy keywords or make your own!</div>

        <div className="keywords-placeholder">Keywords</div>
        <div className="keywords-caps-placeholder">choose from a thousand of trendy keywords or make your own!</div>
      </div>

      <div className="contact-div" id="Contact-Us">
        <div className="contact-text">contact us</div>
        <div className="sugg-text">send us your questions and suggestions!</div>
        
        <form className="forms">
          <input type="text" placeholder="full name" name="full name"/><br/>
          <input type="text" placeholder="phone number" name="phone number"/><br/>
          <input type="text" placeholder="university" name="university"/><br/>
          <input type="text" placeholder="e-mail address" name="email" className="email"/><br/>
          <textarea rows="6" columns="80" placeholder="message" name="message"></textarea><br/>
          <input type="submit" value="Submit"/>
        </form>

        <div className="social-media">
          <a href="https://www.instagram.com/findr.study/" target="_blank">
            <img src={Instagram} className="social-media-logo"/></a>
          <a href="https://www.facebook.com/findr.study.3" target="_blank">
          <img src={Facebook} className="social-media-logo-facebook"/></a>
          <a href="https://www.linkedin.com/company/findrapp/" target="_blank">
          <img src={LinkedIn} className="social-media-logo-facebook"/></a>
        </div>

        <div className="like">
          <div className="like-title">leave a like!</div>
          <div className="like-plug">follow us on social media for continuous updates</div>
        </div>
      </div>

      <div className="bottom-header">
        <div className="launch">Launching soon!</div>
        <div className="aboot-us-div">
          <div className="aboot-us-title">About Us</div>
          <div className="aboot-us-text"> Findr is a platform to help you grow and find the perfect partner</div>
          <div className="aboot-us-text">-</div>
          <div className="aboot-us-text">No, dummy, not a date! Partner for your courses, projects, startups, anything!</div>
          <div className="number">+1 (647)-779-2407</div>
        </div>
      </div>

    </div>
  );
}

export default App;
