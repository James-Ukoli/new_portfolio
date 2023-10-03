import React from "react";
import "./ButtonNavigation.css";

function ButtonNavigation() {
  // Scroll to a specific section when a button is clicked

  return (
    <div className="scrollable-div Button-container">
      <a href="#projects" className="Robot-button item">
        Projects📑
      </a>
      <a href="#skills" className="Robot-button item">
        Skills🖥️
      </a>
      <a href="#hobbies" className="Robot-button item">
        Hobbies🎨
      </a>
      <a href="#contactme" className="Robot-button item">
        Contact Me✉️
      </a>
    </div>
  );
}

export default ButtonNavigation;
