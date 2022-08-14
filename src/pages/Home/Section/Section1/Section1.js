import React from "react";
import { Container } from "react-bootstrap";
import "./section1.css";
import "font-awesome/css/font-awesome.min.css";

const Section1 = () => {
  return (
    <Container>
      <div className="contain">
        <h1 className="ui">Hi! I’m Victor,</h1>
        <h2 className="lolu">A Frontend software developer</h2>
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
            <li>
              <a href="https://www.youtube.com/channel/UCHuCwZZfsU2hMTmqA-f5i2w">
                <i className="fa fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Section1;
