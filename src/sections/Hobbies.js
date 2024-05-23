import React from "react";
import "./Hobbies.css";
// import chessImage from "../images/imagesSet1/chessMe.png"

function Hobbies() {
  const handleClick1 = (e) => {
    e.preventDefault();
    window.open("https://www.chess.com/member/james-ukoli", "_blank");
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    window.open("https://www.instagram.com/cyberGlobers/", "_blank");
  };

  const handleClick3 = (e) => {
    e.preventDefault();
    window.open("https://www.chess.com/member/james-ukoli", "_blank");
  };

  const handleClick4 = (e) => {
    e.preventDefault();
    window.open("https://www.youtube.com/@CyberGlobers", "_blank");
  };

  return (
    <div id="hobbies">
      <h1 className="center blue-robotic-text element1">Hobbies</h1>
      <div className="paragraphContainer">
        <div className="white-robotic-text paragraph">
          During my leisure time, I love to play{" "}
          <span className="Chess-Text" onClick={handleClick3}>
            Chess
          </span>
          &#x265F;. I also got a <span className="YouTube-Text">YouTube</span>{" "}
          Channel called the{" "}
          <span className="CyberGlobers-Text" onClick={handleClick4}>
            CyberGlobers
          </span>
          &#x1F310;, where I keep up with world news in software, tech, and
          robotics. Since you are here, you might as well subscribe &#x1F604;!
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
