import React from "react";
import profilePic from "../images/TCUMe1.jpg";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div id="homepage" className="">
        <h1 className="center">The James Ukoli</h1>
        <div className="row picAndQuote">
          <img
            src={profilePic}
            alt={profilePic}
            className="circle-image profilepic"
          />

          <p className="center">
            "I gotta stay on the flow, if I want to grow"
          </p>
          <p className="center">MORE UPDATES COMING TO THE PAGE - 6/2023</p>
        </div>
        <h6 className="center">
          Full-Stack Software Developer👨🏽‍💻 | Adobe Creative Designer👨🏾‍🎨
        </h6>
      </div>
    </>
  );
}

export default HomePage;
