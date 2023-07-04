import React from "react";
// import YouTube from "react-youtube";
import { Carousel } from "react-bootstrap";
import "./AboutMe.css"; // iMPORT Css files

// const videoId = "0U6siM3gj-s";
// const options = {
//   width: "560",
//   height: "315",
//   // Add other options as needed
// };

function AboutMe() {
  return (
    <>
      <div id="aboutme" className="">
        <h2 className="center blue-robotic-text element1">About Me</h2>
        <Carousel interval={5000} data-interval="false">
          <Carousel.Item>
            <div className="white-robotic-text paragraph uppity">
              Hello there! I'm The James Ukoli, aka the Black Jaguar&#129409;! I
              am a highly creative full-stack software engineer that places the
              company’s missions and goals first. Proficient in JavaScript,
              Python, React.js HTML5, CSS, API implementing, Node.JS, Express,
              PostgreSQL, and frameworks like Bootstrap. I am also experienced
              in adobe creative programs, videography and marketing, management,
              and team-based projects.
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" center white-robotic-text youtube-container">
              {/* <iframe
                title="YouTube Video"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/VIDEO_ID`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
              Video About Me Coming soon..
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default AboutMe;
