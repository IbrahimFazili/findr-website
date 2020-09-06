import React from "react";
import "./App.css";

import { NavBar } from "./Components/Nav-Bar";
import { AboutHome } from "./Components/HomeAboutUs";
import { WhyFindrAbout } from "./Components/WhyFindrAbout";
import WhatAbout from "./Components/WhatMeans";
import Team from "./Components/Team";
import AboutUs from "./Components/About";

function SecondPage() {
  return (
    <div className="App">
      <NavBar />
      <AboutHome />
      <WhyFindrAbout />
      <WhatAbout />
      <Team />
      <AboutUs />
    </div>
  );
}

export default SecondPage;
