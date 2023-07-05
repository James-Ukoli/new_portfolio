import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navigation from "./sections/Navigation";
import HomePage from "./sections/HomePage";
import Skills from "./sections/Skills";
import Hobbies from "./sections/Hobbies";
import AboutMe from "../src/sections/AboutMe";
import Contact from "../src/sections/ContactMe";
import PlayButton from "./features/PlayButton";

// 1) Play Button/Audio Commentary of Profile
function App() {
  return (
    <>
      <div className="content">
        <PlayButton />
        <Navigation />
        <HomePage />
        <AboutMe />
        <Skills />
        <Hobbies />
        <Contact />
      </div>
    </>
  );
}

export default App;
