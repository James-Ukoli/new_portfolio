import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaLeaf,
  FaDatabase,
} from "react-icons/fa";
import "./Skills.css";

const iconStyle1 = { color: "red" };
const iconStyle2 = { color: "yellow" };
const iconStyle3 = { color: "cyan" };
const iconStyle4 = { color: "orange" };
const iconStyle5 = { color: "lightgreen" };
const iconStyle6 = { color: "limegreen" };
const iconStyle7 = { color: "silver" };
const iconStyle8 = { color: "yellow" };
const iconSize = 40;

function Skills() {
  return (
    <>
      <h2 className="center blue-robotic-text">Skills</h2>

      <div className="languages">
        <div className="skills-title">
          <h4 className="white-robotic-text">Languages</h4>
        </div>
        <div className="box1 center2">
          <FaJava style={iconStyle1} size={iconSize} />
          <FaPython style={iconStyle2} size={iconSize} />
          <FaReact style={iconStyle5} size={iconSize} />
          <FaHtml5 style={iconStyle4} size={iconSize} />
          <FaCss3Alt style={iconStyle3} size={iconSize} />
          <FaNodeJs size={iconSize} style={iconStyle8} />
          <FaDatabase size={iconSize} style={iconStyle7} />
          <FaLeaf size={iconSize} style={iconStyle6} />
        </div>
      </div>

      <h4 className="white-robotic-text center">Other Skills..</h4>
      <div className="other-skills white-robotic-text center box2">
        <p>Adobe Creatives</p>
        <p>Graphic Design</p>
        <p>Social Media</p>
      </div>
    </>
  );
}

export default Skills;
