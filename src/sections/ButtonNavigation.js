import React from "react";
import "./ButtonNavigation.css";

function ButtonNavigation() {
  // Scroll to a specific section when a button is clicked

  return (
    <div className="scrollable-container">
      <div className="scrollable-div">
        <a href="#projects" className="Robot-button">
          Projects📑
        </a>
        <a href="#skills" className="Robot-button">
          Skills🖥️
        </a>
        <a href="#hobbies" className="Robot-button">
          Hobbies🎨
        </a>
        <a href="#contactme" className="Robot-button">
          Contact Me✉️
        </a>
      </div>
    </div>
  );
}

export default ButtonNavigation;
