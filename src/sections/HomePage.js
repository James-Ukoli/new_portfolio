import React from "react";
import profilePic from "../images/TCUMe1.jpg";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div id="homepage" className="robotic-text">
        <h1 className="center">The James Ukoli</h1>
        <div className="row picAndQuote">
          <img
            src={profilePic}
            alt={profilePic}
            className="circle-image profilepic"
          />
        </div>
        <br />
        <h6 className="center h6font">
          Software Developer👨🏽‍💻 | Adobe Creative Designer
        </h6>
      </div>
    </>
  );
}

export default HomePage;
