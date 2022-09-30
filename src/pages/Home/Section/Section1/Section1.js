import React, { useEffect } from "react";
import "./section1.css";
import "font-awesome/css/font-awesome.min.css";

const Section1 = () => {
  useEffect(() => {
    const text = document.querySelector(".sec-text");

    const textLoad = () => {
      setTimeout(() => {
        text.textContent = "Freelancer";
      }, 0);
      setTimeout(() => {
        text.textContent = "software developer";
      }, 4000);
      setTimeout(() => {
        text.textContent = "YouTuber";
      }, 8000); //1s = 1000 milliseconds
    };

    textLoad();
    setInterval(textLoad, 12000);
  }, []);
  return (
    <div>
      <div className="contain">
        <h2 className="lolu">
          {" "}
          <div class="containertext">
            <span class="text first-text">I'm a </span>
            <span class="text sec-text">Freelancer</span>
          </div>
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
