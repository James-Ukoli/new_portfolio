import React from "react";
import { FaHtml5, FaCss3Alt, FaPython, FaJava, FaReact } from "react-icons/fa";
import "./Skills.css";

const iconStyle1 = { color: "red" };
const iconStyle2 = { color: "yellow" };
const iconStyle3 = { color: "cyan" };
const iconStyle4 = { color: "orange" };
const iconStyle5 = { color: "lightgreen" };
const iconSize = 36;

function Skills() {
  return (
    <>
      <div className="">
        <h2 className="center blue-robotic-text">Skills</h2>
        {/* <p>
          I am going to use the bootstrap carousel effect to display all my
          skills to the user (Update)
        </p> */}
        {/* <h4 classname="center">Software Development</h4> */}
        <div id="skills" className="list-container">
          <ul className="no-bullets white-robotic-text">
            <li className="iconAndText">
              <FaHtml5 style={iconStyle4} size={iconSize} />
              <div>HTML5</div>
            </li>
            <li className="iconAndText">
              <FaCss3Alt style={iconStyle3} size={iconSize} />
              <div>CSS</div>
            </li>
            <li className="iconAndText">
              <FaJava style={iconStyle1} size={iconSize} />
              <div>Javascript</div>
            </li>
            <li className="iconAndText">
              <FaPython style={iconStyle2} size={iconSize} />
              <div>Python</div>
            </li>
            <li className="iconAndText">
              <FaReact style={iconStyle5} size={iconSize} />
              <div>React</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
