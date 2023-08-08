import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navigation from "./sections/Navigation";
import HomePage from "./sections/HomePage";
import Skills from "./sections/Skills";
import AboutMe from "../src/sections/AboutMe";
import Contact from "../src/sections/ContactMe";
import PlayButton from "./features/PlayButton";
import Projects from "./sections/Projects";

// 1) Play Button/Audio Commentary of Profile
function App() {
  return (
    <>
      <div className="content">
        <PlayButton />
        <Navigation />
        <HomePage />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
