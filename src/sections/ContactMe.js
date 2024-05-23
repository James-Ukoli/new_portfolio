import React from "react";
import { FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import "./ContactMe.css";

function ContactMe() {
  const handleClick1 = (e) => {
    e.preventDefault();
    window.open("mailto:thejamesukoli@gmail.com");
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/jamesukoli/", "_blank");
  };

  const handleClick3 = (e) => {
    e.preventDefault();
    window.open("https://www.instagram.com/jamesukoli/", "_blank");
  };

  const iconSize = 32;
  const iconStyle = { color: "blue" };
  const iconStyle2 = { color: "purple" };
  const iconStyle3 = { color: "white" };

  return (
    <>
      <div id="contactme">
        <h2 className="center blue-robotic-text">Contact Me</h2>
        <div className="paragraphContainer">
          <p className="white-robotic-text paragraph">
            To get in contact with me for business inquiries, you can reach out
            to me through EMAIL, LinkedIN, and/or instagram. Thanks for checking
            out my page
          </p>
        </div>
        <div className="list">
          <FaMailBulk
            onClick={handleClick1}
            style={iconStyle3}
            size={iconSize}
          />
          <FaLinkedin
            onClick={handleClick2}
            style={iconStyle}
            size={iconSize}
          />
          <FaInstagram
            onClick={handleClick3}
            style={iconStyle2}
            size={iconSize}
          />
        </div>
      </div>
    </>
  );
}

export default ContactMe;
