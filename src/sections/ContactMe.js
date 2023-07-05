import React from "react";
import { FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import "./ContactMe.Css";

function ContactMe() {
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
        <div className="contactlinks ">
          <ul className="white-robotic-text">
            <li>
              <a href="mailto:thejamesukoli@gmail.com">
                <FaMailBulk style={iconStyle3} size={iconSize} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jamesukoli/"
                onClick={handleClick2}
              >
                <FaLinkedin style={iconStyle} size={iconSize} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jamesukoli/"
                onClick={handleClick3}
              >
                <FaInstagram style={iconStyle2} size={iconSize} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
