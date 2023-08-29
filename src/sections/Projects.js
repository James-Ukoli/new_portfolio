import React from "react";
import "./Projects.css";
import reactIcon from "../images/icons/icons8-react-js-48.png";
import jsIcon from "../images/icons/icons8-javascript-48.png";
import javaIcon from "../images/icons/icons8-java-48.png";
import mySQL from "../images/icons/icons8-mysql-48.png";
import htmlIcon from "../images/icons/icons8-html5-48.png";
import cssIcon from "../images/icons/icons8-css-48.png";
import postgreSQL from "../images/icons/icons8-postgresql-48.png";
import nodeJSIcon from "../images/icons/icons8-node-js-48.png";
// import springIcon from "../images/icons/icons8-spring-boot-48.png";
import androidIcon from "../images/icons/icons8-android-os-48.png";
import iosIcon from "../images/icons/icons8-ios-48.png";
import bootstrapIcon from "../images/icons/icons8-bootstrap-48.png";

const techStack1 = [reactIcon, androidIcon, iosIcon, javaIcon, mySQL];
const techStack2 = [jsIcon, htmlIcon, cssIcon];
const techStack3 = [reactIcon, cssIcon, nodeJSIcon, postgreSQL];
const techStack4 = [reactIcon, bootstrapIcon, cssIcon];
const techStack5 = [nodeJSIcon, postgreSQL];

function Projects() {
  return (
    <div id="projects">
      <h2 className="center blue-robotic-text center1">Projects</h2>
      <div className="project-cards">
        {/* Project 1 - FantasyPop */}
        <div className="card">
          <h3 className="project-title center1">FantasyPop</h3>

          <div className="project-tech-stack center1 white-robotic-text1">
            Stack:{" "}
            {techStack1.map((icon) => {
              return <img src={icon} alt={icon} />;
            })}
          </div>

          <p className="project-description center1 aqua-text">
            Sports Social Media App Clone
          </p>
        </div>
        {/* Project 2 - Tic-Tac-Toe */}
        <div className="card">
          <h3 className="project-title center1 ">Tik-Tac-Toe</h3>

          <div className="project-tech-stack center1 white-robotic-text1">
            Stack:{" "}
            {techStack2.map((icon) => {
              return <img src={icon} alt={icon} />;
            })}
          </div>

          <p className="project-description center1 aqua-text">
            Play Tic-Tac-Toe VS a Computer/Friend! :)
          </p>
        </div>
        {/* Project 3 - Olivia's RRS */}
        <div className="card">
          <h3 className="project-title center1"> Olivia's RRS</h3>

          {/* Tech Stack: React, HTML/CSS, Node.js, PostgresSQL */}
          <div className="project-tech-stack center1 white-robotic-text1">
            Stack:
            {techStack3.map((icon) => {
              return <img src={icon} alt={icon} />;
            })}
          </div>
          <p className="project-description center1 aqua-text">
            Restauraunt Reservation System Project!
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="project-cards">
        {/* Project 1 - FantasyPop */}
        <div className="card">
          <h3 className="project-title center1">Flashcard App</h3>

          <div className="project-tech-stack center1 white-robotic-text1">
            Stack:{" "}
            {techStack4.map((icon) => {
              return <img src={icon} alt={icon} />;
            })}
          </div>

          <p className="project-description center1 aqua-text">
            Sports Social Media App Clone
          </p>
        </div>
        {/* Project 2 - Tic-Tac-Toe */}
        <div className="card">
          <h3 className="project-title center1 ">We Love Movies</h3>

          <div className="project-tech-stack center1 white-robotic-text1">
            Stack:{" "}
            {techStack5.map((icon) => {
              return <img src={icon} alt={icon} />;
            })}
          </div>

          <p className="project-description center1 aqua-text">
            Play Tic-Tac-Toe VS a Computer/Friend! :)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
