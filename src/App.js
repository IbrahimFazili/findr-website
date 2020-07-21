import React from 'react';
import './App.css';

import Nav from "./Components/Nav-Bar"
import Home from "./Components/Home";
import YFindr from "./Components/WhyFindr";
import Map from "./Components/Map";
import Keywords from "./Components/Keywords";
import Contact from "./Components/Contact";
import About from "./Components/AboutUs"

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
    </div> 
  );
}

export default App;
