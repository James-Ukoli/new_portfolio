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
const iconSize = 36;

function Skills() {
  return (
    <>
      <h2 className="center blue-robotic-text">Skills</h2>
      <div className="">
        {/* <p>
          I am going to use the bootstrap carousel effect to display all my
          skills to the user (Update)
        </p> */}
        {/* <h4 classname="center">Software Development</h4> */}
        <ul className="white-robotic-text">
          <li>
            <h6>Languages</h6>
          </li>
          <li>
            <h6>Front-End</h6>
          </li>
          <li>
            <h6>Back-End</h6>
          </li>
        </ul>
        <div id="skills" className="">
          <ul className="no-bullets white-robotic-text">
            <li className="no-bullets">
              <div className="iconText">
                <FaJava style={iconStyle1} size={iconSize} />
                <p>JavaScript</p>
              </div>
              <div className="iconText">
                <FaPython style={iconStyle2} size={iconSize} />
                <p>Python</p>
              </div>
            </li>
            <li className="">
              <div classname="iconText">
                <FaReact style={iconStyle5} size={iconSize} />
                <p>React</p>
              </div>
              <div className="iconText">
                <FaHtml5 style={iconStyle4} size={iconSize} />
                <p>HTML5</p>
              </div>
              <div className="iconText">
                <FaCss3Alt style={iconStyle3} size={iconSize} />
                <p>CSS</p>
              </div>
            </li>
            <li className="">
              <div className="iconText">
                <FaNodeJs size={iconSize} style={iconStyle8} />
                <p>Node.js</p>
              </div>
              <div className="iconText">
                <FaDatabase size={iconSize} style={iconStyle7} />
                <p>MySQL</p>
              </div>
              <div className="iconText">
                <FaLeaf size={iconSize} style={iconStyle6} />
                <p>MongoDB</p>
              </div>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Skills;
