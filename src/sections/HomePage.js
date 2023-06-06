import React from "react";
import profilePic from "../images/TCUMe1.jpg";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="border">
        <h1 className="center">The James Ukoli</h1>
        <div className="row picAndQuote">
          <img
            src={profilePic}
            alt={profilePic}
            className="circle-image profilepic"
          />

          <p className="center">
            "Funny Quote goes here next to profile picture (row)"
          </p>
        </div>
        <h6 className="center">
          Full-Stack Software Developer 👨🏽‍💻 | Adobe Creative Designer 👨🏾‍🎨
        </h6>
      </div>
    </>
  );
}

export default HomePage;
