import React from 'react';
import './App.css';

import Nav from "./Components/Nav-Bar"
import Home from "./Components/Home";
import YFindr from "./Components/WhyFindr";
import Map from "./Components/Map";
import Keywords from "./Components/Keywords";
import Contact from "./Components/Contact";
import About from "./Components/AboutUs";
import HomeAboutUs from "./Components/HomeAboutUs"
import WhyFindrAbout from "./Components/WhyFindrAbout"
import WhatAbout from "./Components/WhatMeans"
import Team from "./Components/Team"
import AboutUs from "./Components/About"

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <YFindr />
      <Map />
      <Keywords />
      <Contact />
      <About/>

      {/* this is the second page */}
      {/* <HomeAboutUs />
      <WhyFindrAbout />
      <WhatAbout />
      <Team/>
      <AboutUs/> */}
    </div> 
  );
}

export default App;
