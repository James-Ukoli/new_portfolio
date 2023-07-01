import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./sections/Navigation";
import HomePage from "./sections/HomePage";
import Skills from "./sections/Skills";
import Hobbies from "./sections/Hobbies";
import AboutMe from "../src/sections/AboutMe";
import Contact from "../src/sections/ContactMe";

function App() {
  return (
    <>
      <div className="content">
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
