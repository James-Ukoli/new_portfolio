import React from "react";
import { FaHome, FaEnvelope, FaTools, FaChild, FaChess } from "react-icons/fa";
import "./Navigation.css"; // Import the CSS file for styling

const Navigation = () => {
  return (
    <nav className="sidebar">
      <a href="#homepage">
        <FaHome />
      </a>
      <a href="#skills">
        <FaTools />
      </a>
      <a href="#aboutme">
        <FaChild />
      </a>

      <a href="#hobbies">
        <FaChess />
      </a>

      <a href="#contactme">
        <FaEnvelope />
      </a>
    </nav>
  );
};

export default Navigation;
