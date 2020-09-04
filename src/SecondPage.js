import React from "react";
import "./App.css";

import Nav from "./Components/Nav-Bar-About";
import HomeAboutUs from "./Components/HomeAboutUs";
import WhyFindrAbout from "./Components/WhyFindrAbout";
import WhatAbout from "./Components/WhatMeans";
import Team from "./Components/Team";
import AboutUs from "./Components/About";

function SecondPage() {
  return (
    <div className="App">
      <Nav />
      <HomeAboutUs />
      <WhyFindrAbout />
      <WhatAbout />
      <Team />
      <AboutUs />
    </div>
  );
}

export default SecondPage;
