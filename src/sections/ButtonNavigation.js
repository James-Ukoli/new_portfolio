import React, { useRef } from "react";
import "./ButtonNavigation.css";

function ButtonNavigation() {
  // Create refs for each section to scroll to
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  // Scroll to a specific section when a button is clicked
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="scrollable-div Button-container">
      <div
        href="#projects"
        onClick={() => scrollToSection(section2Ref)}
        className="Robot-button"
      >
        Projects📑
      </div>

      <div
        href="#skills"
        onClick={() => scrollToSection(section3Ref)}
        className="Robot-button"
      >
        Skills🖥️
      </div>
      <div
        href="#hobbies"
        onClick={() => scrollToSection(section4Ref)}
        className="Robot-button"
      >
        Hobbies🎨
      </div>
      <div
        href="#contactme"
        onClick={() => scrollToSection(section5Ref)}
        className="Robot-button"
      >
        Contact Me✉️
      </div>
    </div>
  );
}

export default ButtonNavigation;
