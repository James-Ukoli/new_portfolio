import React from "react";
import { FaChess, FaRobot, FaYoutube } from "react-icons/fa";

const iconSize = 36;
const iconColor1 = { color: "red" };
const iconColor2 = { color: "gray" };
const iconColor3 = { color: "white" };

function Hobbies() {
  return (
    <div className="">
      <h2 className="center blue-robotic-text">Hobbies</h2>
      <p className="paragraph white-robotic-text">
        During my free time I love to play chess online and on the street,
        basketball, boxing and work on robotics and electrical engineering
        projects (entry-level)
      </p>
      <div id="hobbies" className="list-container">
        <ul className="no-bullets white-robotic-text">
          <li>
            <FaChess style={iconColor3} size={iconSize} />
            Chess
          </li>
          <li>
            <FaRobot style={iconColor2} size={iconSize} />
            Robotics
          </li>
          <li>
            <FaYoutube style={iconColor1} size={iconSize} />
            YouTube
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hobbies;
