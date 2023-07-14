import React from "react";
import { FaChess, FaRobot } from "react-icons/fa";
import "./Hobbies.css";

const iconSize = 46;
const iconColor2 = { color: "gray" };
const iconColor3 = { color: "white" };

function Hobbies() {
  return (
    <div className="">
      <h2 className="center blue-robotic-text">Hobbies</h2>
      <p className="paragraph white-robotic-text">
        During my free time I love to play chess online, basketball, boxing and
        work on robotics and electrical engineering projects (entry-level)
      </p>
      <div id="hobbies" className="list-container">
        <FaChess style={iconColor3} size={iconSize} />
        <FaRobot style={iconColor2} size={iconSize} />
      </div>
    </div>
  );
}

export default Hobbies;
