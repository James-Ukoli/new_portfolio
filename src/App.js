import "./App.css";
import Navigation from "./sections/Navigation";
import HomePage from "./sections/HomePage";
import Skills from "./sections/Skills";
import Hobbies from "./sections/Hobbies";
import AboutMe from "../src/sections/AboutMe";
import Contact from "../src/sections/ContactMe";

function App() {
  return (
    <>
      <Navigation />
      <HomePage />
      <AboutMe />
      <Skills />
      <Hobbies />
      <Contact />
    </>
  );
}

export default App;
