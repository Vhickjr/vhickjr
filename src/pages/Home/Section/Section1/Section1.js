import React from "react";
import "./section1.css";
import "font-awesome/css/font-awesome.min.css";

const Section1 = () => {
  return (
    <div>
      <div className="contain">
        <h2 style={{ color: "white", alignItems: "center" }} className="lolu">
          Hi! I’m Victor,<br></br>A Frontend software developer
        </h2>
      </div>
      <div className="social-menu">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/victor-mathias-585b71205">
              <i className="fa fa-linkedin" />
            </a>
          </li>

          <li>
            <a href="https://www.twitter.com/__therealvictor">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/vhickjr/">
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/victor.mathias.3532">
              <i className="fa fa-facebook" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section1;
