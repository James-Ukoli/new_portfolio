import React from "react";
import "./Hobbies.css";

const chessEmoji = "\u2654";
// const roboticsEmoji = "\u1F94";
// const boxingEmoji = "\u1F916";

function Hobbies() {
  return (
    <>
      <div id="hobbies">
        <h2 className="center blue-robotic-text element1">Hobbies</h2>
        <div className="hobby-card white-robotic-text">
          <div className="space-between">
            <div>Chess{chessEmoji} </div>
            <div className="row">
              <div>Level:</div>
              <div>2102</div>
            </div>
          </div>
          {/* <img src={}/> */}
        </div>
        <div className="hobby-card white-robotic-text">
          <div className="space-between">
            <div>Robotics</div>
            <div className="row">
              <div>Level:</div>
              <div>Entry</div>
            </div>
          </div>
          {/* <img src={}/> */}
        </div>
        <div className="hobby-card white-robotic-text">
          <div className="space-between">
            <div>Boxing</div>
            <div className="row">
              <div>Level:</div>
              <div>Amateur</div>
            </div>
          </div>
          {/* <img src={}/> */}
        </div>
      </div>
    </>
  );
}

export default Hobbies;
