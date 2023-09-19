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
  /// SportsPop Backend Github Link
  const handleClick1 = (e) => {
    e.preventDefault();
    window.open("https://github.com/James-Ukoli/FantasyPop_backend");
  };

  // Tic-Tac-Toe Link
  const handleClick2 = (e) => {
    e.preventDefault();
    window.open("https://s0upernova.github.io/tic-tac-toe/");
  };
  // Olivia's RRS Link
  const handleClick3 = (e) => {
    e.preventDefault();
    window.open(
      "https://reservation-restauraunt-app-front-end-ju.onrender.com/dashboard"
    );
  };

  /// Flashcard App link
  const handleClick4 = (e) => {
    e.preventDefault();
    console.log("This is where I put the link for the flashcard APP ");
  };

  /// We Love Movies Link
  const handleClick5 = (e) => {
    e.preventDefault();
    window.open("https://github.com/James-Ukoli/Movies_ThinkFul");
  };

  return (
    <div id="projects">
      <h2 className="center blue-robotic-text center1">Projects</h2>
      <div className="project-cards">
        {/* Project 1 - FantasyPop */}
        <div className="card">
          <h3 className="project-title center1" onClick={handleClick1}>
            Sports Pop
          </h3>
          <div className="project-tech-stack center1 white-robotic-text1">
            Stack:{" "}
            {techStack1.map((icon) => {
              return <img className="icon" src={icon} alt={icon} />;
            })}
          </div>
          <div className="description-box">
            <p className="project-description center1 aqua-text">
              Sports Social Media App Clone
            </p>
          </div>
        </div>
        {/* Project 2 - Tic-Tac-Toe */}
        <div className="card" onClick={handleClick2}>
          <h3 className="project-title center1">Tik-Tac-Toe</h3>
          <div className="project-tech-stack center1 white-robotic-text1">
            Stack:{" "}
            {techStack2.map((icon) => {
              return <img src={icon} alt={icon} />;
            })}
          </div>
          <div className="description-box">
            <p className="project-description center1 aqua-text">
              Play Tic-Tac-Toe VS a Computer/Friend! :)
            </p>
          </div>
        </div>
        {/* Project 3 - Olivia's RRS */}
        <div className="card" onClick={handleClick3}>
          <h3 className="project-title center1"> Olivia's RRS</h3>

          {/* Tech Stack: React, HTML/CSS, Node.js, PostgresSQL */}
          <div className="project-tech-stack center1 white-robotic-text1">
            Stack:
            {techStack3.map((icon) => {
              return <img src={icon} alt={icon} />;
            })}
          </div>
          <div className="description-box">
            <p className="project-description center1 aqua-text">
              Restauraunt Reservation System Project!
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="project-cards">
        {/* Project 1 - FantasyPop */}
        <div className="card" onClick={handleClick4}>
          <h3 className="project-title center1">Flashcard App</h3>

          <div className="project-tech-stack center1 white-robotic-text1">
            Stack:{" "}
            {techStack4.map((icon) => {
              return <img src={icon} alt={icon} />;
            })}
          </div>
          <div className="description-box">
            <p className="project-description center1 aqua-text">
              Sports Social Media App Clone
            </p>
          </div>
        </div>
        {/* Project 2 - Tic-Tac-Toe */}
        <div className="card" onClick={handleClick5}>
          <h3 className="project-title center1 ">We Love Movies</h3>
          <div className="project-tech-stack center1 white-robotic-text1">
            Stack:{" "}
            {techStack5.map((icon) => {
              return <img src={icon} alt={icon} />;
            })}
          </div>
          <div className="description-box">
            <p className="project-description center1 aqua-text">
              Movie List Backend Application!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
