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

  return (
    <div id="hobbies">
      <h1 className="center blue-robotic-text element1">Hobbies</h1>
      <div className="white-robotic-text">
        <h4 className="hobbiesTitle" onClick={handleClick1}>
          Chess
        </h4>
        <h4 onClick={handleClick2}>CyberGlobers</h4>
      </div>
    </div>
  );
}

export default Hobbies;
