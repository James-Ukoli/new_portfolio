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
        <h2 className="center">Skills</h2>
        {/* <p>
          I am going to use the bootstrap carousel effect to display all my
          skills to the user (Update)
        </p> */}
        {/* <h4 classname="center">Software Development</h4> */}
        <div className="list-container">
          <ul className="no-bullets ">
            <li>
              <FaHtml5 style={iconStyle4} size={iconSize} /> HTML5
            </li>
            <li>
              <FaCss3Alt style={iconStyle3} size={iconSize} />
              CSS
            </li>
            <li>
              <FaJava style={iconStyle1} size={iconSize} />
              Javascript
            </li>
            <li>
              <FaPython style={iconStyle2} size={iconSize} />
              Python
            </li>
            <li>
              <FaReact style={iconStyle5} size={iconSize} />
              React
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
