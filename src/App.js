import "./App.css";
import HomePage from "./sections/HomePage";
import Skills from "./sections/Skills";
import Hobbies from "./sections/Hobbies";
import AboutMe from "../src/sections/AboutMe";
import Contact from "../src/sections/ContactMe";

function App() {
  return (
    <>
      <HomePage />
      <AboutMe />
      <Skills />
      <Hobbies />
      <Contact />
    </>
  );
}

export default App;
