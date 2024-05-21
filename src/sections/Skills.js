import React from "react";
import iconBS from "../images/icons/icons8-bootstrap-48.png";
import iconCSS from "../images/icons/icons8-css-48.png";
import iconHTML from "../images/icons/icons8-html5-48.png";
import iconJS from "../images/icons/icons8-javascript-48.png";
import iconMDB from "../images/icons/icons8-mongodb-48.png";
import iconMySQL from "../images/icons/icons8-mysql-48.png";
import iconNode from "../images/icons/icons8-node-js-48.png";
import iconPostgres from "../images/icons/icons8-postgresql-48.png";
import iconPython from "../images/icons/icons8-python-48.png";
import iconReact from "../images/icons/icons8-react-js-48.png";
import "./Skills.css";

function Skills() {
  const icons = [
    iconJS,
    iconPython,
    iconReact,
    iconHTML,
    iconCSS,
    iconNode,
    iconPostgres,
    iconMySQL,
    iconMDB,
    iconBS,
  ];

  return (
    <>
      <h2 id="skills" className="center blue-robotic-text">
        Skills
      </h2>

      <div className="languages">
        <div className="skills-title">
          <h4 className="white-robotic-text1">Languages</h4>
        </div>
        {/* <p className="white-robotic-text">
          I currently specialize in Javascript,Python, and MERN Stack
          Applications.
        </p> */}
        <div className="center2 margin">
          {icons.map((icon) => (
            <img key={icon[icon]} src={icon} alt={icon} />
          ))}
        </div>
      </div>

      <h4 className="white-robotic-text1 center">Other Skills..</h4>

      <div className="other-skills white-robotic-text center box2">
        <p>Adobe Creatives &#x1F4BB;</p>
        <p>Graphic Design &#x1F58C;</p>
        <p>Social Media &#x1F4F7;</p>
      </div>
    </>
  );
}

export default Skills;
