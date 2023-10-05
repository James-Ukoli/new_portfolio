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
import ButtonNavigation from "./sections/ButtonNavigation";
import HobbiesSection from "./sections/HobbiesSection";

// 1) Play Button/Audio Commentary of Profile
function App() {
  return (
    <>
      <div className="content">
        <PlayButton />
        <HomePage />
        <ButtonNavigation />
        <AboutMe />
        <Projects />
        <Skills />
        <HobbiesSection />
        <Contact />
        <Navigation />
      </div>
    </>
  );
}

export default App;
