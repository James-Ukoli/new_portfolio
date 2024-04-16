import React from "react";
// import profilePic from "../images/imagesSet1/TCUMe1.jpg";
import "./HomePage.css";
import profilepic1 from "../images/imagesSet1/profilepic2.jpeg";

function HomePage() {
  return (
    <>
      <div id="homepage" className="robotic-text">
        <h1 className="center aqua">The James Ukoli</h1>
        <div className="row picAndQuote image-container">
          <img
            src={profilepic1}
            alt={profilepic1}
            className="circle-image profilepic"
          />
        </div>

        <h5 className="center h6 ">Software Developer👨🏽‍💻</h5>
        <h5 className="center h6">Adobe Creative Designer</h5>
      </div>
    </>
  );
}

export default HomePage;
