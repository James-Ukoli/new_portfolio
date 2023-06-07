import React from "react";
import { FaHome, FaEnvelope, FaTools, FaChild, FaChess } from "react-icons/fa";
import "./Navigation.css"; // Import the CSS file for styling

const Navigation = () => {
  return (
    <nav className="sidebar">
      <ul className="no-bullets">
        <li>
          <a href="#homepage">
            {" "}
            <FaHome />
          </a>
        </li>
        <li>
          <a href="#skills">
            <FaTools />
          </a>
        </li>
        <li>
          <a href="#aboutme">
            <FaChild />
          </a>
        </li>
        <li>
          <a href="#hobbies">
            <FaChess />
          </a>
        </li>
        <li>
          <a href="#contactme">
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
