import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects">
      <h2 className="center blue-robotic-text">Projects</h2>
      <div className="project-cards">
        <div className="card">
          <h3 className="project-title">FantasyPop</h3>
          <div className="project-tech-stack"></div>
          {/* Tech Stack: React Native, Java/Spring, MySQL, AWS */}
          <p className="project-description"></p>
          {/* <img /> */}
        </div>
        <div className="card">
          <h3 className="project-title">Tik-Tac-Toe</h3>
          {/* Tech Stack: HTML5, CSS, Javascript */}
          <div className="project-tech-stack"></div>
          <p className="project-description"></p>
          {/* <img /> */}
        </div>
        <div className="card">
          <h3 className="project-title"> Olivia's RRS</h3>
          {/* Tech Stack: React, HTML/CSS, Node.js, PostgresSQL */}
          <div className="project-tech-stack"></div>
          <p className="project-description"></p>
          {/* <img /> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
