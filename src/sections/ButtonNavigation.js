import React, { useRef } from "react";
import "./ButtonNavigation.css";

function ButtonNavigation() {
  // Create refs for each section to scroll to
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  // Scroll to a specific section when a button is clicked
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <nav className="Button-container">
        <button
          onClick={() => scrollToSection(section1Ref)}
          className="Robot-button"
        >
          About Me
        </button>
        <button
          onClick={() => scrollToSection(section2Ref)}
          className="Robot-button"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection(section3Ref)}
          className="Robot-button"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection(section4Ref)}
          className="Robot-button"
        >
          Hobbies
        </button>
        <button
          onClick={() => scrollToSection(section5Ref)}
          className="Robot-button"
        >
          Contact Me
        </button>
      </nav>
    </div>
  );
}

export default ButtonNavigation;
