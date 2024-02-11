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
      <div className="classDub white-robotic-text">
        <div className="hobbiesCard">
          <h4 className="hobbiesTitle" onClick={handleClick1}>
            Chess
          </h4>
        </div>
        <div className="hobbiesCard">
          <h4 onClick={handleClick2}>cyberGlobers</h4>
        </div>
        {/* <div className="hobbiesCard">
          <h4>Others</h4>
        </div> */}
      </div>
    </div>
  );
}

export default Hobbies;
