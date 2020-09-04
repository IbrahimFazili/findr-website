import React from "react";
import "./App.css";

import Nav from "./Components/Nav-Bar";
import Home from "./Components/Home";
import YFindr from "./Components/WhyFindr";
import YFindr2 from "./Components/WhyFindr2";
import Map from "./Components/Map";
import Keywords from "./Components/Keywords";
import Keywords2 from "./Components/Keywords2";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <YFindr />
      <YFindr2 />
      <Map />
      <Keywords />
      <Keywords2 />
      <Contact />
      <About />
    </div>
  );
}

export default App;
